var scrollbtn = document.querySelector(".scrolltop");
// var scrollbtn = document.getElementById("scroll_top");

window.addEventListener("scroll", () => {
  scroll();
});
function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
}

scrollbtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const saleEndDate = new Date("2023-10-30T23:59:59").getTime();
const timerInterval = setInterval(updateTimer, 1000);
function updateTimer() {
  const now = new Date().getTime();
  const timeRemaining = saleEndDate - now;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "Sale has ended!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}
updateTimer();

let message = document.querySelector(".sale_box");
let hide_message = document.querySelector(".hide_message");

let hide_salebox = hide_message.addEventListener("click", function () {
  gsap.from(".sale_box", {
    y: -1400,
    transition: 1.8,
    onComplete: () => {
      message.style.display = "none";
    },
  });
});

gsap.from(".sale_box", {
  y: -1400,
  transition: 1,
  duration: 0.5,
});

let curruncy_list = document.querySelectorAll(".curruncylist");
let curruncy_view = document.querySelector(".curruncy_view");
let change_cur = curruncy_list.forEach((e) => {
  e.addEventListener("click", function () {
    curruncy_view.textContent = e.getAttribute("data-currency");
  });
});

let lan_list = document.querySelectorAll(".lanlist");
let lan_view = document.querySelector(".lan_view");
let change_lan = lan_list.forEach((lan) => {
  lan.addEventListener("click", function () {
    lan_view.innerHTML = lan.getAttribute("data-lan");
  });
});

var fbtn = document.querySelector("#footer_btn");
var finput = document.querySelector("#footer_input");
finput.addEventListener("input", function () {
  console.log(finput.value);
  if (finput.value !== "") {
    fbtn.removeAttribute("disabled");
    fbtn.style.color = "#c29958";
  } else {
    fbtn.setAttribute("disabled", "true");
  }
});
