


// img home start
document.addEventListener("DOMContentLoaded", function () {
    var imgHome = document.getElementById("imgHomeUbah");
    imgHome.classList.add("tampil");
  });
// img home end

document.addEventListener("DOMContentLoaded", function () {
    var imgHome = document.getElementById("navbar");
    imgHome.classList.add("muncul");
  });



// about me start
window.addEventListener('scroll', hidden);
function hidden() {
    
    var hiddens = document.querySelectorAll('#hidden');

    for(var i=0; i < hiddens.length; i++){

        var windowheight = window.innerHeight;
        var hiddentop = hiddens[i].getBoundingClientRect().top;
        var hiddenpoint = 150;

        if(hiddentop < windowheight - hiddenpoint){
            hiddens[i].classList.add('active');
        } 
        // else{
        //     hiddens[i].classList.remove('active');
        //  };
    };
};
// about me end
