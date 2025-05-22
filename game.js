let score = 0;
const heart = document.getElementById("heart");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

function moveHeart() {
  const maxX = window.innerWidth - heart.clientWidth;
  const maxY = window.innerHeight - heart.clientHeight;

  let randomX, randomY;
  do {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;
  } while (randomX < 100 && randomY > window.innerHeight - 100);

  heart.style.left = `${randomX}px`;
  heart.style.top = `${randomY}px`;
  heart.style.opacity = "1";
  heart.style.transform = "translateY(0) rotate(0deg)";
}

function collectHeart() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;

  heart.style.transform = `translateY(${window.innerHeight - heart.getBoundingClientRect().top}px) rotate(180deg)`;
  heart.style.opacity = "0";

  setTimeout(() => {
    if (score >= 5) {
      setTimeout(() => {
        alert("You won!");
        heart.style.display = "none"; 
        scoreDisplay.style.display = "none";
        startButton.textContent = "Play Again";
        startButton.style.display = "block";
      }, 100);
    } else {
      moveHeart();
    }
  }, 800);
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  startButton.style.display = "none"; 
  heart.style.display = "block"; 
  scoreDisplay.style.display = "block"; 
  moveHeart();
}

startButton.addEventListener("click", startGame);
heart.addEventListener("click", collectHeart);
window.addEventListener("resize", moveHeart);