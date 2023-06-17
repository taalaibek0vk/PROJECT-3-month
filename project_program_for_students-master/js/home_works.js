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


//   MOVE BLOCK

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

// COUNTER BLOCK

// const startBtn = document.querySelector('.start')
// const stopBtn = document.querySelector('.stop');
// const resumeBtn = document.querySelector('.resume')
// const clearBtn = document.querySelector('.clear')
// const count = document.querySelector('#time').style.color = 'yellow'

// let sec = 0;
// let interval;

// const start = () => {
//   const begin = () => {
//     sec++;
//     time.innerHTML = sec;
//   }
//   begin()
//   interval = setInterval(begin, 1000)
// }

// const stop = () => { clearInterval(interval); }
// const resume = () => { start() }

// const clear = () => {
//   clearInterval(interval);
//   sec = 0;
//   time.innerHTML = sec;
// }

// startBtn.onclick = () => start()
// stopBtn.onclick = () => stop()
// resumeBtn.onclick = () => resume()
// clearBtn.onclick = () => clear()


// STOPWATCH
// const minutesBlock = document.querySelector('#minutes'),
//   secondsBlock = document.querySelector('#seconds'),
//   mlSecondsBlock = document.querySelector('#ml-seconds'),
//   startButton = document.querySelector('#start'),
//   stopButton = document.querySelector('#stop'),
//   resetButton = document.querySelector('#reset')

// let interval
// let minutes = 0
// let seconds = 0
// let mlSeconds = 0

// const startTimer = () => {
//   mlSeconds++
//   mlSeconds <= 99 && (mlSecondsBlock.innerHTML = mlSeconds)
//   mlSeconds == 100 && (mlSecondsBlock.innerHTML = '00')

//   mlSecondsBlock.innerHTML = `0${mlSeconds}`
//   mlSeconds > 9 && (mlSecondsBlock.innerHTML = mlSeconds)
//   if (mlSeconds > 99) {
//     seconds++
//     secondsBlock.innerHTML = `0${seconds}`
//     mlSeconds = 0
//   }
//   seconds > 9 && (secondsBlock.innerHTML = seconds)
//   if (seconds > 59) {
//     minutes++
//     minutesBlock.innerHTML = `0${minutes}`
//     seconds = 0
//     secondsBlock.innerHTML = `0${seconds}`
//   }
//   minutes > 9 && (minutesBlock.innerHTML = minutes)
// }

// startButton.onclick = () => {
//   clearInterval(interval)
//   interval = setInterval(startTimer, 10)
// }

// stopButton.onclick = () => {
//   clearInterval(interval)
// }

// resetButton.onclick = () => {
//   clearInterval(interval)
//   minutes = 0
//   seconds = 0
//   mlSeconds = 0
//   minutesBlock.innerHTML = '00'
//   secondsBlock.innerHTML = '00'
//   mlSecondsBlock.innerHTML = '00'
// }

// MODAL
// 3 пункт
const modalShow = setTimeout(() => {
  document.querySelector('.modal')
  modal.style.display = 'block'
}, 10000)

// 4 пункт
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = ''
}
modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()

// 2 пункт
const scrollOpenModal = () => {
  const scrollPosition = document.documentElement.scrollTop
  const windowHeight = window.innerHeight
  const scrollHeight = document.documentElement.scrollHeight
  if (scrollPosition + windowHeight >= scrollHeight) {
    openModal()
  }
}
window.addEventListener('scroll', scrollOpenModal)