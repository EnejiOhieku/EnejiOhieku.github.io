/**
 * Eneji Ohieku Portfolio JavaScript
 * Handles mobile navigation, dynamic category filtering, and scroll behaviors.
 */

document.addEventListener('DOMContentLoaded', function() {
    // ------------------------------------------------------------------------
    // 1. Mobile Menu Drawer
    // ------------------------------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close menu when clicking any link inside mobile nav
        mobileNav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.site-nav')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }

    // ------------------------------------------------------------------------
    // 2. Client-Side Category Filtering for Projects
    // ------------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-wrapper');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Update active state on buttons
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter').toLowerCase();

                // Filter cards
                projectCards.forEach(function(card) {
                    const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();

                    if (filterValue === 'all' || cardCategory.includes(filterValue)) {
                        card.classList.remove('hide');
                        // Optional subtle entrance animation
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px)';
                        setTimeout(function() {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

    // ------------------------------------------------------------------------
    // 3. Smooth Scroll to Top
    // ------------------------------------------------------------------------
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
