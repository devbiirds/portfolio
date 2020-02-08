import './scss/app.scss';
import List from './list';
import {list_arrow , disable_item,buttonLeft,buttonRigth,wrapper,repair,theyalow,repairSlide,theyalowSlide,desktopBtn,mobileBtn} from './components';
import Slide from './slide_swipe';
var list = new List(list_arrow,disable_item);
var slide = new Slide(wrapper,repairSlide,theyalowSlide)
var buttons = document.querySelector('.buttons');
list.list_arrow.addEventListener('click',()=>{list.Checking();
});
if(screen.width < 600){
    var initialPoint;
var finalPoint;
document.querySelector('.slides').addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
initialPoint=event.changedTouches[0];
}, false);
document.addEventListener('touchend', function(event) {
event.preventDefault();
event.stopPropagation();
finalPoint=event.changedTouches[0];
var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
if (xAbs > yAbs) {
if (finalPoint.pageX < initialPoint.pageX){
/*СВАЙП ВЛЕВО*/}
else{
/*СВАЙП ВПРАВО*/}
}
else {
if (finalPoint.pageY < initialPoint.pageY){
    console.log('вверх')
    slide.Slide();
}
else{
    slide.Slide();
console.log('вниз')}
}
}
});
}
else{
    buttonLeft.addEventListener('click',()=>{
        slide.Slide();
    })
    buttonRigth.addEventListener('click',()=>{
        slide.Slide();
    })
}
var theyalowImage = document.querySelector('.slides__item--theyalow')
console.log(theyalowImage);
var repairImage = document.querySelector('.slides__item--repair')

desktopBtn.addEventListener('click',()=>{
    if(slide.next == repairSlide){
        theyalow.classList.toggle('mobile-frame',false);
        theyalow.classList.add('desktop-frame');
    }
    else{
        repair.classList.toggle('mobile-frame',false);
        repair.classList.add('desktop-frame');
    }
    
})
mobileBtn.addEventListener('click',()=>{
    if(slide.next == repairSlide){
        theyalow.classList.add('mobile-frame');
    }
    else{
        repair.classList.add('mobile-frame');
    }
})
theyalowImage.addEventListener('click',(event)=>{
    console.log('click')
  buttons.classList.toggle('disable',false);
 
  wrapper.classList.add('disable');
  theyalow.classList.add('active_frame');
})
repairImage.addEventListener('click',(event)=>{
    buttons.classList.toggle('disable',false);
    
    wrapper.classList.add('disable');

    repair.classList.add('active_frame');
  })
document.querySelector('.back').addEventListener('click',()=>{
    wrapper.classList.toggle('disable',false);
    
    if(slide.next == repairSlide){
        theyalow.classList.toggle('active_frame',false);
        buttons.classList.toggle('disable')
    }
    else{
        repair.classList.toggle('active_frame',false);
        buttons.classList.add('disable')
    }
})