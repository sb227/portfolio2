/// 메인 페이지 JS - main.js ////

$(function(){ /////// jQB ///////////////////////
    console.log("로딩완료!");
    
    // 아이템 위치 변수
    var itpos = [];
    // 클래스 itpos를 준 요소의 개수만큼 위치를 알아온다!
    var itcnt = $(".itpos").length;
    console.log("위치개수:"+itcnt);
    for(var i=0; i< itcnt; i++){
        itpos[i] = $(".itpos").eq(i).offset().top;
    } ////// for문 /////////////////
    
    console.log("위치순서:"+itpos);
    
    
    // 위치갭(이전,이후)
    var gap = 200;
    ////// scroll 셋팅 ///////////
    $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        console.log("스위:"+scTop);
        
        
        // 1번째 기준선 액션 ///
        if(scTop > itpos[0]-gap*2 && 
           scTop < itpos[0]+gap*2){
            // class넣기
            $("#sun_cont_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else{
            $("#sun_cont_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////
        
        // 2번째 기준선 액션 ///
        if(scTop > itpos[1]-gap && 
           scTop < itpos[1]+gap){
            // class넣기
            $(".sun_cont1").addClass("on");
        } ///////// if ////////////////////
        else{
            $(".sun_cont1").removeClass("on");
        } ///////// else ////////////////////
        
        
        // 3번째 기준선 액션 ///
        if(scTop > itpos[2]-gap && 
           scTop < itpos[2]+gap){
            // class넣기
            $(".sun_cont2").addClass("on");
        } ///////// if ////////////////////
        else{
            $(".sun_cont2").removeClass("on");
        } ///////// else ////////////////////
        
    });///////// scroll //////////////
    
    
    
    /// 셋팅된 위치에서 등장액션 class주기
    
    
    
    
    
    
    
    
    
});////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
