![alt text](https://github.com/annieclinton/random-cats/blob/main/catPhotos.png)

# Cat Photos

This lightweight web application allows users to fetch and view up to ten random cat photos. Users can select the number of photos they want to see by entering a number from 1 to 10 and clicking the "Get Photo(s)" button. 

**Link to project:** TBD 

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, The Cat API

The user interface is built with HTML and styled with CSS using Flexbox for layout, ensuring that the cat photos are displayed in a responsive, aesthetically pleasing grid. The JavaScript code handles user interactions and API requests. When a user enters a number and clicks the button, a fetch request is made to The Cat API to retrieve the specified number of cat images, which are then dynamically displayed on the page.

I used async operations in JavaScript to handle API requests, parse JSON data, and update the DOM without reloading the page. This creates a seamless user experience. Error handling is implemented to alert the user if there is an issue with the API request or their input.

## Optimizations

The current implementation fetches and displays images efficiently, but there is always room for improvement:

- Implementing error handling more gracefully to provide user feedback directly on the webpage instead of just console logs.
- Enhancing responsiveness and layout adjustments for various device screens.
- Adding loading indicators or placeholders for images while they are being fetched.  

## Lessons Learned:

This project reinforced my skills in asynchronous JavaScript and deepened my understanding of working with APIs and handling dynamic content. It highlighted the importance of user input validation and error handling to improve the overall stability and usability of web applications.





