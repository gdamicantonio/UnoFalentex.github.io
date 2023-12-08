
function showabout(){
    $("#regole_container").css("display","inherit");
    $("#regole_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#regole_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#regole_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#regole_container").removeClass("animated slideOutLeft");
        $("#regole_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#regole").removeClass("animated fadeIn");
      $("#LoFi").removeClass("animated fadeIn");
    },1000);
},1500);
