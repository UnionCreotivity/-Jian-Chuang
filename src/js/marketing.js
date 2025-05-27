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

    const menus = document.querySelectorAll(".tab");
    const projectBoxes = document.querySelectorAll(".main-box");

    // 手機板menu
    if (window_width <= 1024) {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('is-active');
            menu.classList.toggle('active');
        });
    }

    //電腦版切換目錄、內容
    if (window_width > 1024) {

        //電腦版切換目錄、內容
        function show(targets) {
            gsap.to(targets, {
                duration: 0.5,
                autoAlpha: 1,
                display: "flex",

            });
        }

        //電腦版切換目錄、內容
        function hide(targets) {
            gsap.to(targets, {
                duration: 0.5,
                autoAlpha: 0,
                display: "none",

            });
        }

        //電腦版切換目錄、內容
        function activateIndex(index) {
            // 切換內容區塊
            projectBoxes.forEach((box, i) => {
                if (i === index) {
                    show(box);
                } else {
                    hide(box);
                }
            });

            // 切換 tab 樣式 + 圖片
            menus.forEach((menu, i) => {
                const originTab = menu.querySelector('.origin-tab');
                const activeTab = menu.querySelector('.active-tab');

                const isActive = i === index;

                // 切換 tab 樣式
                menu.classList.toggle("active", isActive);

                // 顯示或隱藏 tab 圖片
                originTab.style.display = isActive ? 'none' : 'block';
                activeTab.style.display = isActive ? 'block' : 'none';
            });
        }
        projectBoxes.forEach(box => gsap.set(box, { autoAlpha: 0, display: "none" }));

        activateIndex(0);

        menus.forEach((menu, index) => {
            menu.addEventListener("click", () => {
                activateIndex(index);
            });
        });
    }
    //手機板切換目錄、內容
    if (window_width <= 1024) {

        const menus = document.querySelectorAll(".p-menu");
        const ptImages = document.querySelectorAll(".pt");

        function show(targets) {
            gsap.to(targets, {
                duration: 1,
                autoAlpha: 1,
                display: "flex",
                // delay: 0.4,
                ease: "power0.inOut",
            });
        }

        function hide(targets) {
            gsap.to(targets, {
                duration: 0.5,
                autoAlpha: 0,
                display: "none",
                ease: "power0.inOut",
            });
        }

        function activateIndex(index) {


            ptImages.forEach((img, i) => {
                if (i === index) {
                    show(img);
                } else {
                    hide(img);
                }
            });

            menus.forEach((menu, i) => {
                menu.classList.toggle("active", i === index);
            });
        }
        ptImages.forEach(img => gsap.set(img, { autoAlpha: 0, display: "none" }));
        activateIndex(0);

        menus.forEach((menu, index) => {
            menu.addEventListener("click", () => {
                activateIndex(index);
            });
        });

        const tabWrapper = $('#tab-block'),

            tabContent = tabWrapper.find('.tab-pane');
        const tabMnu = $('.p-menu');

        tabContent.not(':first-child').hide();

        tabMnu.each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });
        tabContent.each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });

        tabMnu.click(function () {
            const tabData = $(this).data('tab');

            tabWrapper.find(tabContent).hide();
            tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show();

        });
    }




    const itemAni = () => {
        if (window_width <= 1024) {
            const itemBox = document.querySelectorAll('.show-room .item-box')

            itemBox.forEach((item) => {

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

        } else {
            const itemBox = document.querySelectorAll('.show-room .item-box')

            itemBox.forEach((item) => {

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

    }


    itemAni();

};
