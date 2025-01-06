// Configura la fecha y hora de revelación
const revealDate = new Date('2025-01-06T00:00:00');

// Mensaje secreto (puedes cambiarlo o encriptarlo)
const secretMessage = "Este regalo es para: Elizabeth \n Confiamos en que sabra a quien pedirle que instale el cuadrito en Mulan";

// Muestra la fecha de revelación en la página
document.getElementById('reveal-time').textContent = revealDate.toLocaleString('es-ES', {
  dateStyle: 'full',
  timeStyle: 'medium',
});

// Actualiza el temporizador cada segundo
const updateTimer = () => {
  const now = new Date();
  const timeDiff = revealDate - now; // Diferencia en milisegundos

  if (timeDiff > 0) {
    // Calcula horas, minutos y segundos restantes
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Actualiza el temporizador en la página
    document.getElementById('timer').textContent = 
      `Faltan: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    // Si se ha alcanzado la fecha, revela el mensaje
    document.getElementById('locked-message').style.display = 'none';
    document.getElementById('timer').style.display = 'none';

    // Carga el mensaje dinámicamente
    document.getElementById('name').textContent = secretMessage;
    document.getElementById('name').classList.remove('hidden');
  }
};

// Inicia la actualización del temporizador
setInterval(updateTimer, 1000);
updateTimer(); // Llama una vez para evitar el primer retraso
