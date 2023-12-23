
let height = aboutNav.offsetTop;

window.onscroll = ({target}) => {
    height<window.scrollY 
        ? aboutNav.classList.toggle('topFixed',true)
        : aboutNav.classList.toggle('topFixed',false);
}


window.onclick = ({target}) => {
    let btns = [whoWeAre,whatWeDo,leadership];
    if(btns.includes(target)) {

        btns.forEach(el => el.style.border = 'unset');
        target.style.borderBottom = '4px solid red';

        let div = target == whoWeAre ? aboutDiv1 : target == whatWeDo ? aboutDiv2 : leaderDiv;
        div.scrollIntoView({behavior:"smooth",block:'center'});
    };
};    


