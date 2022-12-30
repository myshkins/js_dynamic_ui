import './style.css';
import {imgSlider, sliderController } from './carousel';

function toggleDropDown(e) {
  const dropDownBtn = e.target
  const dropDown = dropDownBtn.nextElementSibling
  dropDown.classList.toggle('hidden')
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

const slider = imgSlider()
const sliderContainer = document.querySelector('.slider-container')
sliderContainer.prepend(slider)

const imgController = sliderController()
imgController.linkButtons()