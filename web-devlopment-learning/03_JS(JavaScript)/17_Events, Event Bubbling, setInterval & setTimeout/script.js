let button = document.getElementById("btn");

button.addEventListener("mouseleave", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you are clicked</b> Enjoy your click"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right Click please")
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})
