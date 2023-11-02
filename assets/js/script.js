let el,dsp,height;
let rt = document.querySelector(':root');

let showDsp = () => {
    el.classList.toggle('hideInfo',false);
    el.classList.toggle('showInfo',true);
};

let hideDsp = async () => {
    dsp.classList.toggle('showInfo',false);
    dsp.classList.toggle('hideInfo',true);
};

let hideNshow = () => {
    hideDsp();
    setTimeout(showDsp,500);
};

window.onclick = ({target:{id}}) => {
    el = document.querySelector(`.${id}`);

    height = `${el.offsetHeight}px`;
    rt.style.setProperty('--height1', height);
    
    dsp = document.querySelector('.showInfo') || false;

    if(!dsp) showDsp();
    
    if(dsp) {
        rt.style.setProperty('--height2', `${dsp.offsetHeight}px`);
        if(el==dsp) hideDsp();
        if(el!=dsp) hideNshow();
    };
};
