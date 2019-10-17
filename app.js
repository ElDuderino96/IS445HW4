const balloon = document.querySelector('b');
balloon.style.fontSize = '30px';

function inflate() {
    let fontSizeStr = window.getComputedStyle(balloon).getPropertyValue('font-size')
    let numStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numStr, 10)

    if size > 60 {
        boom (balloon)
        document.removeEventListener('keyup', handlKeyup)
    } else {
        let newFontSize = (size + 10) + 'px'
        balloon.style.fontSIze = newFontSize;
    }
}

function deflate() {
    let fontSizeStr = window.getComputedStyle(balloon).getPropertyValue('font-size')
    let numStr = fontSIzeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numStr, 10)

    if (size <= 0) {
        balloon.replaceWith('Done')
        var sheet = document.createElement('style')
        sheet.innerHTML = 'div {font-size: 50px; text-align: center; margin-right: auto; margin-left: auto'
        document.body.appendChild(sheet);
        document.removeEventListener('keyup', handlKeyup)
    } else {
        let newFontSize = (size - 10) + 'px'
        balloon.style.fontSize = newFontSize;
    }
}

function boom(balloon) {
    balloon.firstChild.nodevalue = ''
}

function handlKeyup(event) {
    if (event.code == 'KeyI') {
        inflate()
    }

    if (event.code == 'KeyD') {
        deflate()
    }
}

document.addEventListener('keyup', handlKeyup)






// const balloon = document.getElementById('balloon')

// balloon.addEventListener("keyup", "I", balloon, function () => {
//     let balloonSize = parseInt(balloon.style.width);
//     let newSize = balloonSize + 10;
//     balloon.style.width = newSize.toString() + 'px'
// }
// )


// balloon.addEventListener("keydown", "D", balloon, function () => {
//     let balloonSize = parseInt(balloon.style.width);
//     let newSize = balloonSize - 10;
//     balloon.style.width = newSize.toString() + 'px'
// }
// )