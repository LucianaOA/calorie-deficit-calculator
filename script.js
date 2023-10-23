document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate-btn');

    calculateBtn.addEventListener('click', function () {
        const currentWeight = parseFloat(document.getElementById('current-weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);
        const goalWeight = parseFloat(document.getElementById('goal-weight').value);
        const activityLevel = parseFloat(document.getElementById('activity-level').value);

        // Calculate BMR (Basal Metabolic Rate)
        const bmr = calculateBMR(currentWeight, height, age);

        // Calculate TDEE (Total Daily Energy Expenditure)
        const tdee = calculateTDEE(bmr, activityLevel);

        // Calculate calorie deficit
        const calorieDeficit = calculateCalorieDeficit(tdee, goalWeight);

        // Display the result on the page
        document.getElementById('calorie-deficit').textContent = `${calorieDeficit} calories`;
    });
});

function calculateBMR(weight, height, age) {
    // Calculate BMR using a formula (e.g., Harris-Benedict equation)
    // Replace the following placeholder formula with the actual calculation
    const bmr = 10 * weight + 6.25 * height - 5 * age;
    return bmr;
}

function calculateTDEE(bmr, activityLevel) {
    // Calculate TDEE by multiplying BMR with activity level
    // Replace the following placeholder formula with the actual calculation
    const tdee = bmr * activityLevel;
    return tdee;
}

function calculateCalorieDeficit(tdee, goalWeight) {
    // Calculate the calorie deficit based on the goal weight
    // Replace the following placeholder formula with the actual calculation
    const calorieDeficit = tdee - (goalWeight * 500); // Placeholder formula
    return calorieDeficit;
}
