// Sample data for articles
const articles = [
    {
        title: "First Article",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultricies quam. In id eros ac justo efficitur finibus."
    },
    {
        title: "Second Article",
        content: "Pellentesque ac lorem quis libero tristique laoreet. Duis non nunc nec dui efficitur vehicula. Nullam dictum justo id arcu faucibus convallis."
    }
];

// Function to dynamically generate articles
function generateArticles() {
    const articlesContainer = document.querySelector('.articles');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <button class="comment-btn">Add Comment</button>
            <section class="comments"></section>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Function to handle adding comments
function addComment(event) {
    const commentSection = event.target.parentElement.querySelector('.comments');
    const comment = prompt("Enter your comment:");
    const commentElement = document.createElement('p');
    commentElement.textContent = comment;
    commentSection.appendChild(commentElement);
}

// Event listener to dynamically generate articles
document.addEventListener('DOMContentLoaded', generateArticles);

// Event listener for adding comments
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('comment-btn')) {
        addComment(event);
    }
});
