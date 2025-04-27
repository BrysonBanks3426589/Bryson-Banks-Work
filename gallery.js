$(document).ready(function() {
    
    var imagePaths = [
        'images/yellow_pompom_mum.jpg',
        'images/purple_single_mum.jpg',
        'images/white_double_mum.jpg',
        'images/pink_single_mum.jpg',
        'images/sunburst_daisy_mum.jpg',
        'images/magenta_daisy_mum.jpg'
    ];
    
    imagePaths.forEach(function(path) {
        var img = new Image();
        img.src = path;
    });

    
    $('#thumbs img').hover(
        function() {
            
            $(this).css({
                'border-color': 'darkgreen',
                'box-shadow': '0 0 5px darkgreen'
            });
        },
        function() {
            
            $(this).css({
                'border-color': '#ddd',
                'box-shadow': 'none'
            });
        }
    );

    
    $('#thumbs img').click(function() {
        var newSrc = $(this).attr('src');
        var newAlt = $(this).attr('alt');
        
        
        $('#lgPic').attr('src', newSrc).attr('alt', newAlt);
        $('#lgTitle').text(newAlt);
        
        
        $('#thumbs img').css('border-color', '#ddd');
        $(this).css('border-color', 'darkgreen');
    });

    
    $('#lgPic').click(function(e) {
        e.preventDefault();
        var imgSrc = $(this).attr('src');
        window.open(imgSrc, '_blank', 'width=800,height=600');
    });

    
    $('#thumbs img:first').css('border-color', 'darkgreen');
});