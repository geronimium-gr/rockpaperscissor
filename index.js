
let weapon = [
  {
    weaponName: "paper",
    imageUrl: "./images/icon-paper.svg",
    color: "bg-1",
  },
  {
    weaponName: "scissor",
    imageUrl: "./images/icon-scissors.svg",
    color: "bg-2",
  },
  {
    weaponName: "rock",
    imageUrl: "./images/icon-rock.svg",
    color: "bg-3",
  },
];

let aiRandom = weapon[Math.floor(Math.random() * weapon.length)];

const chooseWeapon = document.querySelector(".weapon");
const battleScene = document.querySelector(".battle");

const score_human = document.querySelector(".scoreboard_num");

const yourChoice = document.getElementById("img-choice");
const aiChoice = document.getElementById("ai-img-choice");

const results = document.querySelector(".results");
const textResults = document.querySelector(".text-results");
const playAgain = document.querySelector(".play-again");

const ripple = document.querySelector(".your-choice");
const randomChoosing = document.querySelector(".ai-choice");

const lifeBar = document.querySelector(".life");
const lifeRetry = document.querySelector(".life-title");

const paper = document.querySelector(".weapon_paper");
const rock = document.querySelector(".weapon_rock");
const scissor = document.querySelector(".weapon_scissor");

sessionStorage.getItem("tries");
lifeCounter(Number(sessionStorage.getItem("tries")));

function renderScore() {
  score_human.textContent = sessionStorage.getItem("human");
}

if (sessionStorage.getItem("human") !== null) {
  renderScore();
}

paper.addEventListener("click", () => {
  console.log("paper");
  const imageWeapon = weapon.filter(
    (element) => element.weaponName === "paper"
  );

  startBattle(imageWeapon[0], aiRandom);
});

rock.addEventListener("click", () => {
  console.log("rock");
  const imageWeapon = weapon.filter((element) => element.weaponName === "rock");

  startBattle(imageWeapon[0], aiRandom);
});

scissor.addEventListener("click", () => {
  console.log("scissor");
  const imageWeapon = weapon.filter(
    (element) => element.weaponName === "scissor"
  );

  startBattle(imageWeapon[0], aiRandom);
});

function startBattle(weapon, computer) {
  chooseWeapon.style.display = "none";
  battleScene.style.display = "grid";
  yourChoice.setAttribute("src", weapon.imageUrl);
  results.style.display = "none";
  ripple.classList.add(weapon.color);
  randomChoosing.style.animation = "choosing 2s";

  setTimeout(() => {
    randomChoosing.classList.add(computer.color);
    aiChoice.setAttribute("src", computer.imageUrl);
    compareWeapons(weapon.weaponName, computer.weaponName);
    results.style.display = "block";
    //ripple.classList.add("weapon-animation");
    ripple.style.animation = "outerCircle 1s infinite linear";
  }, 3000);
}

function compareWeapons(human, computer) {
  const humanScore = sessionStorage.getItem("human");
  const triesCount = sessionStorage.getItem("tries");
  if (human === computer) {
    textResults.textContent = "DRAW";
  } else if (
    (human === "scissor" && computer === "rock") ||
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissor")
  ) {
    textResults.textContent = "YOU LOSE";
    sessionStorage.setItem("tries", Number(triesCount) + 1);
    lifeCounter(Number(sessionStorage.getItem("tries")));
    if (Number(sessionStorage.getItem("tries")) === 3) {
      lifeCounter(3);
      textResults.textContent = "GAME OVER";
      sessionStorage.setItem("human", Number(0));
      sessionStorage.setItem("tries", Number(0));
    }
  } else {
    textResults.textContent = "YOU WIN";
    sessionStorage.setItem("human", Number(humanScore) + 1);
    renderScore();
  }
}

function lifeCounter(value) {
  if (Number(sessionStorage.getItem("tries")) === 0) {
    lifeBar.style.background = `linear-gradient(90deg, rgba(220, 46, 78, 1) 0%, rgba(255, 255, 255, 1) 0%)`;
  } else {
    const compute = (50 / (150 / value)) * 100;
    lifeBar.style.background = `linear-gradient(90deg, rgba(220, 46, 78, 1) ${compute}%, rgba(255, 255, 255, 1) 100%)`;
    lifeRetry.style.color = "var(--base-color)";
  }
}

function resetGame() {
  window.location.reload();
}
