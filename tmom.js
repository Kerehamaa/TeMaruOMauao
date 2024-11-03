document.addEventListener("DOMContentLoaded", () => {
    const pages = ["home", "more", "info"];
    
    pages.forEach(page => {
        const element = document.getElementById(page);
        
        if (element) {
            element.onclick = () => {
                // Push the clean URL to history
                history.pushState(null, '', `/${page}`);
                // Load the corresponding content (optional)
                loadPageContent(page); // You can implement this function to load page content dynamically
            };
        } else {
            console.warn(`Element with ID '${page}' not found.`);
        }
    });
});

// Function to load content dynamically (optional)
function loadPageContent(page) {
    // Here you could use AJAX or Fetch API to load content for the page
    // For example:
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            // Assuming you have a main content area to load the page into
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}
