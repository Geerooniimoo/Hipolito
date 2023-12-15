window.onclick = ({target}) => {
    if([whoWeAre,whatWeDo,leadership].includes(target)) {

        let div = target == whoWeAre ? aboutDiv1 : target == whatWeDo ? aboutDiv2 : leaderDiv;

        document.querySelectorAll('.active').forEach(el=>el.classList.toggle('notActive',true));
        document.querySelectorAll('.active').forEach(el=>el.classList.toggle('active',false));
        document.querySelectorAll('.slideUp').forEach(el=>el.classList.toggle('slideUp',false));
        
        [aboutDiv1,aboutDiv2,leaderDiv].forEach(el=>el.classList.toggle('hide',true));
        [aboutDiv1,aboutDiv2,leaderDiv].forEach(el=>el.classList.toggle('sliceUp',false));

        target.classList.toggle('active',true);
        target.classList.toggle('notActive',false);

        div.classList.toggle('hide', false);
        div.classList.toggle('slideUp', true);
    };
};    


