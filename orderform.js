$(document).ready(function() {
    
    $('#name').focus();

    
    $('#name, #address, #city, #zip, #email').blur(validateField);
    $('#shipaddr, #shipcity, #shipzip').blur(validateShippingField);

    
    function validateField() {
        const field = $(this);
        const fieldId = field.attr('id');
        const value = field.val().trim();
        const errorSpan = $('#' + fieldId + 'Err');
        
        if (fieldId === 'name' || fieldId === 'address' || fieldId === 'city') {
            if (value === '') {
                errorSpan.text('This field is required');
                return false;
            }
        } 
        else if (fieldId === 'zip') {
            if (!/^\d{5}$/.test(value)) {
                errorSpan.text('Must be 5 digit number');
                return false;
            }
        }
        else if (fieldId === 'email') {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorSpan.text('Invalid email format');
                return false;
            }
        }
        
        errorSpan.text('');
        return true;
    }

    
    function validateShippingField() {
        if ($('#copy').is(':checked')) return true;
        
        const field = $(this);
        const fieldId = field.attr('id');
        const value = field.val().trim();
        const errorSpan = $('#' + fieldId + 'Err');
        
        if (fieldId === 'shipaddr' || fieldId === 'shipcity') {
            if (value === '') {
                errorSpan.text('This field is required');
                return false;
            }
        } 
        else if (fieldId === 'shipzip') {
            if (!/^\d{5}$/.test(value)) {
                errorSpan.text('Must be 5 digit number');
                return false;
            }
        }
        
        errorSpan.text('');
        return true;
    }

    
    $('#copy').change(function() {
        if ($(this).is(':checked')) {
            $('#shipaddr').val($('#address').val());
            $('#shipcity').val($('#city').val());
            $('#shipzip').val($('#zip').val());
            $('#shipstate').val($('#state').val());
            $('#shipping span.error').text('');
        }
    });


    $('.qty').on('blur', function() {
        let orderTotal = 0;
        
        
        $('.qty').each(function() {
            const index = $(this).attr('id');
            let qty = parseInt($(this).val()) || 0;
            $(this).val(qty); 
            
            const price = parseFloat($('#price' + index).text());
            const total = price * qty;
            $('#total' + index).text(total.toFixed(2));
            
            orderTotal += total;
        });
        
        
        $('#subt').text(orderTotal.toFixed(2));
        
        
        const state = $('#shipstate').val();
        let tax = 0;
        if (state === 'TX') {
            tax = orderTotal * 0.08;
        }
        $('#tax').text(tax.toFixed(2));
        orderTotal += tax;
        
        
        let shipping = 10;
        if (state === 'TX') {
            shipping = 5;
        } else if (state === 'CA' || state === 'NY') {
            shipping = 20;
        }
        $('#ship').text(shipping.toFixed(2));
        orderTotal += shipping;
        
        
        $('#gTotal').text(orderTotal.toFixed(2));
    });

    
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
        
        if (totalQty === 0) {
            $('#orderErr').text('Please order at least one item');
            isValid = false;
        } else {
            $('#orderErr').text('');
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
});