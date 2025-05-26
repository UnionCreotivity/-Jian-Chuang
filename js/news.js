window.onload = function () {
    const window_width = window.screen.width;
    gsap.registerPlugin();
    gsap.registerPlugin(ScrollTrigger);
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

    const itemAni = () => {
        const itemBox = document.querySelectorAll('.main-box .item-box')

        itemBox.forEach((item) => {
            console.log(item)
            const title = item.querySelector('.left');
            const img = item.querySelector('.right');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center",
                },
            });


            tl.from(title, {
                duration: 0.9,
                opacity: 0,
                x: '-20vw',
            })
                .from(img, {
                    duration: 1,
                    opacity: 0,
                    x: '18vw',
                }, '<0.3')
        })

    }
    itemAni()
};
