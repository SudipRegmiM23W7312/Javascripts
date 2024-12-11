
//Regmi Sudip
//M23W7312

const originalCountriesAndCapitals = [
    ["Nepal", "Kathmandu"],
    ["New Zealand", "Wellington"],
    ["Japan", "Tokyo"],
    ["Nigeria", "Abuja"],
    ["India", "New Delhi"],
    ["Brazil", "Brasília"],
    ["Australia", "Canberra"],
    ["Canada", "Ottawa"],
    ["Germany", "Berlin"],
    ["France", "Paris"]
];
 countriesAndCapitals=[...originalCountriesAndCapitals]; //creating a copy of original list to reset in future.



// Function to display the list
function displayList() {
    const countryList = document.getElementById("country-list");// country-list can be manipulated in javascript through a new const countrylist.
    countryList.innerHTML = ""; // Clear the current list to insert new sorted list. 

    for (const item of countriesAndCapitals) {//for of loop is used to access each item of countriesAndCapital, here loop will occur for each  country.
        const listItem = document.createElement("li");//creating new list item for storing new list(li) which will be modified before inserting in the parent list which is countryList
        listItem.textContent = item[0] + " - " + item[1]; // Using concatenation to unify the country and its corresponding capital to make it a single item of array.
        countryList.appendChild(listItem); // Append list items to the UL which inserting the unified item to the intial list
    }
}

// Function to sort in ascending order using sort method. 
function sortAscending() {
    countriesAndCapitals.sort((a, b) => a[0].localeCompare(b[0]));
    displayList(); // Re-display the sorted list
    console.log("Sorted in Ascending Order:", countriesAndCapitals);
}

// Function to sort in descending order using sort method 
function sortDescending() {
    countriesAndCapitals.sort((a, b) => b[0].localeCompare(a[0]));
    displayList(); // Re-display the sorted list
    console.log("Sorted in Descending Order:", countriesAndCapitals);
}

function resetList() {
    countriesAndCapitals = [...originalCountriesAndCapitals]; // Reset to the original list by accesing the intial copy of list.
    displayList(); // Re-display the original list
    console.log("Reset to Initial List:", countriesAndCapitals);
}
displayList();// this function is recalled to display the countries list in the beginning when we load the webpage.




