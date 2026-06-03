//서브메뉴
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