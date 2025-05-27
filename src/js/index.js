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

    const enterClick = () => {

        const btn = document.querySelector('.enter-btn')

        btn.addEventListener('click', (e) => {
            const tl = gsap.timeline({})
            tl.to('.open-card', { duration: 0.8, display: 'none', opacity: 0, ease: 'power0.inOut' })
                .to('.main-box', { duration: 1, display: 'flex', opacity: 1, ease: 'power0.inOut' })
        })

    }
    enterClick();


};
