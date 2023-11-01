let rt = document.querySelector(':root');
let sd = document.querySelector('.sdwan');
let cyber = document.querySelector('.cyberSec');
let cnt = document.querySelector('.contact');

window.onclick = ({target:{id}}) => {
    let el = document.querySelector(`.${id}`)
    let height1 = `${cyber.offsetHeight}px`;
    let height2 = `${sd.offsetHeight}px`;
    let height3 = `${cnt.offsetHeight}px`;

    rt.style.setProperty('--height1', height1);
    rt.style.setProperty('--height2', height2);
    rt.style.setProperty('--height3', height3);
    
    if(document.querySelector('.showInfo')) {
        document.querySelector('.showInfo').classList.toggle('hideInfo');
        return setTimeout(()=>{
            document.querySelector('.showInfo').classList.toggle('showInfo');
            el.classList.toggle('showInfo')
        },1000);
    };
    
    el.classList.toggle('showInfo')
};
