

const bigImg = document.querySelector(`#bigimg`)

const thumbs = document.querySelectorAll(`#thumb`)




const setThumb =  (thumb)=> {

 // target refers to what was under the mouse when this event occurred
const chooseImg = (event) => {
    const imgSrc = thumb.getAttribute(`src`)
    bigImg.setAttribute('src',imgSrc)
    
}

 thumb.addEventListener(`click`, chooseImg)



}
thumbs.forEach(setThumb)



// Listen to the entire gallery for a click


