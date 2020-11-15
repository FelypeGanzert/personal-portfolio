// Menu
document.getElementById('main-nav').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show');
});

// Project entry animation
document.addEventListener('DOMContentLoaded', addProjects);
document.addEventListener('scroll', addProjects);

function addProjects() {
    const UIevents = document.querySelectorAll('.project');
    UIevents.forEach(el => {
        if (isVisible(el)) {
            el.classList.add('box-enter');
        } else{
            el.classList.remove('box-enter');
        }
    });
}

function isVisible(element) {
    let elPositionYstart = element.getBoundingClientRect().top + window.scrollY + 150;
    let elPositionYend = element.getBoundingClientRect().top + element.offsetHeight + window.scrollY - 150;
    let pageYstart = window.pageYOffset;
    let pageYend = pageYstart + window.innerHeight;

    if ((elPositionYstart >= pageYstart && elPositionYstart <= pageYend) ||
        (elPositionYend >= pageYstart && elPositionYend <= pageYend) ||
        (elPositionYstart <= pageYstart && elPositionYend >= pageYend)) {
        return true;
    } else {
        return false;
    }
}