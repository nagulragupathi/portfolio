let con_pop=document.querySelector(".con")
let con_btn=document.querySelectorAll(".con-btn")

for (let i = 0; i < con_btn.length; i++) {
    con_btn[i].addEventListener("click",()=>{
        con_pop.classList.toggle("active")
    })
}