const btns = document.querySelectorAll('.btn');
const tabsContainer = document.querySelector('.operations_tab-container');
const contents = document.querySelectorAll('.operations_content');

tabsContainer.addEventListener('click' , function (el) {
    const clicked = el.target.closest('.operations_tab');
    console.log(clicked);

    if (!clicked)return;
    btns.forEach(r => r.classList.remove('operations_tab--active'));
    clicked.classList.add('operations_tab--active');

    contents.forEach(f => f.classList.remove('operations_content--active')); 
    document.querySelector(`.operations_content--${clicked.dataset.tab}`)
    .classList.add('operations_content--active')
    
});
