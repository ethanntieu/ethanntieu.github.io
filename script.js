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
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    content.innerHTML = html;
                    content.classList.remove('fade-out');
                    history.pushState(null, '', page);

                    // Trigger the fade-in animation for the new content
                    const newSection = content.querySelector('.animated-section');
                    if (newSection) {
                        setTimeout(() => {
                            newSection.classList.add('active');
                        }, 50);
                    }
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                    content.innerHTML = '<p>Error loading content. Please try again.</p>';
                    content.classList.remove('fade-out');
                });
        }, 300); // This should match the transition duration in CSS
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const currentPage = window.location.pathname.split('/').pop() || 'home.html';
        loadContent(currentPage);
    });
});
