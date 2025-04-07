$(document).ready(function() {
    
    $('.botanic').hide();
    
    
    $('.imgdiv').hide();
    
    
    $('h1, h2').hover(
        function() { 
            $(this).css('color', '#07a');
        },
        function() { 
            $(this).css('color', 'darkgreen');
        }
    );
    
    
    $('.flower').click(function() {
        $('.botanic').hide(); 
        $(this).children('.botanic').show(); 
    });
    
    
    $('.pic').hover(
        function(evt) { 
            var flowerId = '#' + $(this).attr('title');
            var x = evt.pageX + 150;
            var y = evt.pageY;
            $(flowerId).css({
                'top': y + 'px',
                'left': x + 'px'
            }).show();
        },
        function() { 
            var flowerId = '#' + $(this).attr('title');
            $(flowerId).hide();
        }
    );
    

    $(document).keypress(function(e) {
        var keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = '#' + keyPressed;
    });
});