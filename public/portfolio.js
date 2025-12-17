document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // --- Navbar scroll effect ---
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // --- Intersection Observer for fade-in animations ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-card, .skill-category, .experience-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // --- NEW: Dark/Light Mode Toggle ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const body = document.body;

        // Function to apply theme
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
            localStorage.setItem('theme', theme);
        };

        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);

        // Toggle theme on button click
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });


        // --- NEW: Project Card Hover Effect ---
        document.querySelectorAll('.project-card').forEach(card => {
            const bgImage = card.getAttribute('data-bg-image');
            if (bgImage) {
                card.addEventListener('mouseover', () => {
                    card.style.backgroundImage = `url(${bgImage})`;
                });
                
                card.addEventListener('mouseout', () => {
                    card.style.backgroundImage = 'none';
                });
            }
        });