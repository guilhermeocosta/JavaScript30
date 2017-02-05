(() => {
    const secondHand = document.querySelector('.second-hand'),
          minuteHand = document.querySelector('.min-hand'),
          hourHand = document.querySelector('.hour-hand');

    function setDate() {
      const now = new Date(),
            seconds = now.getSeconds(),
            minutes = now.getMinutes(),
            hours = now.getHours();

      secondHand.style.transform = `rotate(${secondsDegree(seconds)}deg`;
      minuteHand.style.transform = `rotate(${minutesDegree(minutes)}deg)`;
      hourHand.style.transform = `rotate(${hoursDegree(hours)}deg)`;

      console.log(secondsDegree(seconds));
    }

    const secondsDegree = (seconds) => ((seconds / 60) * 360) + 90;
    const minutesDegree = (minutes) => (minutes / 60) * 360;
    const hoursDegree = (hours) => (hours / 12) * 360;


    setInterval(setDate, 1000)
})();
