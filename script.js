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

        // Calculate calorie deficit based on desired weight loss rate (e.g., 0.5 kg per week)
        const desiredWeightLossRate = 0.5; // Adjust as needed (in kg per week)
        const calorieDeficit = calculateCalorieDeficit(tdee, goalWeight, desiredWeightLossRate);

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

function calculateCalorieDeficit(tdee, goalWeight, desiredWeightLossRate) {
    // Calculate the calorie deficit based on desired weight loss rate
    // Formula: Calorie Deficit = TDEE - (Calories per kg per week * Weight Loss Rate)
    const caloriesPerKgPerWeek = 7700; // Approximate number of calories in 1 kg
    const calorieDeficit = tdee - (desiredWeightLossRate * caloriesPerKgPerWeek);
    return calorieDeficit;
}
