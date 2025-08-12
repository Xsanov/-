// let countdownDate = new Date('October 31, 2025 14:00:00').getTime();

// let interval = setInterval(() => {

//     let now = new Date().getTime();
//     let distance = countdownDate = now;

//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 *60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.querySelector('.days').textContent = days;
//     document.querySelector('.days').textContent = hours;
//     document.querySelector('.days').textContent = minutes;
//     document.querySelector('.days').textContent = seconds;
    

// }, 1000);


function countdown() {
  const targetDate = new Date("2025-10-25T10:00:00"); // Замените на нужную дату
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "Время вышло!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "д. " + hours + "ч. " + minutes + "м. " + seconds + "с. ";

  setTimeout(countdown, 1000);
}

countdown();