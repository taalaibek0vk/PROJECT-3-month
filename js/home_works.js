// GMAIL

const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
emailCheck.onclick = () => {
  if (regExp.test(emailInput.value)) {
    emailResult.innerHTML = 'Удалось найти аккаунт'
    emailResult.style.color = 'green'
  } else {
    emailResult.innerHTML = 'Не удалось найти аккаунт'
    emailResult.style.color = 'red'
  }
}

// MOVE BLOCK

// const box = document.querySelector('.child_block')
// let positionX = 0
// let positionY = 0

// const move = () => {
//   if (positionX <= 449 && positionY <= 0) {
//     positionX += 2
//     box.style.left = `${positionX}px`
//     setTimeout(move, 10)
//   } else if (positionX >= 449 && positionY <= 449) {
//     positionY += 2
//     box.style.top = `${positionY}px`
//     setTimeout(move, 10)
//   } else if (positionX >= 0 && positionY >= 449) {
//     positionX -= 2
//     box.style.left = `${positionX}px`
//     setTimeout(move, 10)
//   } else if (positionX <= 449 && positionY >= 0) {
//     positionY -= 2
//     box.style.top = `${positionY}px`
//     setTimeout(move, 10)
//   }
// }
// move()

const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop');
const resumeBtn = document.querySelector('.resume')
const clearBtn = document.querySelector('.clear')
const count = document.querySelector('#time').style.color = 'yellow'

let sec = 0;
let interval;

const start = () => {
  const begin = () => {
    sec++;
    time.innerHTML = sec;
  }
  begin()
  interval = setInterval(begin, 1000)
}

const stop = () => { clearInterval(interval); }
const resume = () => { start() }

const clear = () => {
  clearInterval(interval);
  sec = 0;
  time.innerHTML = sec;
}

startBtn.onclick = () => start()
stopBtn.onclick = () => stop()
resumeBtn.onclick = () => resume()
clearBtn.onclick = () => clear()
