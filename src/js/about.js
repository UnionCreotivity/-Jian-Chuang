const loadingScreen = document.querySelector(".loading-screen");
const loadingText = document.getElementById("loading-text");
let percent = 1;

function updateProgress() {
    loadingText.textContent = percent + "%";
    percent++;
    if (percent <= 99) {
        setTimeout(updateProgress, 8);
    }
}
updateProgress();

window.onload = function () {
    const window_width = window.screen.width;

    //loading消失動態
    let tl = gsap.timeline({});
    tl.to(loadingScreen, { duration: 1, opacity: 0, ease: "power1.inOut" })
        .to(loadingScreen, { duration: 0.7, display: 'none', })

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

    const bgAni = () => {
        const tl = gsap.timeline({
            delay: 0.5
        })
        tl.from('.bg-box img', { duration: 1.5, opacity: 0, scale: 1.4 })
    }
    bgAni();

    const textAni = () => {

        if (window_width <= 1024) {
            const tl = gsap.timeline({})

            tl.fromTo('.big-title', {
                opacity: 0,
                y: '10vw',
            }, {
                duration: 1.5,
                scale: 1,
                y: '0vw',
                opacity: 1,
            })
                .fromTo('.main-box .content-box div', {
                    opacity: 0,
                    y: '10vw',
                }, {
                    duration: 1,
                    scale: 1,
                    y: '0vw',
                    opacity: 1,
                    ease: 'power1.inOut',
                    stagger: 0.2
                }, '<0.55')
                .fromTo('.about-body .main-box .founder img', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1,
                    scale: 1,
                    y: '0vw',
                    opacity: 1,
                }, '<1.5')
        } else {
            const tl = gsap.timeline({})

            tl
                .fromTo('.big-title,.main-box .content-box div', {
                    opacity: 0,
                    y: '5vw',
                }, {
                    duration: 1,
                    scale: 1,
                    y: '0vw',
                    opacity: 1,
                    ease: 'power1.inOut',
                    stagger: 0.2
                })
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
    textAni();



};
