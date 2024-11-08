let numb=1;

function changeNext() {
    let slider= document.getElementById('slider');
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (numb == 8) {
        numb=1;
    } else {
        numb++;
    }

    slider.src = './source/' + numb+  '.png';
    dots[numb - 1].className += " active";
}

function changePrev(){
    let slider= document.getElementById('slider');
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (numb == 1) {
        numb = 8;
    } else {
        numb--;    
    }

    slider.src='./source/' + numb + '.png';
    dots[numb - 1].className += " active";
}

function currentSlide(input_numb) {
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    let slider= document.getElementById('slider');
    numb=input_numb;
    slider.src='./source/' + numb + '.png';
    dots[numb - 1].className += " active";
}