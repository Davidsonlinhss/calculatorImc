function calcMassa () {
  const calculoFinal = document.querySelector('.calculoFinal');
  
  function calculandoMassa (evento) {
    evento.preventDefault();
    
    const peso = document.querySelector('.valorPeso').value
    const altura = document.querySelector('#input-teste-altura').value

    const calculandoIMC = peso / (altura**2)

    // Condicionais
    if (calculandoIMC <= 18.4) {
      calculoFinal.innerHTML = ` <p>Seu IMC é de ${calculandoIMC.toFixed(2)}, você está abaixo do peso.</p>`;
    } else if (calculandoIMC > 18.4 && calculandoIMC <= 24.9)  {
      calculoFinal.innerHTML = `<p>Seu IMC é de ${calculandoIMC.toFixed(2)}, seu peso está normal.</p>`;
    } else if (calculandoIMC > 24.9 && calculandoIMC <= 29.9 ) {
      calculoFinal.innerHTML = `<p>Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com sobrepeso.</p>`;
    } else if (calculandoIMC > 29.9 && calculandoIMC <= 34.9) {
      calculoFinal.innerHTML = `<p>Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com obesidade de grau 1.</p>`;
    } else if (calculandoIMC > 34.9 && calculandoIMC <= 39.9) {
      calculoFinal.innerHTML = `<p>Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com obesidade de grau 2.</p>`
    } else {
      calculoFinal.innerHTML = `<p>Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com obesidade de grau 3.</p>`
    }
    
  }
  addEventListener('submit', calculandoMassa);
}

calcMassa();