import './scss/app.scss';
import List from './list';
import {list_arrow , disable_item,buttonLeft,buttonRigth,wrapper,repair,theyalow,repairSlide,theyalowSlide} from './components';
import Slide from './slide_swipe';
var list = new List(list_arrow,disable_item);
var slide = new Slide(wrapper,repair,theyalow,repairSlide,theyalowSlide)
buttonLeft.addEventListener('click',()=>{
    slide.Slide();
})
buttonRigth.addEventListener('click',()=>{
    slide.Slide();
})
list.list_arrow.addEventListener('click',()=>{list.Checking();
});
