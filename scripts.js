
function initView() {


        window.addEventListener("scroll", function (event) {
            const scroll = this.scrollY;

            const homeButton = document.getElementById("homeButton");
            const aboutButton = document.getElementById("aboutMeButton");
            const projectsButtton = document.getElementById("projectsButton");
            const contactButton = document.getElementById("contactButton");
            const behindScenesButton = document.getElementById("behindScenesButton");

            if(scroll>0&& scroll<500) {
                clearNavigationSelection();
                homeButton.classList.add("active");
            }
            if(scroll>500&& scroll<1000){
                clearNavigationSelection();
                aboutButton.classList.add("active");
            }
            if(scroll>1300&& scroll<2200){
                clearNavigationSelection();
                projectsButtton.classList.add("active");

            }
            if(scroll>2200&& scroll<3000){
                clearNavigationSelection();
                contactButton.classList.add("active");
            }
            if(scroll>3000){
                clearNavigationSelection();
                behindScenesButton.classList.add("active");
            }

        });


    }

    try{
        init();
    } catch (e) {
        console.log(`An error happened while loading the JS code ${e.stack}`)
    }

    function clearNavigationSelection() {
        const homeButton = document.getElementById("homeButton");
        const aboutButton = document.getElementById("aboutMeButton");
        const projectsButtton = document.getElementById("projectsButton");
        const contactButton = document.getElementById("contactButton");
        const behindScenesButton = document.getElementById("behindScenesButton");

        homeButton.classList.remove("active");
        aboutButton.classList.remove("active");
        projectsButtton.classList.remove("active");
        contactButton.classList.remove("active");
        behindScenesButton.classList.remove("active");
    }


//         SLIDE SHOW - School projects

let slideIndex = 1;
let behindScenesIndex = 1;

    function move(n) {
        slideIndex += n;

        const descriptions = {
        blue: 'Blue - Interactive animation <br/> Assignment to learn an JS events. The style is inspired by my paintings with Blue the character. <br/> The interactive animation is a simple mini game in progress. The story is questioning believes in God. <br/> A PDF attached with the project documentation.',
        keaApp: `KEA App <br/> Assignment to practice work with Adobe XD, building a simple app and follow the design manual. This project is a mobile only! There were few challenges: The client was changing the task description each day. <br/> A link to previous version attached.`,
        calc: 'Calculator <br/> Assignment to practice JS and CSS. All design is done by pure css.',
        game: 'Blue the Game<br/>  Assignment to learn basic JS. Use of buttons that are executing an animations with sprint images and css transforms. The style is inspired by my paintings with Blue the character.'
        };

        let i;
        const parentDOM = document.getElementById("projects-slides");
        const x = parentDOM.getElementsByClassName("slide-pic");

        const slideDesc = document.getElementById('slideDesc');

        if (slideIndex > x.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = x.length}

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        console.log(slideIndex)
        switch (slideIndex) {
            case 1: {
                slideDesc.innerHTML = descriptions.blue;
                break;
            }
            case 3: {
                slideDesc.innerHTML = descriptions.keaApp;
                break;
            }
            case 4: {
                slideDesc.innerHTML = descriptions.calc;
                break;
            }
            case 2: {
                slideDesc.innerHTML = descriptions.game;
                break;
            }
            default: {
                slideDesc.innerHTML = '';
                break;
            }
        }


        x[slideIndex-1].style.display = "block";

    }
function behindScenesMove(n) {
    behindScenesIndex += n;

    let i;
    const parentDOM = document.getElementById("scenes-slides");
    const x = parentDOM.getElementsByClassName("scenes-slide-pic");
    const textSlides = document.getElementsByClassName('scenes-slide-desc');


    if (behindScenesIndex > x.length) {behindScenesIndex = 1}
    if (behindScenesIndex < 1) {behindScenesIndex = x.length}

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        textSlides[i].style.display = "none";
    }

    x[behindScenesIndex-1].style.display = "block";
    textSlides[behindScenesIndex-1].style.display = "block";
}

function getMeToMyDiamonds(url) {
        window.location.href = url;
}
