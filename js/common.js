$(function () { ////////////////// JQB ////////////
    console.log("로딩완료");

    // 햄버거 메뉴 on 넣기
    $(".menu_btn").click(function () {
        $("#menu_wrap").toggleClass("on");
        if (menuSts)
            $("#header").toggleClass("on");
    }); ////////// click /////////////
    
    /// event 메뉴 클릭시
    $(".nav_list li").last().click(function(){
        alert("해당 페이지는 준비중입니다.");
    }); /////// click /////////

    // 메뉴 li 오버시 배경 바뀌게
    $(".nav_list li").mouseover(function () {
        var i = $(this).index();
        // console.log(i);

        $("#menu_wrap").css({
            background: "url(images/menu" + (i + 1) + ".jpg) no-repeat center/cover"
        })
    }); ////// mouseover //////////


}); ////////////////// JQB //////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
