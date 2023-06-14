
const photos = document.getElementsByClassName('photo');
const photos1 = document.getElementsByClassName('photo1');
const photos2 = document.getElementsByClassName('photo2');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal_body');
const modalnote = document.getElementById('modal_note');
for (let element of photos) {
    element.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalnote.style.display = 'flex';
        // console.log(this.style)
        modalBody.style.backgroundImage = window.getComputedStyle(this).backgroundImage;
        modalBody.classList.toggle('fade');
    })
}
for (let element of photos1) {
    element.addEventListener('click', function () {
        modal.style.display = 'flex';
        // console.log(this.style)
        modalBody.style.backgroundImage = window.getComputedStyle(this).backgroundImage;
        modalBody.classList.toggle('fade');
    })
}
for (let element of photos2) {
    element.addEventListener('click', function () {
        modal.style.display = 'flex';
        // console.log(this.style)
        modalBody.style.backgroundImage = window.getComputedStyle(this).backgroundImage;
        modalBody.classList.toggle('fade');
    })
}
window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == modal) {
        modal.style.display = 'none';
        modalBody.classList.toggle('fade');
    }
})

function showDiv(divNumber) {

    var divs = document.querySelectorAll('div[id^="div"]');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    var selectedDiv = document.getElementById("div" + divNumber);
    selectedDiv.style.display = "flex";
}






