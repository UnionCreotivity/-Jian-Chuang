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

    // 設定視窗高度變數
    const updateVH = () => {
        document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    updateVH();
    window.addEventListener("resize", updateVH);

    //loading消失動態
    let tl = gsap.timeline({});
    tl.to(loadingScreen, { duration: 1, opacity: 0, ease: "power1.inOut" })
        .to(loadingScreen, { duration: 0.7, display: 'none', })

    // 手機板menu
    if (window_width <= 1024) {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('is-active');
            menu.classList.toggle('active');
        });
    }

    const swiper = new Swiper(".content-swiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2000,
        },
        speed: 1500,
    });

};
