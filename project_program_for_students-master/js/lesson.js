// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = 'YOUR NUMBER IS VALID!'
    phoneResult.style.color = 'green'
  } else {
    phoneResult.innerHTML = 'YOUR NUMBER IS NOT VALID'
    phoneResult.style.color = 'red'
  }
}

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = 'none'
  })
  tabs.forEach((item) => {
    item.classList.remove('tab_content_item_active')
  })
}
const showTabContent = (i = 0) => {
  tabContent[i].style.display = 'block'
  tabs[i].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
  if (event.target.classList.contains('tab_content_item')) {
    tabs.forEach((item, index) => {
      if (event.target === item) {
        hideTabContent()
        showTabContent(index)
      }
    })
  }
}

let index = 0

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++
    if (i > tabsParent.length) {
      i = 0
    }
    hideTabContent()
    showTabContent(i)
  }, 1000)
}

autoSlider(index)



// MODAL
const modalShow = setTimeout(() => {
  document.querySelector('.modal')
  modal.style.display = 'block'
}, 10000)


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

const scrollOpenModal = () => {
  const scrollPosition = document.documentElement.scrollTop
  const windowHeight = window.innerHeight
  const scrollHeight = document.documentElement.scrollHeight
  if (scrollPosition + windowHeight >= scrollHeight) {
    openModal()
  }
}
window.addEventListener('scroll', scrollOpenModal)

