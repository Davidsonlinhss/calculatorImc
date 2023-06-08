function calcMassa () {
  const calculoFinal = document.querySelector('.calculoFinal');
  
  function calculandoMassa (evento) {
    evento.preventDefault();
    
    const peso = document.querySelector('.valorPeso').value
    const altura = document.querySelector('#input-teste-altura').value

    const calculandoIMC = peso / (altura**2)

    // Condicionais
    if (calculandoIMC <= 18.4) {
      calculoFinal.innerHTML = ` Seu IMC é de ${calculandoIMC.toFixed(2)}, você está abaixo do peso.`;
    } else if (calculandoIMC > 18.4 && calculandoIMC <= 24.9)  {
      calculoFinal.innerHTML = `Seu IMC é de ${calculandoIMC.toFixed(2)}, seu peso está normal.`;
    } else if (calculandoIMC > 24.9 && calculandoIMC <= 29.9 ) {
      calculoFinal.innerHTML = `Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com sobrepeso.`;
    } else if (calculandoIMC > 29.9 && calculandoIMC <= 34.9) {
      calculoFinal.innerHTML = `Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com obesidade de grau 1.`;
    } else if (calculandoIMC > 34.9 && calculandoIMC <= 39.9) {
      calculoFinal.innerHTML = `Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com obesidade de grau 2.`
    } else {
      calculoFinal.innerHTML = `Seu IMC é de ${calculandoIMC.toFixed(2)}, você está com obesidade de grau 3.`
    }
    
  }
  addEventListener('submit', calculandoMassa);
}

calcMassa();