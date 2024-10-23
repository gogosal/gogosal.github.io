function loadProjectsAndGames() {
    const projects = [
        {
            image: "images/projects/valorantWallpaper.png",
            title: "ValorantWpp",
            description: "This application is used to change the wallpaper of the Valorant main menu.",
            github: "https://github.com/gogosal/ValorantWallpaper",
            newLabel: true
        },
        {
            image: "images/projects/animeList.png",
            title: "AnimeList",
            description: "With this application, users can easily find information about their favourite anime, add them to their favourite and already watched lists, and keep an organised record of their choices.",
            github: "https://github.com/gogosal/AnimeList",
            newLabel: true
        },
        /*         {
                    image: "images/projects/stackRoullete.png",
                    title: "PhoneX",
                    description: "PhoneX was developed for a school assignment, it's an application for pure entertainment."
                }, */
        {
            image: "images/projects/spaceClicker.png",
            title: "SpaceClicker",
            description: "A very efficient autoclicker that can help with various functionalities.",
            github: "https://github.com/gogosal/SpaceClicker"
        },
        {
            image: "images/projects/optimizer.png",
            title: "Optimizer",
            description: "This app is designed more for those who have a less than great computer, so it optimises it to run games better.",
            github: "https://github.com/gogosal/Optimizer"
        },
        {
            image: "images/projects/optiClean.png",
            title: "OptiClean",
            description: "Are you running out of space on your computer? With this application you can clean up useless files on your computer.",
            github: "https://github.com/gogosal/OptiClean"
        },
        {
            image: "images/projects/hydraVirus.png",
            title: "HydraVirus",
            description: "This virus is a programme that replicates itself when you try to close it. Although it is not harmful, it is recommended that you only run it on a virtual machine.",
            github: "https://github.com/gogosal/HydraVirus"
        }
    ];

    const games = [
        {
            image: "images/projects/nuvem.png",
            title: "NUVEM",
            description: "Wreak havoc through the dungeons to climb up the tower and reach the heavens above. Developed for Brackeys Game Jam 2024.2. This project was developed by myself and Pedro Neves",
            link: "https://pedronevesdev.itch.io/nuvem",
            newLabel: true,
            icon: "fa-solid fa-gamepad"
        },
        {
            image: "images/projects/pokeSpectra.png",
            title: "PokéSpectra",
            description: "It's a fangame inspired by Pokémon Red, this project was done in 1 year and was for the purpose of the final course project (PAP).",
            link: "https://gamejolt.com/games/PokeSpectra/920046",
            newLabel: true,
            icon: "fa-solid fa-gamepad"
        },
        {
            image: "images/projects/stackRoullete.png",
            title: "StackRoullete",
            description: "A game set in an old people's home where the player has to win in order to escape from there (With some bugs).",
            link: "https://gogosal.itch.io/stackroullete",
            icon: "fa-solid fa-gamepad"
        },
        {
            image: "images/projects/buckShotRoulette.png",
            title: "BuckShotRoulette",
            description: "Inspired by BuckShotRoulette, it was created during an internship at a games company.",
            link: "https://gogosal.itch.io/buckshotroulette",
            icon: "fa-solid fa-gamepad"
        },
        {
            image: "images/projects/solitaireKingAlbert.png",
            title: "SolitaireKingAlbert",
            description: "Inspired by SolitaireKingAlbert, it was created during an internship at a games company.",
            link: "https://gogosal.itch.io/solitairekingalbert",
            icon: "fa-solid fa-gamepad"
        },
        {
            image: "images/projects/internetSegura.png",
            title: "Internet Segura",
            description: "This game was developed to commemorate a day that exists in Portugal called Internet Segura (Safe Internet).",
            link: "https://gamejolt.com/games/InternetSegura/842298",
            icon: "fa-solid fa-gamepad"
        }
    ];

    function createCard({ image, title, description, github, newLabel, link, icon }) {
        return `
            <div class="card">
                <img src="${image}" alt="${title}">
                <h2 class="card-title">${title} ${newLabel ? '<span class="new-label">New</span>' : ''}</h2>
                <p class="card-description">${description}</p>
                <div class="icon-container">
                    ${github ? `<a href="${github}" class="social-icon" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    ${link ? `<a href="${link}" class="social-icon" target="_blank"><i class="${icon}"></i></a>` : ''}
                </div>
            </div>
        `;
    }

    document.getElementById('projects-container').innerHTML = projects.map(createCard).join('');
    document.getElementById('games-container').innerHTML = games.map(createCard).join('');
}