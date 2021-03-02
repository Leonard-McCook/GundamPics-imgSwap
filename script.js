var isFlipped = false;

function imgSwap(element) {
    console.log(element.src);
    if (isFlipped) {
        element.src = "imgs/GundamBack.jpg";
    } else {
        element.src = "imgs/GundamFront.jpg";
    }

    isFlipped = !isFlipped;
}