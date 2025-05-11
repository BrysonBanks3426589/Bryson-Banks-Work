$(document).ready(function() {
    
    $('nav a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    
    $('.skill-card').hover(
        function() {
            $(this).css('box-shadow', '0 10px 20px rgba(0,0,0,0.2)');
        },
        function() {
            $(this).css('box-shadow', '0 2px 5px rgba(0,0,0,0.1)');
        }
    );

    
    function updateCurrentYear() {
        const year = new Date().getFullYear();
        $('footer').append(`<p>© ${year} My Academic Portfolio. All rights reserved.</p>`);
    }
    updateCurrentYear();

    
    $('.assignment-card').click(function() {
        $(this).toggleClass('active');
        $(this).find('.assignment-details').slideToggle();
    });

    
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        const email = $('#email').val();
        if (!isValidEmail(email)) {
            $('#email-error').text('Please enter a valid email address').show();
            return false;
        }
        return true;
    });

    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});