// nav-bar 버튼을 클릭했을 때
$(function() {
    $(".nav-bar").click(function () {
        $("nav").toggleClass("on"); /*nav 영역이 보여진다.*/
        $(".nav-bar").toggleClass("clicked"); /*nav-bar버튼이 펼쳐져있을때 모양이 'X'로 바뀌고, 아닐때는 '≡'로 바뀐다.*/
    });
});