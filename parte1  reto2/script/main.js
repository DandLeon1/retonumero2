'use stric';

const img = document.getElementById('img');

img.onclick=()=>{
    if (img.classList.contains('bordeNo')) {
        img.classList.remove('bordeNo');
        img.classList.add('bordeSi');
    } else if(img.classList.contains('bordeSi')){
        img.classList.remove('bordeSi');
        img.classList.add('bordeNo');
    }
}


