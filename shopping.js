$(document).ready(function() {
    
    let itemCount = 0;
    
    
    const deleteButtonHTML = '<span class="del">Remove</span>';
    
    
    const $cart = $('#cart');
    const $emptyCartMsg = $('#empty');
    const $shoppingCartTitle = $('h3:contains("Shopping Cart")');
    
    
    $('.add').on('click', function() {
        
        itemCount++;
        updateCartCount();
        
        
        if (itemCount === 1) {
            $emptyCartMsg.hide();
        }
        
        
        const $button = $(this);
        const itemID = $button.attr('id');
        const itemName = $button.attr('name');
        
        
        const $cartItem = $('<li>')
            .addClass('cartItem')
            .attr('name', itemID)
            .text(itemName + ' ')
            .append(deleteButtonHTML);
        
        
        $cart.append($cartItem)
            .hide()
            .fadeIn(200);
        
        
        $button.fadeOut(150);
    });
    
    
    $cart.on('click', '.del', function(e) {
        e.stopPropagation();
        
        
        const $removeBtn = $(this);
        const $cartItem = $removeBtn.parent();
        const itemID = $cartItem.attr('name');
        
        
        $cartItem.fadeOut(200, function() {
            $(this).remove();
            
            
            itemCount--;
            updateCartCount();
            
            
            if (itemCount === 0) {
                $emptyCartMsg.fadeIn(200);
            }
            
            
            $('#' + itemID).fadeIn(150);
        });
    });
    
    
    $('.rating').on('click', 'img', function() {
        const $clickedStar = $(this);
        const $starsContainer = $clickedStar.parent();
        const $allStars = $starsContainer.children('img');
        const clickedIndex = $allStars.index($clickedStar);
        
        
        $allStars.each(function(index) {
            const $star = $(this);
            if (index <= clickedIndex) {
                $star.attr('src', 'staron.gif');
            } else {
                $star.attr('src', 'staroff.gif');
            }
        });
        
    
        $starsContainer.closest('figure').data('rating', clickedIndex + 1);
    });
    
    
    function updateCartCount() {
        $shoppingCartTitle.text('Shopping Cart (' + itemCount + ')');
        
        
        if (itemCount > 0) {
            $cart.addClass('has-items');
        } else {
            $cart.removeClass('has-items');
        }
    }
    
    
    $('.rating').each(function() {
        const savedRating = $(this).closest('figure').data('rating');
        if (savedRating) {
            $(this).children('img').each(function(index) {
                $(this).attr('src', index < savedRating ? 'staron.gif' : 'staroff.gif');
            });
        }
    });
});