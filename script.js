document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

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
            sidebar.classList.remove('active');
            menuBtn.style.display = 'block';
        }
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
