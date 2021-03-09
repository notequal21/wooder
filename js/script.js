
// ---- native JS
// $(document).ready(function(){
//     $('.burger-body__item-burger').click(function(event){
//         $('.burger-body__item-burger, .burger-body__item-content').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

// let burger = document.querySelector('.burger-body__item-burger');
// let content = document.querySelector('.burger-body__item-content');

document.querySelector('.burger').addEventListener('click', (event) => {
    if ( document.querySelector('.burger').classList.contains('active') ) {
        document.querySelector('.burger').classList.remove('active');
    } else 
    {
        document.querySelector('.burger').classList.add('active');
    }

    if ( document.querySelector('.header-center nav').classList.contains('active') ) {
        document.querySelector('.header-center nav').classList.remove('active');
    } else 
    {
        document.querySelector('.header-center nav').classList.add('active');
    }
    
    if ( document.querySelector('body').classList.contains('lock') ) {
        document.querySelector('body').classList.remove('lock');
    } else 
    {
        document.querySelector('body').classList.add('lock');
    }
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(), 
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// ---- JQuery



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});