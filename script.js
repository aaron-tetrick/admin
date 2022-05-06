const icons = document.querySelectorAll(".sidebar ul li")

icons[0].addEventListener('mouseenter', hover)
icons[1].addEventListener('mouseenter', hover)
icons[2].addEventListener('mouseenter', hover)
icons[3].addEventListener('mouseenter', hover)
icons[4].addEventListener('mouseenter', hover)
icons[5].addEventListener('mouseenter', hover)
icons[6].addEventListener('mouseenter', hover)
icons[7].addEventListener('mouseenter', hover)
icons[8].addEventListener('mouseenter', hover)

icons[0].addEventListener('mouseleave', unhover)
icons[1].addEventListener('mouseleave', unhover)
icons[2].addEventListener('mouseleave', unhover)
icons[3].addEventListener('mouseleave', unhover)
icons[4].addEventListener('mouseleave', unhover)
icons[5].addEventListener('mouseleave', unhover)
icons[6].addEventListener('mouseleave', unhover)
icons[7].addEventListener('mouseleave', unhover)
icons[8].addEventListener('mouseleave', unhover)


function hover(e) {
    e.target.style.filter = 'invert(100%) sepia(0%) saturate(2%) hue-rotate(77deg) brightness(102%) contrast(101%)'
    e.target.style.transition = '.2s';
    e.target.style.transform = "scale(1.1)";
    e.target.style.cursor = "pointer";
    console.log(icons);
}

function unhover(e) {
    e.target.style.filter = "invert(0%) sepia(100%) saturate(16%) hue-rotate(246deg) brightness(98%) contrast(105%)";
    e.target.style.transition = '.2s'
    e.target.style.transform = "scale(1)"
}