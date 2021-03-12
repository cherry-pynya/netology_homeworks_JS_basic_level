const checks = document.querySelectorAll('.interest input');

[...checks].forEach((check) => {
    check.addEventListener('change', () => {
        checkDown(check);
        checkUp(check);
    });
});


function checkDown(element) {
    const elDown = element.closest('li').querySelectorAll('input');
    [...elDown].forEach((check) => {
        check.checked = element.checked;
        check.indeterminate = false;
    });
}


function checkUp(element) {
    const siblings = element.closest('ul').querySelectorAll('input'); 
    if (element.closest('ul').closest('li')) {

        const parentCheck = element.closest('ul').closest('li').querySelector('input'); 

        if ([...siblings].every(sibling => sibling.checked)) { 
            parentCheck.checked = true;
            parentCheck.indeterminate = false;
        } else if ([...siblings].some(sibling => sibling.checked)) { 
            parentCheck.checked = false;
            parentCheck.indeterminate = true;
        } else { 
            parentCheck.checked = false;
            parentCheck.indeterminate = false;
        }
        checkUp(parentCheck); 

    }
}