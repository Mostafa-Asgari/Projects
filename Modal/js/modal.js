let btn = document.querySelector('button')
let modalBox = document.querySelector('.modal-box')
let modal = document.querySelector('.modal')
let span = document.querySelector('span')
let btnBox = document.querySelector('.btn-box')

// $(document).ready(function(){
//     $('.btn').click(function(){
//         this.style.display='none';
//         $('.modal-box').css('display','block');
//     })
// });


btn.addEventListener('click', () => {
    btn.style.display = 'none';
    modalBox.classList.add('active');
    btnBox.style.filter='blur(5px)';
})

span.addEventListener('click', () => {
    modalBox.classList.remove('active');
    btn.style.display = 'block';
    btnBox.style.filter='blur(0)';
})

modalBox.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
        modalBox.classList.remove('active');
        btn.style.display = 'block';
        btnBox.style.filter='blur(0)';
    }
})