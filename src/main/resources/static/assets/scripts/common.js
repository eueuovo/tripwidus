//메뉴
document.addEventListener('DOMContentLoaded', function () {
    const urls = ['/main', '/my','/search', '/record'];

    document.querySelectorAll('.menu .item').forEach((el, idx) => {
        el.addEventListener('click', function () {
            window.location.href = urls[idx];
        })

        if (window.location.pathname === urls[idx]) {
            el.classList.add('active');
        }
    })

})
