let slideindex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.getElementsByName('Slides');

    if(n > slides.length){
        slideIndex = 1
    }
    if (n<1){
        slideIndex = slides.length
    }
    for(i = 0;i<slides.length ; i++){
        slides[i].sthyle.display = "none";
    }
}