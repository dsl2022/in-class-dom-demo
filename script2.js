const paraContainer = document.querySelector("#paragraph-container")
console.log({paraContainer})
const para = document.createElement("p")
para.textContent = "This is a test paragraph!"
console.log({para})
// paraContainer.innerHTML = "<p></p>"
paraContainer.append(para)
console.log({paraContainer})

const foodList = ["Avacado","mushroom","wine"]

const foodContainer = document.getElementById("food-container")
const ul = document.createElement("ul")
foodList.forEach(food=>{
    const li = document.createElement("li")
    li.textContent = food
    ul.append(li)
})
foodContainer.append(ul)

console.log({foodContainer})

const imgContainer = document.getElementById("image-container")

const url1 = "https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg"
const url2 = "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
const url3 = "https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/00tb-cats1-mediumSquareAt3X.jpg"
const imageUrls = [url1, url2, url3]
for(let i=0;i<imageUrls.length;i++){
    const img = document.createElement("img")
    img.setAttribute("src",imageUrls[i])
}
imageUrls.forEach(url =>{
    const img = document.createElement("img")
    img.setAttribute("src",url)
    imgContainer.append(img)
    img.style.width = "10rem"
    console.log({img})
})