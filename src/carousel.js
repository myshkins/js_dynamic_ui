import picA from './img/a.jpeg'
import picB from './img/b.jpeg'
import picC from './img/c.jpeg'
import picD from './img/d.jpeg'

let imgObj = {
    "0": picA,
    "1": picB,
    "2": picC,
    "3": picD,
}



const imgSlider = () => {
    const slider = document.createElement('div')
    slider.classList.add('slider')
    const frame = document.createElement('div')
    frame.classList.add('slider-frame')
    slider.appendChild(frame)
    const imgHolder = document.createElement('div')
    imgHolder.classList.add('slider-holder')
    frame.appendChild(imgHolder)

    let keys = Object.keys(imgObj)
    keys.forEach((key) => {
        let i = new Image()
        i.classList.add('slider-image-right')
        i.classList.add('slider-image')
        i.src = imgObj[key]
        imgHolder.appendChild(i)
        imgObj[key] = i
})
    imgObj["0"].classList.add('slider-image-active')

    return slider
}


const sliderController = () => {
    const linkButtons = () => {
        function changeImage(e) {
            let keys = Object.keys(imgObj)
            let currImg = document.querySelector('.slider-image-active')
            currImg.classList.remove('slider-image-active')
            let nextNum = e.target.id.slice(-1)
            keys.forEach((key) => {
                if (key > nextNum) {
                    imgObj[key].classList.remove('slider-image-left')
                    imgObj[key].classList.add('slider-image-right')
                } else if (key < nextNum) {
                    imgObj[key].classList.remove('slider-image-right')
                    imgObj[key].classList.add('slider-image-left')
                } else {
                    imgObj[`${nextNum}`].classList.remove('slider-image-right')
                    imgObj[`${nextNum}`].classList.remove('slider-image-left')
                    imgObj[`${nextNum}`].classList.add('slider-image-active')
                }
            })
        }
        const controlButtons = document.querySelectorAll('.slider-controller i')
        controlButtons.forEach((button) => {
            button.addEventListener('click', changeImage)
        })    
    }

    const loop = () => {
        let i = 0
        while (true) {
            if (i > 4) i = 0
            imgObj[i].classList.add('.slider-image-active')
            
        }
    }
    return { linkButtons, loop, }
}

export { imgSlider, imgObj, sliderController}