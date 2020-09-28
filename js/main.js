/// 메인 페이지 JS - main.js ////

$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    $("#wrap").smoothWheel()

    // 아이템 위치 변수
    var itpos = [];
    // 클래스 itpos를 준 요소의 개수만큼 위치를 알아온다!
    var itcnt = $(".itpos").length;
    console.log("위치개수:" + itcnt);
    for (var i = 0; i < itcnt; i++) {
        itpos[i] = $(".itpos").eq(i).offset().top;
    } ////// for문 /////////////////

    console.log("위치순서:" + itpos);


    // 위치갭(이전,이후)
    var gap = 150;
    ////// scroll 셋팅 ///////////
    $("#wrap").scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스위:" + scTop);

        // 1번째 기준선 액션 ///
        if (scTop > itpos[0] - gap * 2 &&
            scTop < itpos[0] + gap * 2) {
            // class넣기
            $("#sun_cont_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else {
            $("#sun_cont_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////

        // 2번째 기준선 액션 ///
        if (scTop > itpos[1] - gap &&
            scTop < itpos[1] + gap) {
            // class넣기
            $(".sun_cont1").addClass("on");
        } ///////// if ////////////////////
        else {
            $(".sun_cont1").removeClass("on");
        } ///////// else ////////////////////


        // 3번째 기준선 액션 ///
        if (scTop > itpos[2] - gap &&
            scTop < itpos[2] + gap) {
            // class넣기
            $(".sun_cont2").addClass("on");
        } ///////// if ////////////////////
        else {
            $(".sun_cont2").removeClass("on");
        } ///////// else ////////////////////

        // 4번째 기준선 액션 ///
        if (scTop > itpos[3] - gap * 2 &&
            scTop < itpos[3] + gap * 2) {
            // class넣기
            $("#gls_cont_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else {
            $("#gls_cont_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////

        // 5번째 기준선 액션 ///
        if (scTop > itpos[4] - gap * 2 &&
            scTop < itpos[4] + gap * 2) {
            // class넣기
            $("#shop_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else {
            $("#shop_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////
    }); ///////// scroll //////////////

    /// 셋팅된 위치에서 등장액션 class주기

    // 메뉴 li 오버시 배경 바뀌게
    $(".nav_list li").mouseover(function () {
        var i = $(this).index();
        // console.log(i);

        $("#menu_wrap").css({
            backgroundImage: "url(images/menu" + (i + 1) + ".jpg)"
        })
    }); ////// mouseover //////////


    var move = $(".gls_list");

    move.draggable({
            axis: "x" // 축고정("x"는 x축고정, "y"는 y축고정)
        })
        .css({
            transition: "all .4s ease-out"
        });

    // 화면 한계값 계산:
    // 화면의 1/5크기는?
    // 첫번째 한계값
    var fpt = $(window).width() / 5;
    console.log("첫째한계:" + fpt);
    // 마지막째 한계값
    var lpt = move.width() - (fpt * 4);
    // 마지막 한계값은 전체 크기에서 화면 4/5크기를 빼면된다!
    console.log("마지막한계:" + lpt);

    // 화면한계시에 위치고정 코드
    $("html,body").on("mousedown mouseup mousemove touchstart touchend touchmove", function () {
        //console.log("마우스냐 터치냐");

        // 1. 움직이는 박스(.gls_list)의 left값 구하기
        var mpos = move.offset().left;
        console.log("현재left:" + mpos);

        // 2. 처음 한계값 체크 후 위치고정하기!
        if (mpos > fpt) {
            move.css({ //한계값 고정!
                left: fpt + "px"
            }); /// css ////
        } /// if ////////////////
        // 3. 마지막 한계값 체크 후 위치고정하기!
        // left위치값은 마이너스임! -lpt
        else if (mpos < -lpt) {
            move.css({ //한계값 고정!
                left: -lpt + "px"
            }); /// css ////
        } /// else if /////////////////
    }); /////// 마우스, 터치 이벤트 //////////


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
