const loadingScreen = document.querySelector(".loading-screen");
const loadingText = document.getElementById("loading-text");
let percent = 1;

function updateProgress() {
    loadingText.textContent = percent + "%";
    percent++;
    if (percent <= 99) {
        setTimeout(updateProgress, 6);
    }
}
updateProgress();

window.onload = function () {
    const window_width = window.screen.width;

    //loading消失動態
    const loadingAni = () => {
        let tl = gsap.timeline({});
        tl.to(loadingScreen, { duration: 1, opacity: 0 })
            .to(loadingScreen, { duration: 0.6, display: 'none', })
    }
    loadingAni();

    // 設定視窗高度變數
    const updateVH = () => {
        document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    updateVH();
    window.addEventListener("resize", updateVH);

    // 手機板menu
    if (window_width <= 1024) {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('is-active');
            menu.classList.toggle('active');
        });
    }

    const ani = () => {
        if (window_width <= 1024) {
            const tl = gsap.timeline({})
            tl.from('.bg-box img', { duration: 1.5, opacity: 0, scale: 1.4 })
                .fromTo('.big-title', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1,
                    y: '0vw',
                    opacity: 1,
                }, '<0.4')
                .fromTo('.main-box .content-box div', {
                    opacity: 0,
                    y: '10vw',
                }, {
                    duration: 1,
                    scale: 1,
                    y: '0vw',
                    opacity: 1,
                    stagger: 0.23
                }, '<0.5')
                .fromTo('.about-body .main-box .founder img', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1,
                    scale: 1,
                    y: '0vw',
                    opacity: 1,
                }, '<1.5')
        }
        else {
            const tl = gsap.timeline({})
            tl.from('.bg-box img', { duration: 1.5, opacity: 0, scale: 1.4 })
                .fromTo('.big-title', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1.3,
                    y: '0vw',
                    opacity: 1,
                }, '<0.4')
                .fromTo('.main-box .content-box div', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1,
                    y: '0vw',
                    opacity: 1,
                    stagger: 0.23
                }, '<0.5')
                .fromTo('.about-body .main-box .founder img', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1,
                    scale: 1,
                    y: '0vw',
                    opacity: 1,
                }, '<1.5')
        }
    }
    ani();

};
