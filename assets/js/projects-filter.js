/**
 * Project Filter Functionality
 * Filters projects based on category selection
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-detail');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the selected category
            const category = this.textContent.trim();

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter projects
            if (category === 'All') {
                // Show all projects
                projects.forEach(project => {
                    project.style.display = 'block';
                    // Add fade-in animation
                    project.style.animation = 'fadeIn 0.5s ease-in';
                });
            } else {
                // Show only projects matching the selected category
                projects.forEach(project => {
                    const projectCategory = project.getAttribute('data-category');

                    if (projectCategory === category) {
                        project.style.display = 'block';
                        // Add fade-in animation
                        project.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        project.style.display = 'none';
                    }
                });
            }

            // Scroll to projects section smoothly
            const projectsSection = document.querySelector('.projects-section');
            if (projectsSection) {
                const offset = 100; // Account for fixed navbar
                const elementPosition = projectsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
