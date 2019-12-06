window.addEventListener("load", doitfirst);

function doitfirst() {

  itemOne = JSON.parse(sessionStorage.getItem('details')); // []
  // console.log(itemOne)
  products = JSON.parse(localStorage.getItem('Products'));// [{}]
  // console.log(products)

  row = document.getElementsByClassName("fs1")[0];
  count = 1;
  for (let i = 0; i < itemOne.length; i++) {
    // console.log("value",itemOne[i] , "index", i);
    for (let j = 0; j < products.length; j++) {
      // console.log(products[j] , j);
      if (itemOne[i] == j) {
        // console.log(products[j]);
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
            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . </p>\
        <h4>تسهيلات السداد</h4>\
        <ul class="det">\
            <li> 5% مقدم </li>\
            <li>أقساط </li>\
            <li> 0% فوائد </li>\
            <li>الاقساط شهرية </li></ul></div>  \
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
      <a href="" class="btn btn1" name="submit" type="submit" id="contact-submit" data-submit="...Sending"> add to cart </a>\
    </fieldset>\
</div>\
</div> ';

          row.innerHTML = html;
      
      }
    }
  }
}

