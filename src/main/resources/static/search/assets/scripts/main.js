// 서브메뉴
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sub-menu .item')[0].classList.add('active');

    document.querySelectorAll('.sub-menu .item').forEach((el, idx) => {
        el.addEventListener('click', function () {
            document.querySelectorAll('.sub-menu .item').forEach(e => e.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(e => e.style.display = 'none');

            this.classList.add('active');
            document.querySelectorAll('.tab-content')[idx].style.display = 'block';
        });
    });
});

// 카카오맵
window.onload = function () {
    const container = document.querySelector('.map');
    const options = {
        center: new kakao.maps.LatLng(35.8714, 128.6014),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);
};