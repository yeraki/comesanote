"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4526],{4526:(y,d,n)=>{n.r(d),n.d(d,{AddToCartPageModule:()=>i});var t=n(9808),r=n(2382),l=n(8526),s=n(5666),u=n(694),o=n(5e3);const c=[{path:"",component:u.O}];let a=(()=>{class e{}return e.\u0275fac=function(g){return new(g||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.Bz.forChild(c)],s.Bz]}),e})(),i=(()=>{class e{}return e.\u0275fac=function(g){return new(g||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[t.ez,r.u5,l.Pc,a]]}),e})()},694:(y,d,n)=>{n.d(d,{O:()=>u});var t=n(5e3),r=n(8526),l=n(1479),s=n(7913);let u=(()=>{class o{constructor(a,i,e){this.modalCtrl=a,this.cart=i,this.utility=e,this.minOrderQty=1,this.cart.item.cartQuantity=this.minOrderQty,this.availableQty=this.cart.item.totalStock||0}ngOnInit(){}dismiss(){this.modalCtrl.dismiss()}increaseQuantity(){this.getCartItemQty()+1<=this.availableQty?this.cart.item.cartQuantity+=1:this.utility.showToast("\xa1No hay tanta cantidad!","top","error")}decreaseQuantity(){this.cart.item.cartQuantity-1>=this.minOrderQty?this.cart.item.cartQuantity-=1:this.utility.showToast(`La cantidad m\xednima es ${this.minOrderQty}`,"top","error")}getCartItemQty(){let a=this.cart.items.findIndex(e=>e.id===this.cart.item.id),i=this.cart.item.cartQuantity;return a>-1&&(i=this.cart.items[a].cartQuantity+this.cart.item.cartQuantity),i}addToCart(){let a=this.getCartItemQty();this.availableQty>0&&a<=this.availableQty?(this.cart.addToCart(),this.modalCtrl.dismiss()):this.utility.showToast("\xa1No disponemos de esa cantidad!","top","error")}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(r.IN),t.Y36(l.N),t.Y36(s.t))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-to-cart"]],decls:21,vars:3,consts:[[1,"main-content"],[1,"close-box"],["name","close",3,"click"],[1,"subnote","text-align-center"],[1,"counter-wrapper"],[1,"counter-label"],[1,"counter-icon",3,"click"],["name","remove","slot","icon-only","role","img","aria-label","remove"],[1,"counter-value"],["name","add","slot","icon-only","role","img","aria-label","add"],["expand","full","color","danger",1,"text-normal",3,"click"]],template:function(a,i){1&a&&(t.TgZ(0,"ion-content"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"ion-icon",2),t.NdJ("click",function(){return i.dismiss()}),t.qZA(),t.qZA(),t.TgZ(4,"p",3),t._uU(5),t.qZA(),t.TgZ(6,"p",3),t._uU(7),t.qZA(),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t._uU(10,"Cantidad"),t.qZA(),t.TgZ(11,"ion-button",6),t.NdJ("click",function(){return i.decreaseQuantity()}),t._UZ(12,"ion-icon",7),t.qZA(),t.TgZ(13,"span",8),t._uU(14),t.qZA(),t.TgZ(15,"ion-button",6),t.NdJ("click",function(){return i.increaseQuantity()}),t._UZ(16,"ion-icon",9),t.qZA(),t.TgZ(17,"div",5),t._uU(18,"Unidades/Kg"),t.qZA(),t.qZA(),t.TgZ(19,"ion-button",10),t.NdJ("click",function(){return i.addToCart()}),t._uU(20,"Hecho"),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(5),t.hij("Cantidad minima = ",i.minOrderQty," Kg_ud"),t.xp6(2),t.hij("disponible = ",i.availableQty," Kg_ud"),t.xp6(7),t.Oqu(null==i.cart||null==i.cart.item?null:i.cart.item.cartQuantity))},directives:[r.W2,r.gu,r.YG],styles:["ion-content[_ngcontent-%COMP%]{--background: none}.main-content[_ngcontent-%COMP%]{background:#ffffff;padding:10px;border-radius:5px}.counter-icon[_ngcontent-%COMP%]{--background: transparent;--border-radius: 50%;width:30px;height:30px;color:#000;font-size:7px}.counter-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;margin:10px 0;font-size:14px}.close-box[_ngcontent-%COMP%]{text-align:right;font-size:20px}.subnote[_ngcontent-%COMP%]{margin:0;font-size:.9rem;padding:0 16px;color:#686666}"]}),o})()}}]);