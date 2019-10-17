const balloon = document.getElementById('balloon')

balloon.addEventListener("keyup", "I", balloon, function () => {
    let balloonSize = parseInt(balloon.style.width);
    let newSize = balloonSize + 10;
    balloon.style.width = newSize.toString() + 'px'
}
)


balloon.addEventListener("keydown", "D", balloon, function () => {
    let balloonSize = parseInt(balloon.style.width);
    let newSize = balloonSize - 10;
    balloon.style.width = newSize.toString() + 'px'
}
)