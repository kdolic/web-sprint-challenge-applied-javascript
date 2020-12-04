// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios';

axios
.get('https://lambda-times-api.herokuapp.com/topics') // API URL
.then((res) => { // resolve
    console.log(res.data); // Log the data from the API
    res.data.topics.forEach((el) => { // Loop through topics
        const tab = document.createElement('div'); // Create new tab div
        tab.classList.add('tab'); // Add Class
        tab.textContent = el; // textContent set to each topic passed in Loop
        const topics = document.querySelector('.topics'); // Select parent div element
        topics.appendChild(tab); // Append tab to topics
    })
})
.catch((err) => { // error finder
    console.log('ERROR: something is WRONG: ', err);
})