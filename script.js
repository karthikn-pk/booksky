let overlaypop=document.querySelector(".overlay")
let popupbox=document.querySelector(".popup-box")
let addpopup=document.getElementById("add-popup-btn")

addpopup.addEventListener('click',function(){
    popupbox.style.display='block'
    overlaypop.style.display='block'
})

let cancelbtn=document.getElementById("cancel-popup")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display='none'
    overlaypop.style.display='none'
})

let container=document.querySelector(".container")
let bookadd=document.getElementById("add-book")
let bookTitle=document.getElementById("book-title-input")
let bookAuthor=document.getElementById("book-author-input")
let bookDescription=document.getElementById("book-description-input")

bookadd.addEventListener("click",function(event){
    event.preventDefault()

    let divNew=document.createElement("div")
    divNew.setAttribute("class","book-container")
    divNew.innerHTML=`<h1>${bookTitle.value}</h1>
    <h5>${bookAuthor.value}</h5>
            <p>${bookDescription.value}</p>
            <button onclick="deleteBook(event)">delete</button>`
    container.append(divNew)
    popupbox.style.display='none'
    overlaypop.style.display='none'
})

function deleteBook(event) {
    event.target.parentElement.remove()
    
}