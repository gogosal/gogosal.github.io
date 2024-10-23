document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    let menuBtn = document.getElementById('menu-btn');

    function checkMenuBtnDisplay() {
        if (window.innerWidth > 768) {
            menuBtn.style.display = 'none';
        } else {
            menuBtn.style.display = 'block';
        }
    }

    function initializeMenuBtn() {
        menuBtn = document.getElementById('menu-btn');
        if (!menuBtn) return;

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (sidebar.classList.contains('active')) {
                menuBtn.style.display = 'none';
            } else {
                checkMenuBtnDisplay();
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
        checkMenuBtnDisplay();
    }

    function loadPageContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                const newContent = doc.querySelector('.main-content, .home-content').innerHTML;

                const currentContent = document.querySelector('.main-content, .home-content');
                currentContent.style.opacity = 0;

                setTimeout(() => {
                    currentContent.innerHTML = newContent;
                    currentContent.style.opacity = 1;

                    if (page.includes('projects.html')) {
                        currentContent.classList.remove('home-content');
                        currentContent.classList.add('main-content');
                    }
                    if (page.includes('index.html')) {
                        currentContent.classList.remove('main-content');
                        currentContent.classList.add('home-content');
                    }

                    initializeMenuBtn();
                    checkMenuBtnDisplay();

                    if (page.includes('projects.html')) {
                        loadProjectsAndGames();
                        hideSidebar();
                    }
                }, 300);
            });
    }

    initializeMenuBtn();

    window.addEventListener('load', checkMenuBtnDisplay);
    window.addEventListener('resize', checkMenuBtnDisplay);

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
