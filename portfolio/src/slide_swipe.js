export default class Swipe{
    constructor(_wrapper,_repair,_theyalow,_repairSlide,_theyalowSlide){
        this.wrapper = _wrapper
        this.repair = _repair
        this.theyalow = _theyalow
        this.repairSlide = _repairSlide
        this.theyalowSlide = _theyalowSlide
        this.next = _repairSlide;
    }

    Slide(){
        if(this.next == this.repairSlide){
            this.theyalowSlide.classList.add('disable');
            this.repairSlide.classList.remove('disable');
            this.repairSlide.classList.add('activate')
            this.next = this.theyalowSlide;
        }
        else{
            this.repairSlide.classList.add('disable');
            this.repairSlide.classList.remove('activate');
            this.theyalowSlide.classList.remove('disable');
            this.theyalowSlide.classList.add('activate');
            this.next = this.repairSlide;
        }
    }

}