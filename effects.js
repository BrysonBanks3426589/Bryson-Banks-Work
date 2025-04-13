$(document).ready(function() {
    
    $('#signuplink').click(function(e) {
        e.preventDefault(); 
        $('#newsSignup').slideToggle();
        
        
        var span = $('#openclose');
        span.text(span.text() === '+' ? '-' : '+');
    });
    
    
    $('#slogan').hover(
        
        function() {
            $(this).fadeOut('normal', 'linear', function() {
                
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        
        function() {
            $(this).fadeOut('fast', 'swing', function() {
                
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
    

    $('#rose').animate({
        right: '100px',
        opacity: 1
    }, 'slow', 'swing');
    
    
    $('#newsSignup').submit(function(e) {
        e.preventDefault(); 
        alert('Thank you for registering');
        $(this).hide();
        $('#signuplink').fadeTo('slow', 0.3);
        $('#openclose').text('+'); 
    });
});