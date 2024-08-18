const Customise = _=>{
    let style = document.getElementById("customise__menu").style.display;
    console.log(style);
    if(style=="none")
        document.getElementById("customise__menu").style.display="grid";
    else
        document.getElementById("customise__menu").style.display="none";
}

const changeImage = e=>{
    document.getElementsByTagName('img')[0].src = e.target.src;
}