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

    // 手機板menu
    if (window_width <= 1024) {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('is-active');
            menu.classList.toggle('active');
        });
    }

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

    var tabWrapper = $('#tab-block'),
        tabMnu = tabWrapper.find('.p-menu'),
        tabContent = tabWrapper.find('.tab-pane');

    tabContent.not(':first-child').hide();

    tabMnu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    tabContent.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    tabMnu.click(function () {
        var tabData = $(this).data('tab');
        tabWrapper.find(tabContent).hide();
        tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show();
    });


    const bgAni = () => {
        const tl = gsap.timeline({
            delay: 0.5
        })
        tl.from('.bg-box img', { duration: 1.5, opacity: 0, scale: 1.4 })
            .to('.tab-cont', { duration: 1, opacity: 1 }, '<0.1')
    }
    bgAni();

    const menuLine = () => {
        if (window_width > 1024) {
            const tl = gsap.timeline({
                delay: 0.5
            })

            tl.from('.main-box .left-fixed .long-line img', { duration: 1.3, height: '0%' })
        }

    }
    menuLine();

};
