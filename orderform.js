$(document).ready(function() {
    $('#name').focus();

    
    $('#name, #address, #city, #zip, #email').blur(validateField);
    $('#shipaddr, #shipcity, #shipzip').blur(validateShippingField);

    
    $('#copy').change(function() {
        if ($(this).is(':checked')) {
            $('#shipaddr').val($('#address').val()).trigger('blur');
            $('#shipcity').val($('#city').val()).trigger('blur');
            $('#shipzip').val($('#zip').val()).trigger('blur');
            $('#shipstate').val($('#state').val());
            $('.shipping span.error').text('');
        } else {
            $('#shipaddr, #shipcity, #shipzip').val('');
        }
    });

   
    function calculateOrder() {
        let orderTotal = 0;
        let hasItems = false;
        
        $('.qty').each(function() {
            const index = $(this).attr('id');
            let qty = parseInt($(this).val()) || 0;
            
            if (qty > 0) hasItems = true;
            
            const price = parseFloat($('#price' + index).text().replace(/[^0-9.-]/g, ''));
            const total = price * qty;
            $('#total' + index).text('$' + total.toFixed(2));
            orderTotal += total;
        });
        
        $('#subt').text('$' + orderTotal.toFixed(2));
        
        const state = $('#shipstate').val();
        let tax = state === 'TX' ? orderTotal * 0.0825 : 0;
        $('#tax').text('$' + tax.toFixed(2));
        
        let shipping = 10;
        if (state === 'TX') shipping = 5;
        else if (state === 'CA' || state === 'NY') shipping = 20;
        $('#ship').text('$' + shipping.toFixed(2));
        
        const grandTotal = orderTotal + tax + shipping;
        $('#gTotal').text('$' + grandTotal.toFixed(2));
        
        return hasItems; 
    }
    
    $('.qty').on('change keyup blur', calculateOrder);
    $('#state, #shipstate').change(calculateOrder);

    
    calculateOrder();

   
    $('#order').submit(function(e) {
        let isValid = true;
        
       
        $('#name, #address, #city, #zip, #email').each(function() {
            if (!validateField.call(this)) {
                isValid = false;
            }
        });
        
        
        if (!$('#copy').is(':checked')) {
            $('#shipaddr, #shipcity, #shipzip').each(function() {
                if (!validateShippingField.call(this)) {
                    isValid = false;
                }
            });
        }
        
        
        let totalQty = 0;
        $('.qty').each(function() {
            totalQty += parseInt($(this).val()) || 0;
        });
        
        if (totalQty <= 0) {
            $('#orderErr').text('Please order at least one item');
            isValid = false;
        } else {
            $('#orderErr').text('');
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });

    
    function validateField() {
        
    }

    function validateShippingField() {
       
    }
});