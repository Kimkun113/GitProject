
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score1")
const start = document.getElementById("start")

start.addEventListener("click",function(){
  startGameEl.style.display = 'none';
    gameEl.style.display = 'flex';

});
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
// sau một khoảmh thời gian thực hiện 1 lần
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let Alive = setInterval(function () {
  score.innerText++;
  // lấy vị trí y hiện tại ;của khủng long
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // lấy vị trí x hiên tại của xương rồng
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!" + "Your score :"+ score.innerText++);
  }
 
  
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
