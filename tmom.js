document.addEventListener("DOMContentLoaded", function () {
    const pages = ["home", "more", "info"];
    
    pages.forEach(page => {
        const element = document.getElementById(page);
        if (element) {
            element.addEventListener("click", function (event) {
                event.preventDefault(); // Prevents the default `href="#"` action
                window.location.href = page + '.html';
            });
        } else {
            console.warn(`Element with ID '${page}' not found.`);
        }
    });
});

console.log("Reed K. Maharen")
