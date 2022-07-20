$(document).ready(function () {

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        console.log(scrollTop);

        if (scrollTop >= 150) {
            $('.nav-menu').addClass('sticky-menu');
        } else {
            $('.nav-menu').removeClass('sticky-menu');
        }

        if (scrollTop > 5150) {
            $('#card-1').addClass('moveRight');
            $('#card-2').addClass('moveBottom');
            $('#card-3').addClass('moveLeft');
        } else {
            $('#card-1').removeClass('moveRight');
            $('#card-2').removeClass('moveBottom');
            $('#card-3').removeClass('moveLeft');
        }

        if (scrollTop > 700) {
            $('#quality-text').addClass('quality-text');
            $('#quality-img').addClass('quality-img');
        } else {
            $('#quality-text').removeClass('quality-text');
            $('#quality-img').removeClass('quality-img');
        }

        if (scrollTop > 300) {
            $('.btn-move-top').css('display','block');
        } else {
            $('.btn-move-top').css('display','none');
        }
    })

    // $('.btn-move-top').clck(function() {
    //     $(window).scrollTo(0,0);
    // })

});

let btnTop=document.querySelector('.btn-move-top')

btnTop.addEventListener('click', () => {
    window.scrollTo(0,0)
})