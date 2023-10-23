// Get DOM elements
const person1Input = document.getElementById('person1');
const person2Input = document.getElementById('person2');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const swapBtn = document.getElementById('swapBtn');
const heartResult = document.getElementById('heartResult');
const loader = document.getElementById('loader');

// Event listener for Calculate Love button
const commonMenNames = [
    "John", "Michael", "William", "David", "James", "Joseph", "Robert", "Daniel", "Matthew", "Andrew",
    "Alan", "Jenin","Amal","Enric","Vishak","Aswin","Adnan","Shaheen","Joel","Shibin","Anirudh","Edwin",
    "Dhipin","Althaf","Hashim",
];

// Convert the names to lowercase for case-insensitive comparison
const commonMenNamesLowerCase = commonMenNames.map(name => name.toLowerCase());

calculateBtn.addEventListener('click', () => {
    const person1 = person1Input.value.trim().toLowerCase(); // Convert to lowercase for comparison
    const person2 = person2Input.value.trim();
    let lovePercentage = Math.floor(Math.random() * 93); // Random percentage between 0 and 92

    // Check if person1 is a common men nameif (person1 && person2) {
    
    if (person1.toLowerCase() === person2.toLowerCase()) {
        heartResult.textContent = "You are selfish";
    }else if (commonMenNamesLowerCase.includes(person2.toLowerCase() ) && commonMenNamesLowerCase.includes(person1.toLowerCase() )) {
        alert("You are Gay");
        // Show "Yes" button logic goes here
        // ...
    }

    // Additional constraints
    if (person1[0].toLowerCase() === person2[0].toLowerCase()) {
        lovePercentage += 5; // Add 5 points if first letters are the same
    }
    
    if (person1.slice(-1).toLowerCase() === person2.slice(-1).toLowerCase()) {
        lovePercentage += 3; // Add 3 points if last letters are the same
    }

    // Display result
    let resultText = '';
    if (lovePercentage < 20) {
        resultText = `${person1} is single`;
    } else {
        resultText = `${person1} loves ${person2} with ${lovePercentage}%!`;
    }

    // Check if result is already in localStorage
    const localStorageKey = `${person1}_${person2}_lovePercentage`;
    const storedResult = localStorage.getItem(localStorageKey);
    if (storedResult) {
        resultText = storedResult;
    } else {
        localStorage.setItem(localStorageKey, resultText);
    }

    // Display the result
    heartResult.textContent = resultText;

    // Show heart animation
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
});

// Event listener for Reset button
resetBtn.addEventListener('click', () => {
    person1Input.value = '';
    person2Input.value = '';
    heartResult.textContent = '';
});

// Event listener for Swap button
swapBtn.addEventListener('click', () => {
    const temp = person1Input.value;
    person1Input.value = person2Input.value;
    person2Input.value = temp;
    heartResult.textContent = '';
});
