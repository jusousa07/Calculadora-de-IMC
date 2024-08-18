const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

   
    if (isNaN(weight) || weight <= 0) {
        alert('Por favor, insira um valor válido para o peso (deve ser maior que 0).');
        return;
    }

    if (isNaN(height) || height <= 0) {
        alert('Por favor, insira um valor válido para a altura (deve ser maior que 0).');
        return;
    }

    
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    const description = document.getElementById('desc-text');

   
    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    
    let descriptionText = '';
    if (bmi < 18.5) {
        descriptionText = 'Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        descriptionText = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi <= 29.9) {
        descriptionText = 'Você está com sobrepeso!';
    } else if (bmi >= 30 && bmi <= 34.9) {
        descriptionText = 'Você está com obesidade grau 1!';
    } else if (bmi >= 35 && bmi <= 39.9) {
        descriptionText = 'Você está com obesidade grau 2!';
    } else {
        descriptionText = 'Você está com obesidade grau 3 (mórbida)!';
    }

    value.textContent = bmi.replace('.', ',');
    description.textContent = descriptionText;
});
