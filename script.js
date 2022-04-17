let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');


function rotate() {
  
  const currentDate = new Date();

  
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  
  const minutesRotate = minutes*6;
  const secondsRotate = seconds*6;
  const hoursRotate = 30*hours +minutes/2;

  
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}


setInterval(rotate, 1000);