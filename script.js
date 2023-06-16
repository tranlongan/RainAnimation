let containerStars = document.getElementById('container_stars')
let numberOffStars = 80;
let arrColorOfStars = ["#DDDDDD", "#EE0000", "#FFFFFF", "#FFFFCC", "#FFFF99", "#FFFF66", "#CCFF99", "#99FF66", "#CCCCFF", "#FF0000", "#00FF00", "#FF0033"]
let width = document.documentElement.clientWidth
let height = document.documentElement.clientHeight
let arrBlur = ["2px", "0"]
let arrBorderRadius = ["50%", "0"]


for (let i = 0; i <= numberOffStars; i++) {
    let randomColor = Math.floor(Math.random() * arrColorOfStars.length - 1)
    let randomWidth = Math.floor(Math.random() * 8) + 2
    let randomTop = Math.floor(Math.random() * height) + 4
    let randomLeft = Math.floor(Math.random() * width) + 4
    let randomBlur = Math.floor(Math.random() * arrBlur.length - 1)
    let randomTime = Math.floor(Math.random() * 5) + 3
    let randomShadow = Math.floor(Math.random() * 8) + 4

    const star = document.createElement('div')
    star.classList.add('four-pointed-star')
    star.style.position = 'absolute'
    star.style.setProperty('--width-stars', `${randomWidth}px`)
    star.style.setProperty('--height-stars', `${randomWidth}px`)
    star.style.setProperty('--color-stars', arrColorOfStars[randomColor])
    star.style.setProperty('--boxShadow-stars', `0px 0px ${randomShadow}px ${arrColorOfStars[randomColor]}`)
    star.style.top = `${randomTop}px`
    star.style.left = `${randomLeft}px`
    star.style.filter = `blur(${arrBlur[randomBlur]})`
    star.style.animation = `rain ${randomTime}s ease-in infinite`
    containerStars.appendChild(star)
}