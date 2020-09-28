// 갤러리 스크립트 


// 1. 스크롤위치
var scno = 0;
// 2. 전체 페이지 크기
var totsize;
// 3. 광스크롤방지
var psts = 0; //(0-허용,1-불허용)

/////////////////////////////////////////////


$(function () { ////////////////// JQB ////////////
console.log("로딩완료");

totsize = $("#photo").width() - $(window).width();

$(document).on("mousewheel DOMMouseScroll",
function (e) {
    // console.log("휠");

    e = window.event || e;
    var delta = e.detail ? e.detail : e.wheelDelta;
    if (/Firefox/i.test(navigator.userAgent)) {
        //console.log("난파폭!");
        delta = -delta; //부호를 반대로!
    } ////// if문 ////////////////////////

    console.log(delta);
    if (delta < 0) {
        scno += 120;
        if (scno > totsize) scno = totsize;
    } else {
        scno -= 120;
        if (scno < 0) scno = 0;
    } /// else //////

    $("#wrap").stop().animate({
        scrollLeft: scno + "px"
}, 2000, "easeOutQuint");

}); ///////////////// 마우스 휠 ////////////


// 이미지 뿌리기
for (var i = 1; i < 20; i++) {
    $("#photo").append("<li><img src='images/gallery/" + i + ".jpg'></li>");

//    $("#photo li:nth-child(" + i + ")").css({
//        top: rnum + "%",
//        left: rnum + "%"
//    }); //// css ///////////


} ////// for문 ////////



}); ////////////////// JQB //////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
