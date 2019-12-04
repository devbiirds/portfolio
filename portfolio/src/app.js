import './scss/app.scss';
import List from './list';
import {list_arrow,disable_item} from './components';
console.log(list_arrow)
console.log(disable_item)
var list = new List(list_arrow,disable_item);


list.list_arrow.addEventListener('click',()=>{list.Checking();
});