function moveNext(){
    var oCurrent = document.querySelector('.current')
    oCurrent.classList.remove('current')

    if(oCurrent.nextElementSibling != null){
        oCurrent.nextElementSibling.classList.add('current')
    }else{
        oCurrent.parentNode.firstElementChild.classList.add('current');
    }

    var oSliderCurrent = document.querySelector('.slider-current')
    oSliderCurrent.classList.remove('slider-current')

    if(oSliderCurrent.nextElementSibling != null){
        oSliderCurrent.nextElementSibling.classList.add('slider-current')
    }else{
        oSliderCurrent.parentNode.firstElementChild.classList.add('slider-current')
    }
}

function moveBack(){
    var oCurrent = document.querySelector('.current')
    oCurrent.classList.remove('current')

    if(oCurrent.previousElementSibling != null){
        oCurrent.previousElementSibling.classList.add('current')
    }else{
        oCurrent.parentNode.lastElementChild.classList.add('current');
    }

    var oSliderCurrent = document.querySelector('.slider-current')
    oSliderCurrent.classList.remove('slider-current')
    if(oSliderCurrent.previousElementSibling != null){
        oSliderCurrent.previousElementSibling.classList.add('slider-current')
    }else{

        oSliderCurrent.parentNode.lastElementChild.classList.add('slider-current');
    }

}

function jump(){
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

    var sSelect = this.dataset.target;
    var oSelect = document.querySelector(sSelect)
    oSelect.classList.add('current');


    var oCurrentSlide = document.querySelector('.slider-current');
    oCurrentSlide.classList.remove('slider-current');

    this.classList.add('slider-current');
  
}

function changeColor(){

    // var oSliderCurrent = document.querySelector('.slider-current');
    // oSliderCurrent.classList.remove('slider-current');

    var oFirstSlider = document.querySelector('.slider img:first-child')
    oFirstSlider.click();

    var oCurrent = document.querySelector('.color-current');
    oCurrent.classList.remove('color-current');

    this.classList.add('color-current');

    var sImage1 = this.dataset.image1;
    var sImage2 = this.dataset.image2;

    // var oSlider = document.querySelector('.slider')
    oSlider.children[0].src = 'Assets/front/'+ sImage1;
    oSlider.children[1].src = 'Assets/front/'+ sImage2;

    var oMain = document.querySelector('.main');
    oMain.children[0].children[0].src = 'Assets/large/'+ sImage1;
    oMain.children[0].children[1].src = 'Assets/large/'+ sImage2;


}

function tab(){

    var oCurrent = document.querySelector('.tabtext-current');
    oCurrent.classList.remove('tabtext-current');

    var sSelect = this.dataset.target;
    var oSelect = document.querySelector(sSelect);
    oSelect.classList.add('tabtext-current');

    var oCurrentTab = document.querySelector('.tab-current');
    oCurrentTab.classList.remove('tab-current');

    this.classList.add('tab-current');

}

var oRight = document.querySelector('.fa-caret-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-caret-left');
oLeft.addEventListener('click',moveBack);

var oColor = document.querySelector('.color')

for (let i = 0; i < oColor.children.length; i++) {
    oColor.children[i].addEventListener('click',changeColor);
}

var oSlider = document.querySelector('.slider');
for(var i=0; i<oSlider.children.length;i++){
    oSlider.children[i].addEventListener('click',jump);
}

var oTabs = document.querySelector('.tabs')
for(var i=0;i<oTabs.children.length;i++){
    oTabs.children[i].addEventListener('click',tab);
}

