/*.....................................................
transisi home section
.......................................................*/
// img home start
document.addEventListener("DOMContentLoaded", function () {
    var imgHome = document.getElementById("imgHomeUbah");
    imgHome.classList.add("tampil");
  });

// nabvar
document.addEventListener("DOMContentLoaded", function () {
    var imgHome = document.getElementById("navbar");
    imgHome.classList.add("muncul");
  });
/*.....................................................
transisi home section end
.......................................................*/


/*.....................................................
transisi about section
.......................................................*/
// nama saya start
window.addEventListener('scroll', hidden2);
function hidden2() {
    
    var hiddens = document.querySelectorAll('.namaSaya');

    for(var i=0; i < hiddens.length; i++){

        var windowheight = window.innerHeight;
        var hiddentop = hiddens[i].getBoundingClientRect().top;
        var hiddenpoint = 150;

        if(hiddentop < windowheight - hiddenpoint){
            hiddens[i].classList.add('active');
        } 
        else{
            hiddens[i].classList.remove('active');
         };
    };
};

// img start
window.addEventListener('scroll', hidden);
function hidden() {
    
    var hiddens = document.querySelectorAll('.profile-section2');

    for(var i=0; i < hiddens.length; i++){

        var windowheight = window.innerHeight;
        var hiddentop = hiddens[i].getBoundingClientRect().top;
        var hiddenpoint = 150;

        if(hiddentop < windowheight - hiddenpoint){
            hiddens[i].classList.add('poto');
        } 
        else{
            hiddens[i].classList.remove('poto');
         };
    };
};
/*.....................................................
transisi about section
.......................................................*/