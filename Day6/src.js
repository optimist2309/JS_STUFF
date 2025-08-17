// Function to calculate age based on birth year.
const calcage = (birthYear) => {

    return 2025 - birthYear;

}

// Calling the function with a specific year.
const years = [1990, 1995, 2000, 2005, 2010];

// Calculate ages for each year in the array.
for (let i = 0; i < years.length; i++) {
    const age = calcage(years[i]);
    console.log(`Age for birth year ${years[i]}: ${age}`);
}
