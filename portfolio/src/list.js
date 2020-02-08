export default class List{

    constructor(_list_arrow,_disable_items){
        this.list_arrow = _list_arrow;
        this.disable_items = _disable_items;
    }
    Checking(){
        if(this.disable_items[1].classList[1] == 'none'){
            this.Open();
        }
        else{
            this.Close();
        }
    }
    Open(){
        
        this.disable_items.forEach(element => {
            element.classList.toggle('none',false);
        });
        this.disable_items.forEach(element => {
            element.classList.add('active');
        });
    }
    Close(){
        this.disable_items.forEach(element => {
            element.classList.toggle('active',false);
        });
        this.disable_items.forEach(element => {
            element.classList.add('none');
        });
    }
    

}