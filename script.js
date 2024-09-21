document.addEventListener('DOMContentLoaded', (event) => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Load the home page by default
    loadContent('home.html');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href');
            loadContent(page);
        });
    });

    function loadContent(page) {
        content.classList.add('fade-out');
        
        setTimeout(() => {
            fetch(page)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    content.classList.remove('fade-out');
                    history.pushState(null, '', page);
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                    content.classList.remove('fade-out');
                });
        }, 300); // This should match the transition duration in CSS
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        loadContent(window.location.pathname.split('/').pop() || 'home.html');
    });
});
