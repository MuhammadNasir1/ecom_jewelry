const saleEndDate = new Date("2023-09-15T23:59:59").getTime();
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

let dropdown_det = document.querySelector(".dropdown_details");
let curruncy_name = document.querySelector(".curruncy_name");

let ddownshow = curruncy_name.addEventListener("mouseenter", function () {
  dropdown_det.style.display = "block";
});
let curruncy_list = document.querySelectorAll(".curruncylist");
let change_cur = curruncy_list.forEach((e) => {
  e.addEventListener("click", function () {
    curruncy_name.innerHTML =
      e.getAttribute("data-currency") +
      '<i class="fa-solid fa-chevron-down"></i>';
  });
});

let hide_text = document.querySelectorAll(".hide_text");

hide_text.forEach((element) => {
  element.addEventListener("mouseleave", function () {
    element.style.display = "none";
  });
});

// dropdown_det.forEach((element) => {
//   element.addEventListener("mouseout", function () {
//     // You can hide the element by changing its display property to "none"
//     element.style.display = "none ";
//   });
// });
