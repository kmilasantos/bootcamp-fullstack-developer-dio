const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if(button.classList.contains('dark-mode')){
        button.innerHTML = "Modo Light";
        h1.innerHTML = "Modo Dark ON";
        return;
    }

    h1.innerHTML = "Modo Light ON";
    button.innerHTML = "Modo Dark";
}


button.addEventListener('click', changeMode);