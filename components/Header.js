// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Create Elements
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const header = document.createElement('h1');
    const temp = document.createElement('span');

    // Add Classes
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Add textContent
    date.textContent = 'MARCH 28, 2020';
    header.textContent = 'Lambda Times';
    temp.textContent = '98°';

    // Append
    headerDiv.appendChild(date);
    headerDiv.appendChild(header);
    headerDiv.appendChild(temp);

    // Return
    return headerDiv

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
