const endTime = new Date("2025-04-10T00:00:00").getTime();

function updateTimer(){

    const now = new Date().getTime();

    const distance = endTime - now;

    if (distance < 0){
        clearInterval(timerInterval);
        document.getElementById("time").textContent = "O tempo acabou!";
    }else {

        const hours = Math.floor(distance  / (1000 * 60 * 60));
        const minutos = Math.floor((distance % (1000 *60 *60)) / (1000 * 60));
        const segundos = Math.floor((distance % (1000 *60)) / 1000);

        console.log(hours)

        document.getElementById("horas").textContent = hours.toString().padStart(2,'0');
        document.getElementById("minutos").textContent = minutos.toString().padStart(2,'0');
        document.getElementById("segundos").textContent = segundos.toString().padStart(2,'0');

    }
}

const timerInterval = setInterval(updateTimer, 1000);