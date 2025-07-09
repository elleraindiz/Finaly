
const bigImage = document.querySelector("#big-image")
const img1 = document.querySelector("#img-1")
const img2 = document.querySelector("#img-2")
const img3 = document.querySelector("#img-3")
const img4 = document.querySelector("#img-4")
const img5 = document.querySelector("#img-5")
const img6 = document.querySelector("#img-6")
const img7 = document.querySelector("#img-7")
const img8 = document.querySelector("#img-8")
const img9 = document.querySelector("#img-9")
const img10 = document.querySelector("#img-10")
const img11 = document.querySelector("#img-11")
const img12 = document.querySelector("#img-12")
const img13 = document.querySelector("#img-13")
const img14 = document.querySelector("#img-14")


img1.addEventListener("click", () => {
    bigImage.src = img1.src
})
img2.addEventListener("click", () => {
    bigImage.src = img2.src
})
img3.addEventListener("click", () => {
    bigImage.src = img3.src
})
img4.addEventListener("click", () => {
    bigImage.src = img4.src
})
img5.addEventListener("click", () => {
    bigImage.src = img5.src
})
img6.addEventListener("click", () => {
    bigImage.src = img6.src
})
img7.addEventListener("click", () => {
    bigImage.src = img7.src
})
img8.addEventListener("click", () => {
    bigImage.src = img8.src
})
img9.addEventListener("click", () => {
    bigImage.src = img9.src
})
img10.addEventListener("click", () => {
    bigImage.src = img10.src
})
img11.addEventListener("click", () => {
    bigImage.src = img11.src
})
img12.addEventListener("click", () => {
    bigImage.src = img12.src
})
img13.addEventListener("click", () => {
    bigImage.src = img13.src
})
img14.addEventListener("click", () => {
    bigImage.src = img14.src
})


const aBtn = document.querySelector("#a-btn")
const aBody = document.querySelector("#a-body")

aBtn.addEventListener("click", () => {
    
    aBody.classList.toggle("accordeon-body-open")
    aBtn.classList.toggle("accordeon-btn-open")
})