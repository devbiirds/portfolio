export default class Swipe{
    constructor(_wrapper,_repairSlide,_theyalowSlide){
        this.wrapper = _wrapper
        this.repairSlide = _repairSlide
        this.theyalowSlide = _theyalowSlide
        this.next = _repairSlide;
    }

    Slide(){
        if(this.next == this.repairSlide){
            this.theyalowSlide.classList.toggle('activate',false);
            this.theyalowSlide.classList.add('disable');
            this.repairSlide.classList.toggle('disable',false);
            this.repairSlide.classList.add('activate')
            this.next = this.theyalowSlide;
        }
        else{
            this.repairSlide.classList.add('disable');
            this.repairSlide.classList.toggle('activate',false);
            this.theyalowSlide.classList.remove('disable');
            this.next = this.repairSlide;
        }
    }

}