var Cart ={

    contents:[],

    init:function(){
        _contents=localStorage.getItem(Cart.key);
        if(_contents){
            Cart.contents = JSON.parse(_contents);
        }else{
            Cart.contents=[
                {id:1 ,title:"bmw",quantity:5,price:100000},
                {id:2 ,title:"volvo",quantity:6,price:100000},
                {id:3 ,title:"chevy",quantity:3,price:100000},
                {id:4 ,title:"merci",quantity:2,price:100000},
            ];
            Cart.sync();
        }
    },
    
    //empty the cart 
    empty:function(){
        Cart.contents=[];
    },
    
    //update the cart 
    sync:function(){
        _cart = JSON.stringify(Cart.contents);
        localStorage.setItem(Cart.key,_cart);   
    },  

     // find item in the cart by the id
     find: function(_id){
       match= Cart.contents.filter(function(elem){
            if(elem.id == _id){
                return true;
            }
        });                         // [{id:}]
        if(match && match[0]){
            return match[0];
        }                                    // {}
    },

    //add new item to the cart 
    //check that itis not already in the cart 

    add:function(_id){
        if (Cart.find(_id)){
            Cart.increase(id,1); 
        }else{
            arr=products.filter(function(product){
                if( product.id == _id){
                    return true;
                }
            });
            if(arr && arr[0]){
                obj={
                    id:arr[0].id ,
                    title:arr[0].title,
                    quantity:1,
                    price:arr[0].price
                }
                Cart.contents.push(obj);
                Cart.sync();
            }else{
                // product id doesnot exist in the products data 
                alert('invalid product');
             }
        }
    },
    increase:function(_id,quantity=1){
        //increase the quantity of the item in the cart 
        Cart.contents = Cart.contents.map(function(item){
            if(item.id==_id){
                item.quantity = item.quantity + quantity;
            }
            return item;
        });
        //update local storage 
        Cart.sync();

    },
    decrease:function(_id,quantity=1){
        //decrease the quantity of the item in the cart 
        Cart.contents = Cart.contents.map(function(item){
            if(item.id==_id){
                item.quantity = item.quantity - quantity;
            }
            return item;
        });
        //update local storage 
        Cart.sync();

    }
}


function decreamentCart(ev){
    ev.preventDefault();
    id = parseInt(ev.target.getAttribut('data-id'));
    Cart.decrease(id,1);
    controls=ev.target.parentElement;
    qty=controls.querySelector('span:nth-child(2)');
    item=Cart.find(1);
    if(item){
        qty.textContent = item.quantity
    }else{
        document.getElementById('cart').removeChild(controls.parentElement);
    }

}