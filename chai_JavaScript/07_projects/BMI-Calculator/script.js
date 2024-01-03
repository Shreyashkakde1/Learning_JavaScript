const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseFloat(document.querySelector('#height').value) / 100; // Convert height to meters
    let weight = parseFloat(document.querySelector('#weight').value);

    const result = document.querySelector('.result');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter valid Height and Weight";
    } else {
        let bmi = weight / (height * height);

        if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `<span><b>Your BMI:</b> ${bmi.toFixed(2)}</span>`;
            congratsMessage();
        } else {
            result.innerHTML = `<span><b>Your BMI:</b> ${bmi.toFixed(2)}</span>`;
        }
    }

    console.log(height, weight);
});


function congratsMessage() {
    // Your existing code...

    const congrats = document.createElement('div');
    congrats.classList.add('congrats');
    congrats.innerHTML = "Congratulations! You're in the normal BMI range 🎉";

    const sparkles = document.createElement('div');
    sparkles.classList.add('sparkles');
    sparkles.innerHTML = "&#10024; &#10024; &#10024;"; // Sparkles emojis

    document.body.appendChild(congrats);
    document.body.appendChild(sparkles);

    // Trigger confetti animation
    const duration = 5 * 1000;
    const confettiSettings = { target: 'sparkles' }; // DOM element to target
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
        confetti.clear();
    }, duration);
}

