document.getElementById('dark_mode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mode',document.body.classList);



});
 if(localStorage.getItem('mode') !=''){
    document.body.classList.add(localStorage.getItem('mode'));
    document.getElementById('dark_mode').checked=true;
 }