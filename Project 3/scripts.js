
let bulb = document.getElementById("ball")
let Switch = document.getElementById("test")

Switch.onclick = ()=>{
    // alert("click")
    if (bulb.src.endsWith("pic_bulboff.gif")){
        bulb.src = "./assets/pic_bulbon.gif";
        Switch.innerText = "OFF"
    }
    else{
        bulb.src = "./assets/pic_bulboff.gif";
        Switch.innerText = "ON"
    }
}