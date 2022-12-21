import './style.css';
// import Kotaro from './kotaro.png'

function toggleDropDown(e) {
  const dropDownBtn = e.target
  const dropDown = dropDownBtn.nextElementSibling
  dropDown.classList.toggle('hidden')
  // e.target.firstChild.classList.remove('hidden')
}

function hideDropDown(e) {
  e.target.classList.add('hidden')
}

const dropDowns = document.querySelectorAll('.drop-down-btn')
dropDowns.forEach((btn) => {
  btn.addEventListener('click', toggleDropDown)
  const dropDown = btn.nextElementSibling
  dropDown.addEventListener('mouseleave', hideDropDown)
})
