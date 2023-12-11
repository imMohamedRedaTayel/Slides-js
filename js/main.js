
let images = Array.from(document.querySelectorAll('img'))
let myLayer = document.querySelector('.myLayer')
let mainImage = document.querySelector('.mainImage')
let arrowRight = document.querySelector('.fa-arrow-right')
let arrowLeft = document.querySelector('.fa-arrow-left')
let times = document.querySelector('.fa-times')

let indexOfClikedImg = 0

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        myLayer.classList.remove('d-none')
        mainImage.style.backgroundImage = ` url( ${e.target.getAttribute('src')} ) `
        indexOfClikedImg = images.indexOf(e.target)
    })
}

myLayer.addEventListener('click', (e) => {
    if (e.target == myLayer) {
        hideClose()
    }
})

const hideClose = () => {
    myLayer.classList.add('d-none')
}

function getNext() {
    indexOfClikedImg++
    if (indexOfClikedImg == images.length) {
        indexOfClikedImg = 0
    }
    let currentImageSrc = images[indexOfClikedImg].getAttribute('src')
    mainImage.style.backgroundImage = ` url( ${currentImageSrc} ) `
}

function getPrev() {
    indexOfClikedImg--
    if (indexOfClikedImg == -1) {
        indexOfClikedImg = images.length - 1
    }
    let currentImageSrc = images[indexOfClikedImg].getAttribute('src')
    mainImage.style.backgroundImage = ` url( ${currentImageSrc} ) `
}

arrowRight.addEventListener('click', getNext)
arrowLeft.addEventListener('click', getPrev)
times.addEventListener('click', hideClose)

document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowRight') {
        getNext()
    }
    else if (e.key === 'ArrowLeft') {
        getPrev()
    }
    else if (e.key === 'Unidentified') {
        hideClose()
    }
})




