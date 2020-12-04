// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios';

axios
.get('https://lambda-times-api.herokuapp.com/articles') // API URL
.then((res) => {
    console.log(res.data.articles); // Log the data from the API
    console.log(Object.values(res.data.articles)); // Log the object values of articles data
    Object.values(res.data.articles).forEach((el) => { // Loop through object values data
        el.forEach(res => { // Loop through the response
            const cardCreator = articleCardMaker(res); // invoke function
            const cardContainer = document.querySelector('.cards-container'); // Select parent div element
            cardContainer.appendChild(cardCreator); // Append the function to container
        });
    });
})
.catch((err) => { // error finder
    console.log('ERROR: something is WRONG: ', err);
})

function articleCardMaker(object){
    // Create Element
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    // Add Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // textContent and src
     headline.textContent = object.headline;
     image.src = object.authorPhoto;
     authorName.textContent = `By: ${object.authorName}`;

     // Append 
     card.appendChild(headline);
     card.appendChild(author);
     author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorName);

    // Event Listener
    card.addEventListener('click', event => {
        console.log(headline.textContent);
    });

    // Return
    return card;
    
}

// MVP