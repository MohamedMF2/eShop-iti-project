window.addEventListener("load", doitfirst);

function doitfirst() {

  //get  product from details session storage
  item = JSON.parse(sessionStorage.getItem('details'));      // [2] or [5] or ....

  //query all products from Local storage
  products = JSON.parse(localStorage.getItem('Products'));   // [{},{},...]


  row = document.getElementsByClassName("fs1")[0];        //the empty row in details.html , appending to it
  
//looping over products

  for (let j = 0; j < products.length; j++) {

  // finding the product with the index == to the index in the session storage details  
      

      if (item[0] == j) {  

        html='<div class="row">\
               <div class="col-md-9 col-md-push-3"><div id="" class="" data-ride="">\
                 <br>\
                   <img src="imgs/'+products[j].image+'" class="img1" alt="...">\
                </div>\
               <div>\
              <h3 class="li">وصف الاعلان</h3>\
              </div>\
                 <div>\
                    <p class="text">\
                      لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب\
                      أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس \
                      أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات \
                    </p>\
                    <h4>تسهيلات السداد</h4>\
                    <ul class="det">\
                      <li> 5% مقدم </li>\
                      <li>أقساط </li>\
                      <li> 0% فوائد </li>\
                      <li>الاقساط شهرية </li>\
                    </ul>\
                    </div>\
              </div>\
              <div class="lefts col-md-3 col-md-pull-9">\
                <i class="fas fa-map-marker ddd fa-2x"></i>\
                <P class="text" >'+products[j].name+'</P>\
                <i class="fas far fa-building ddd fa-2x"></i>\
                <P class="text">خدمة التوصيل الى المنزل</P>\
                <i class="fas fa-pencil-ruler ddd fa-2x"></i>\
                <P class="text">كحلى</P>\
                <i class="fas fa-money-bill-wave-alt ddd fa-2x"></i>\
                <P class="text">السعر : '+products[j].price+' جنيه </P>\
                <fieldset>\
                  <a href="" class="btn btn1" name="submit" type="submit" id="contact-submit" data-item="'+j+'"> add to cart </a>\
                </fieldset>\
            </div>\
          </div> ';

          row.innerHTML = html;
      
      } //end of if

    }//end of for 
    

  // #contact-submit == add to cart button ,, onclick fire add_to_cart func
  document.getElementById("contact-submit").addEventListener('click',add_to_cart);


}//end of doitfirst





//=========================     Functions    ====================================

// 1- 

function add_to_cart(){

  // get cart arr from session storage
  cartarr = JSON.parse(sessionStorage.getItem("items"));

  // if cart arr isn't there , set new empty arr
  if(!cartarr){
    sessionStorage.setItem("items", "[]");
    cartarr=JSON.parse(sessionStorage.getItem("items"));

  }
    
  // check the product in the cart or not 
  // if not push it and set the arr 

  if(!find() )
    
    cartarr.push(item[0]);
    sessionStorage.setItem("items", JSON.stringify(cartarr));
  
  
} //end of add_to_cart



//-------------------------------------------------------------------------------------
// 2-

 function find(){

  // look for the product in cart arr , if there return true
  match= cartarr.filter(function(elem){
      if(elem == item[0]) return true; 
  });
  if(match && match[0]) return true;
   
                  
}//end of find