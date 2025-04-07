$(document).ready(function() {
    // Hide all botanical names when page loads
    $('.botanic').hide();
    
    // Hide all image divs when page loads
    $('.imgdiv').hide();
    
    // Mouseover/mouseout for headings
    $('h1, h2').hover(
        function() { // mouseover
            $(this).css('color', '#07a');
        },
        function() { // mouseout
            $(this).css('color', 'darkgreen');
        }
    );
    
    // Click event for flower names
    $('.flower').click(function() {
        $('.botanic').hide(); // hide all botanical names
        $(this).children('.botanic').show(); // show current one
    });
    
    // Hover event for flower names with images
    $('.pic').hover(
        function(evt) { // mouseover
            var flowerId = '#' + $(this).attr('title');
            var x = evt.pageX + 150;
            var y = evt.pageY;
            $(flowerId).css({
                'top': y + 'px',
                'left': x + 'px'
            }).show();
        },
        function() { // mouseout
            var flowerId = '#' + $(this).attr('title');
            $(flowerId).hide();
        }
    );
    
    // Keypress event for jumping to letters
    $(document).keypress(function(e) {
        var keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = '#' + keyPressed;
    });
});