let cols = document.querySelectorAll('.col')
let btn = document.querySelector('button')
let o = document.getElementById('o')
let xo = document.querySelector('.xo')
let boxes = document.querySelector('.boxes')
let winner = document.querySelector('.winner')
let container = document.querySelector('.container')
let main = document.querySelector('.main')

let col1 = document.querySelector('.col1')
let col2 = document.querySelector('.col2')
let col3 = document.querySelector('.col3')
let col4 = document.querySelector('.col4')
let col5 = document.querySelector('.col5')
let col6 = document.querySelector('.col6')
let col7 = document.querySelector('.col7')
let col8 = document.querySelector('.col8')
let col9 = document.querySelector('.col9')


// btn.disabled = true;

boxes.style.pointerEvents = "none";
// document.body.style.cursor = "not-allowed";
main.addEventListener('mouseover', e => {
    if (e.target.className === 'container') {
        container.style.cursor = 'not-allowed'
    };
})


btn.addEventListener('click', () => {
    boxes.style.pointerEvents = "auto";
    btn.style.display = 'none'
    xo.style.display = 'block'
})

for (let col of cols) {
    col.addEventListener('click', (e) => {
            // console.log(col);
            // col.className += ' mm'
            col.classList.add('mm');
            // col.style.backgroundColor = 'rgba(138, 255, 163, 0.4)'
            if (o.innerHTML === 'O') {
                col.innerHTML = 'O'
                col.style.color = '#0004e0'
                col.style.backgroundColor = 'rgba(42, 78, 131, 0.4)'
                o.innerHTML = 'X'
                o.style.color = 'rgb(255, 22, 22)'
            } else {
                col.innerHTML = 'X'
                col.style.color = 'rgb(255, 22, 22)'
                col.style.backgroundColor = 'rgba(255, 168, 183, 0.4)'
                o.innerHTML = 'O'
                o.style.color = '#0004e0'
            }
            if (col.innerHTML !== null) {
                col.style.cursor = 'not-allowed' //اگر محتوا خالی نباشد کرسر را برابر ممنوع قرار بده
            }
            if (((col1.innerHTML === 'X') && (col2.innerHTML === 'X') && (col3.innerHTML === 'X')) ||
                ((col1.innerHTML === 'O') && (col2.innerHTML === 'O') && (col3.innerHTML === 'O')) ||
                ((col4.innerHTML === 'X') && (col5.innerHTML === 'X') && (col6.innerHTML === 'X')) ||
                ((col4.innerHTML === 'O') && (col5.innerHTML === 'O') && (col6.innerHTML === 'O')) ||
                ((col7.innerHTML === 'X') && (col8.innerHTML === 'X') && (col9.innerHTML === 'X')) ||
                ((col7.innerHTML === 'O') && (col8.innerHTML === 'O') && (col9.innerHTML === 'O')) ||
                ((col1.innerHTML === 'X') && (col4.innerHTML === 'X') && (col7.innerHTML === 'X')) ||
                ((col1.innerHTML === 'O') && (col4.innerHTML === 'O') && (col7.innerHTML === 'O')) ||
                ((col2.innerHTML === 'X') && (col5.innerHTML === 'X') && (col8.innerHTML === 'X')) ||
                ((col2.innerHTML === 'O') && (col5.innerHTML === 'O') && (col8.innerHTML === 'O')) ||
                ((col3.innerHTML === 'X') && (col6.innerHTML === 'X') && (col9.innerHTML === 'X')) ||
                ((col3.innerHTML === 'O') && (col6.innerHTML === 'O') && (col9.innerHTML === 'O')) ||
                ((col1.innerHTML === 'X') && (col5.innerHTML === 'X') && (col9.innerHTML === 'X')) ||
                ((col1.innerHTML === 'O') && (col5.innerHTML === 'O') && (col9.innerHTML === 'O')) ||
                ((col3.innerHTML === 'X') && (col5.innerHTML === 'X') && (col7.innerHTML === 'X')) ||
                ((col3.innerHTML === 'O') && (col5.innerHTML === 'O') && (col7.innerHTML === 'O'))) {
                console.log('شما برنده شدید !')
                    // winner.style.display = 'block'
                if (o.innerHTML === "O") {
                    xo.innerHTML = 'برنده شد X بازیکن !'
                    xo.style.color = 'rgb(255, 22, 22)'
                    xo.style.fontSize = '25px'
                } else {
                    xo.innerHTML = 'برنده شد O بازیکن !'
                    xo.style.color = '#0004e0'
                    xo.style.fontSize = '25px'
                }
                boxes.style.pointerEvents = "none";
            }

        }, { once: true }) //فقط یکبار کلیک کردن
}