let head = document.querySelector('.head'), burgerBtn = document.querySelector('.head-burger');
burgerBtn.addEventListener('click',function (e) {
    e.preventDefault();
    head.classList.toggle('head-active')
});