import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // price=" 1999";
  // count=0;
  // warning="";
  // clickon(){
  //   this.count=this.count+1
  //   this.warning=""
  // }

//   clickoff(){
//     if(this.count==0){
//       this.warning="sorry negative numbers not allowed"
//      }else{
    
//     this.count=this.count-1
//   }
// }
// ng if & for

name="";
price:number;
count:number;
stater=[{
  name:'chicken' ,price:120,count:1
},
{name:'mutton',price:420,count:1}
];

show(){
this.stater.push(
 {name:this.name,
price:this.price,
count:this.count}
);
this.name=null;
this.price=null;
this.count=null;
}
del(){
  this.stater.splice(0,1);
}

head=['non-veg ','price']
}


