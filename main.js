    /*----------------------------------------------------*/
    /*  Our Project isotope
    /*----------------------------------------------------*/
    function latest_project1(){
        if ( $('.our_project_details').length ){
            // Activate isotope in container
            $(".our_project_details").imagesLoaded( function() {
                $(".our_project_details").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
            // Add isotope click function
            $(".our_project_filter li").on('click',function(){
                $(".our_project_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".our_project_details").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    latest_project1();