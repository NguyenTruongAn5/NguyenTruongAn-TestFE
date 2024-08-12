$(document).ready(function () {
    const $banners = $('.header-banner__img');
    const $dots = $('.header-banner__dots span');
    const $prevButton = $('.header-banner__prev');
    const $nextButton = $('.header-banner__next');
    const $bannerIntro = $('#bannerIntro');
    const $bannerIntroPrice = $('#introPrice');
    let currentIndex = 0;

    function showBanner(index) {
        $banners.each(function (i) {
            $(this).toggle(i === index);
        });
        $dots.each(function (i) {
            $(this).toggleClass('active', i === index);
        });
        if(index === 0) {
            $bannerIntro.show(); 
            $bannerIntroPrice.css({
                bottom: '48px',
                right: '88px',
                left: '',
                bottom: ''
            });
        } else {
            $bannerIntro.hide(); 
            $bannerIntroPrice.css({
                left: '252px',
                bottom: '88px'
            });
        }
    }

    function prevBanner() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : $banners.length - 1;
        showBanner(currentIndex);
    }

    function nextBanner() {
        currentIndex = (currentIndex < $banners.length - 1) ? currentIndex + 1 : 0;
        showBanner(currentIndex);
    }

    $prevButton.on('click', prevBanner);
    $nextButton.on('click', nextBanner);

    $dots.each(function (index) {
        $(this).on('click', function () {
            currentIndex = index;
            showBanner(currentIndex);
        });
    });

    showBanner(currentIndex); 
});
// tips
$(document).ready(function() {
    let currentIndex = 0; 
    const items = $('.container-tips__item'); 
    const dots = $('.container-tips__dots span'); 
    
    function updateActiveItem(index) {
        items.removeClass('active').eq(index).addClass('active');
        dots.removeClass('active').eq(index).addClass('active');
    }

    function moveToNextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        updateActiveItem(currentIndex);
    }

    function moveToPrevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateActiveItem(currentIndex);
    }

    $('.container-tips__next').on('click', function(e) {
        e.preventDefault();
        moveToNextItem();
    });

    $('.container-tips__prev').on('click', function(e) {
        e.preventDefault();
        moveToPrevItem();
    });

    dots.on('click', function() {
        currentIndex = $(this).index(); 
        updateActiveItem(currentIndex);
    });
});

// Responsive
$(document).ready(function() {
    $('#btn-menu-mobi').click(function() {
        $('#menu-mobi').show();
    });
    $('#btn-close-menu').click(function() {
        $('#menu-mobi').hide();
    });
});