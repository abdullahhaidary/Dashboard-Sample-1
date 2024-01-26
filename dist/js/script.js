$(document).ready(function() {
    // $("#hideMenu").on("click", function() {
    //     $(".menu").slideLeft();

    // });
    var menuWidth = $("#menu").outerWidth();
    var isMenuHidden=false;
    $("#hideMenu").on("click", function() {
        showHideMenu();
    });
    $("#menu").mouseover(function() {
        if(isMenuHidden){
            showHideMenu();
        }
    });


    function showHideMenu(){
        if(!isMenuHidden) {
            $("#menu").animate({
                // left: -0.95 * menuWidth// Slide to the left by the width of the menu
                // ,
                left:'-17%'
            }, 500, function() {
                // Animation complete, hide the menu
                // $(this).hide();
            });
            $(".body-section").animate({
                marginLeft: '5%', // Reduce margin-left to 0
                width: '95%'
            }, 500);
            $(".body-section").animate({
            }, 500);
            isMenuHidden = true;
            $("#hideMenu").removeClass("fa-arrow-left");
            $("#hideMenu").addClass("fa-arrow-right");
        }else{
            $("#menu").animate({
                // left: -0.95 * menuWidth// Slide to the left by the width of the menu
                // ,
                left:'0'
            }, 500, function() {
                // Animation complete, hide the menu
                // $(this).hide();
            });
            $(".body-section").animate({
                marginLeft: '20%', // Reduce margin-left to 0
                width: '80%'
            }, 500);
            $(".body-section").animate({
            }, 500);
            $("#hideMenu").removeClass("fa-arrow-right").animate({}, 500);
            $("#hideMenu").addClass("fa-arrow-left");
        
            isMenuHidden = false;
        }
    }
    $('#responsive-menu-icon').click(function(){
        if($("#menu").css('display')=='none'){
        $("#menu").css('display','block');
        $("#menu").css('left',0);
        $("#menu").css('width','100%');
        $("#menu").css('height','100%');
        $(".body-section").css('display','none');
        }else{
            $("#menu").css('display','none');
            $(".body-section").css('display','block');
        }

    });
    $(window).on('resize',function(){
        checkWindowSize();
    });
    function checkWindowSize(){
        var width = $(window).width();
        if(width>1015){
            $("#hideMenu").addClass("fa-arrow-left");
            $("#hideMenu").removeClass("fa-arrow-right");
        }else if(width<1015 && width>640){
            $("#hideMenu").addClass("fa-arrow-right");
            $("#hideMenu").removeClass("fa-arrow-left");
        }else if(width>640){
            alert('yup');
           $("#menu").css('display', 'block');
            $(".body-section").animate({
                marginLeft: '5%', // Reduce margin-left to 0
                width: '95%'
            }, 500);
        }
    }
});
