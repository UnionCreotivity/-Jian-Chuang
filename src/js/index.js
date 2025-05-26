window.onload = function () {
    const window_width = window.screen.width;

    // 設定視窗高度變數
    const updateVH = () => {
        document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    updateVH();
    window.addEventListener("resize", updateVH);

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
