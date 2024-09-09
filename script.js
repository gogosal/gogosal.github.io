document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    let menuBtn = document.getElementById('menu-btn');

    function initializeMenuBtn() {
        menuBtn = document.getElementById('menu-btn');
        if (!menuBtn) return;

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (sidebar.classList.contains('active')) {
                menuBtn.style.display = 'none';
            } else {
                menuBtn.style.display = 'block';
            }
        });

        document.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target) && sidebar.classList.contains('active')) {
                hideSidebar();
            }
        });
    }

    function hideSidebar() {
        sidebar.classList.remove('active');
        menuBtn.style.display = 'block';
    }

    function loadPageContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const newContent = doc.querySelector('.main-content').innerHTML;

                const mainContent = document.querySelector('.main-content');
                mainContent.style.opacity = 0;

                setTimeout(() => {
                    mainContent.innerHTML = newContent;
                    mainContent.style.opacity = 1;

                    initializeMenuBtn();

                    if (page.includes('projects.html')) {
                        loadProjectsAndGames();
                        hideSidebar();
                    }
                }, 300);
            });
    }

    initializeMenuBtn();

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(navItem => {
        navItem.addEventListener('click', (e) => {
            e.preventDefault();

            const page = navItem.getAttribute('href');
            loadPageContent(page);
            hideSidebar();
        });
    });
});
