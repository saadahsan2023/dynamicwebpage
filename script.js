const heading = document.querySelector('.hed3 h1');

setInterval(() => {
    heading.style.borderRightColor = '#fff';
    setTimeout(() => {
        heading.style.borderRightColor = '#d10020';
    }, 1000);
}, 2000);
document.addEventListener('DOMContentLoaded', function () {
    const YearsHeading = document.querySelector('.hed3 h1');
    setInterval(() => {
        YearsHeading.style.color = '#fff';
        setTimeout(() => {
            YearsHeading.style.color = '#d10020';
        }, 1000);
    }, 2000);
    let icon = document.querySelector('.icon-1 i');
    let icon1 = document.querySelector('.icon-2 i');
    let iconVisible = true;
    icon.addEventListener("click", () => {
        if (iconVisible) {
            icon.style.display = "none";
            icon1.style.display = "block";
        }
        else {
            icon.style.display = "block";
            icon1.style.display = "none";
        }
    })
});