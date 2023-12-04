
window.addEventListener('load', function () {
    setTimeout(function(){   
    let loadingBg = document.querySelector('.loading_bg');
    loadingBg.classList.add('active');
},3000);

    // setTimeout(function () {
    //     if (!loadingBg.classList.contains('active')) {
    //         loadingBg.classList.add('active');
    //     }
    // }, 3000);
});


window.onscroll = function () {
    scrollFunction();
};




document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});



function scrollFunction() {
    const topButton = document.getElementById("topBBB");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}






// 対象の要素を取得
const target = document.querySelector('.animeIMG');

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation(){
    // 要素の位置情報を取得
    const targetRect = target.getBoundingClientRect();

    // 画面内に入っているかどうかを判定
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        // 画面内に入った場合、クラスを付与
        target.classList.add('fadeinn'); // yourClassNameは付与したいクラス名に置き換えてください
    } else {
        // 画面外に出た場合、クラスを除去
        target.classList.remove('fadeinn');
    }
};

window.addEventListener('scroll', observation);

const target02 = document.querySelector('.sec01ono');

function observation02() {
    const targetRect02 = target02.getBoundingClientRect();
    if (targetRect02.top < window.innerHeight && targetRect02.bottom >= 0) {
        target02.classList.add('fadein02');
    } else {
        target02.classList.remove('fadein02');
    }
};

window.addEventListener('scroll', observation02);

const target03 = document.querySelector('.sec01p');

function observation03() {
    const targetRect03 = target03.getBoundingClientRect();
    if (targetRect03.top < window.innerHeight && targetRect03.bottom >= 0) {
        target03.classList.add('fadein03');
    } else {
        target03.classList.remove('fadein03');
    }
};

window.addEventListener('scroll', observation03);

const target04 = document.querySelector('.staffMino');

function observation04() {
    const targetRect04 = target04.getBoundingClientRect();
    if (targetRect04.top < window.innerHeight && targetRect04.bottom >= 0) {
        target04.classList.add('fadein04');
    } else {
        target04.classList.remove('fadein04');
    }
};

window.addEventListener('scroll', observation04);

const target05 = document.querySelector('.staffMedousa');

function observation05() {
    const targetRect05 = target05.getBoundingClientRect();
    if (targetRect05.top < window.innerHeight && targetRect05.bottom >= 0) {
        target05.classList.add('fadein05');
    } else {
        target05.classList.remove('fadein05');
    }
};

window.addEventListener('scroll', observation05);


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    effect: 'coverflow',
    speed: 600,
    slidesPerView: 1,
    centeredSlides: true,

    breakpoints: {
        320: {
            slidesPerView: 1.8,
        }
    }
});

const swiper02 = new Swiper('.swiper02', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 0,
    },

    breakpoints: {
        320: {
            slidesPerView: 1.1,
        }
    },

    autoplaySpeed: 0,
    allowTouchMove: false,
    autoheight: true,
    speed: 6000,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
});


