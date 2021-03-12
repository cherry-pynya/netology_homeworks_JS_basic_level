const mainPopUp = document.getElementById('modal_main');
    close = document.getElementsByClassName('modal__close');
    sucessBtn = document.getElementsByClassName('show-success');
    sucessWindow = document.getElementById('modal_success');

function startScript() {
    mainPopUp.classList.add('modal_active');
};

startScript();

close[0].onclick = function() {
    mainPopUp.classList.remove('modal_active');
};

sucessBtn[0].onclick = function() {
    sucessWindow.classList.add('modal_active');
    mainPopUp.classList.remove('modal_active');
}

close[2].onclick = function() {
    sucessWindow.classList.remove('modal_active');
};


