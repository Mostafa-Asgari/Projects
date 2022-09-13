$(document).ready(function(){
    $('.bars').click(function(){
        console.log('hello!!!!!!');
        $('ul.menu2').css('display', 'block');
        $(this).css('display', 'none');
        $('.cross').css('display', 'block');
    });
    $('.cross').click(function(){
        $(this).css('display', 'none');
        $('.bars').css('display', 'block');
        $('ul.menu2').css('display', 'none');
    });
});





let scrollTop = document.querySelector('.box-iconTop')
window.addEventListener('scroll', () => {
    let top = window.scrollY;
    if(top > 200){
        scrollTop.style.display = 'block'
    } else {
        scrollTop.style.display = 'none'
    }
})

scrollTop.addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
})
window.addEventListener('load', () => {
    scrollTop.style.display = 'none';
})