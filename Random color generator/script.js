function getColor(){
    const rn = Math.floor(Math.random()*16777215);
    const randomCode = "#"+ rn.toString(16);
    document.body.style.backgroundColor = randomCode;


document.querySelector("#btn").addEventListener("click",getColor);
document.querySelector("#color-code").innerHTML = randomCode;
navigator.clipboard.writeText(randomCode);
}
getColor();