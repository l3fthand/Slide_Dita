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

    var oSliderCurrent = document.querySelector('slider-current')
    oSliderCurrent.classList.remove('slider-current')
    if(oSliderCurrent.previousElementSibling != null){
        oSliderCurrent.previousElementSibling.classList.add('slider-current')
    }else{
        oSliderCurrent.parentNode.lastElementChild.classList.add('slide-current');
    }

}

function changeColor(){
    var oMain = document.querySelector('.main')
    var oContainer = document.querySelector('.color')
    var oBrown = oContainer.children[1];
    oMain.children[0].children[1].src=('Assets/large/'+oBrown.data-image1)
}

var oRight = document.querySelector('.fa-caret-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-caret-left');
oLeft.addEventListener('click',moveBack);

var oColor = document.querySelector('.color')
var brown = oColor.children[1];

brown.addEventListener('click',changeColor);