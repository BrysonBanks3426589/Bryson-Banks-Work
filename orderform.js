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
        
        $('.qty').each(function() {
            const index = $(this).attr('id').replace('qty', '');
            let qty = parseInt($(this).val()) || 0;
            $(this).val(qty); 
            
            const price = parseFloat($('#price' + index).text().replace('$', ''));
            const total = price * qty;
            $('#total' + index).text('$' + total.toFixed(2));
            
            orderTotal += total;
        });
        
        $('#subt').text('$' + orderTotal.toFixed(2));
        
        const state = $('#shipstate').val();
        let tax = 0;
        if (state === 'TX') {
            tax = orderTotal * 0.0825;
        }
        $('#tax').text('$' + tax.toFixed(2));
        
        let shipping = 10;
        if (state === 'TX') {
            shipping = 5;
        } else if (state === 'CA' || state === 'NY') {
            shipping = 20;
        }
        $('#ship').text('$' + shipping.toFixed(2));
        
        $('#gTotal').text('$' + (orderTotal + tax + shipping).toFixed(2));
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