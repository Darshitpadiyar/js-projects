var time=60;
var score = 0;
var hitnumber;
function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
  
}
function changehit(){
  hitnumber= Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitnumber;
}
function createbubble() {
  var clutter = "";
  for (i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer(){
  var timerinterval = setInterval(function(){
    if(time>0){
      time--;
      document.querySelector("#Timerval").textContent=time;}
      else{
        clearInterval(timerinterval);
        document.querySelector("#pbtm").innerHTML=` <h2>Game Over</h2>`;
      }
    },1000);
  }
  document.querySelector("#pbtm").addEventListener("click",function(detail){
   
    var clickedNo = Number(detail.target.textContent) ;
    if(clickedNo===hitnumber){
      increaseScore();
     changehit();
     createbubble();
    }
  });
  
  runtimer();
  createbubble();
  changehit();

