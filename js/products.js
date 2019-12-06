
//============ constructor Function ================
function Product(_id,_name, _price, _image, _category, _count) {
  this.id=_id,
  this.name = _name,
  this.price = _price,
  this.image = _image,
  this.category = _category,
  this.count = _count;
}

//  var lab1=new Product("hp",5000,"l1.jpg",'laptop',5);
// var lab6=new Product("hp",6000,"l2.jpg",'laptop',4);
// var lab2=new Product("dell",8000,"l1.jpg",'laptop',6);
// var lab3=new Product("apple",5000,"l1.jpg",'laptop',10);
// var lab4=new Product("lenovo",5000,"l2.jpg",'laptop',12);
// var lab5=new Product("hp",5000,"l3.jpg",'laptop',4);

products = [];

//======== pushing Users Objs in Local storage ===========
products.push(new Product(1,"hp", 5000, "l1.jpg", "laptop", 5));
products.push(new Product(2,"dell inspiron13", 8000, "l1.jpg", "laptop", 6));
products.push(new Product(3,"apple mac book", 20000, "l1.jpg", "laptop", 10));
products.push(new Product(4,"lenovo", 5000, "l1.jpg", "laptop", 12));
products.push(new Product(5,"hp", 5000, "l1.jpg", "laptop", 4));
products.push(new Product(6,"dell inspiron15", 10000, "l1.jpg", "laptop", 5));
products.push(new Product(7,"apple ", 50000, "l1.jpg", "laptop", 7));
products.push(new Product(8,"toshipa", 4000, "l1.jpg", "laptop", 2));

products.push(new Product(9,"sumsung", 5000, "l1.jpg", "phone", 5));
products.push(new Product(10,"sony", 8000, "l1.jpg", "phone", 6));
products.push(new Product(11,"iphone xs", 20000, "l1.jpg", "phone", 10));
products.push(new Product(12,"lenovo", 5000, "l1.jpg", "phone", 12));
products.push(new Product(13,"nokia", 5000, "l1.jpg", "phone", 4));
products.push(new Product(14,"sony", 10000, "l1.jpg", "phone", 5));
products.push(new Product(15,"iphone xs+ ", 22000, "l1.jpg", "phone", 7));
products.push(new Product(16,"nokia", 4000, "l1.jpg", "phone", 2));



localStorage.setItem("Products", JSON.stringify(products));
window.addEventListener("load", doitfirst);

function doitfirst() {
  //============= checking if there is session =========== 
//   if(sessionStorage.getItem("LoginUser") == ""){  window.location.href = "login.html";}

//showing and hidding the login and signout and singup
switch_btns(); 



//signout button 
signoutbtn.addEventListener("click",function () {
    sessionStorage.setItem("LoginUser" , "");
});


//appending the product div 

   shopdiv = document.getElementById("shop");
   products = JSON.parse(localStorage.getItem("Products"));

  for (let i = 0; i < products.length; i++) {
    console.log(products[i], i);
    html =  '<div class="col-md-3 col-sm-6 col-xs-12 box rr wow flipInY"\
                data-wow-duration="2s" data-wow-delay=".3s" data-wow-offset="300">\
                <img src="imgs/'+ products[i].image+'" alt="Lisbon">\
                <div class="city-feature">\
                    <i class="fa fa-user icon-small"></i>'+ products[i].name+'</div>\
                <div class="city-feature">\
                    <i class="fa fa-star icon-small"></i>'+ products[i].price+'</div>\
                <div class="city-feature">\
                    <i class="fa fa-star icon-small"></i><a href="buy.html">'+ products[i].category+'</a>\
                </div>\
                <a href="details.html" class="details" data-item="' +i +'">التفاصيل </a>\
                <br>\
                <a href="#" class=" addtocard item" id="' + i +'" >اضف فى السلة</a>\
            </div>';

  
  shopdiv.innerHTML += html;
  }// end of for loop

  //=====add to cart button =======

  add_to_cart();
    
//==============details of  product button ===============

details = document.getElementsByClassName("details");
item = [];
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function() {
    index = parseInt(details[i].getAttribute("data-item"));
    item.push(index);

    sessionStorage.setItem("details", JSON.stringify(item));
  });
}

}// end of doitfirst()  








//====================  Functions   ================================

//=======================================================
//showing and hidding the login and signout and singup function 

function switch_btns(){
    loginbtn=document.getElementById("login");    //login button
    signupbtn=document.getElementById("signup");    //signup button
    signoutbtn=document.getElementById("signout");    //signout button
    user=document.getElementById('user');              //empty space for useremail

    //check if there is alogged in user or not 

    if(sessionStorage.getItem("LoginUser") == ""||sessionStorage.getItem("LoginUser") == null){ 
         signoutbtn.style.display="none";
    }else if(sessionStorage.getItem("LoginUser") != ""){       //there is logged in user
      signoutbtn.style.display="inline";                  //show Signout
      signupbtn.style.display="none";                   //hide signup btn
      loginbtn.style.display="none";                      //hide login btn
      html=sessionStorage.getItem("LoginUser");          //show useremail from the session 
      user.innerHTML=html;
    }
}


// add to cart function 
function add_to_cart(){
  button = document.getElementsByClassName("item"); //add to cart btn
  items = [];
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
      e.preventDefault();
      indexs = parseInt(button[i].getAttribute("id"));
      items.push(indexs);

      sessionStorage.setItem("items", JSON.stringify(items));
      // console.log(items);
    });
  }
}