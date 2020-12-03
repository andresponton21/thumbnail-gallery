/*
Get the url from the image I clicked, and set that as the url for the big image
*/

// Select the big image, store it's reference
let theBigImg = document.querySelector(`.bigimg`)
let imgOne = document.querySelector(`.one`)
let imgTwo = document.querySelector(`.two`)
let imgThree = document.querySelector(`.three`)


let setThumbToImg = function(theThumbnail) {
  // Store the url from the image that was clicked
  let newSrcUrl = theThumbnail.getAttribute(`src`)
  let newAltTxt = theThumbnail.getAttribute(`alt`)

  // Set the url from the thumb to the big image
  theBigImg.setAttribute(`src`, newSrcUrl)
  theBigImg.setAttribute(`alt`, newAltTxt)
}


// Train the images to set the url for the big image WHEN they hear a click
imgOne.addEventListener(`click`, function() {
  setThumbToImg(imgOne)
})
imgTwo.addEventListener(`click`, function() {
  setThumbToImg(imgTwo)
})
imgThree.addEventListener(`click`, function() { 
  setThumbToImg(imgThree) 
})










