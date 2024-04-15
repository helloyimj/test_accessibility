// 팝업
/* function openPop(type, id) {
    // 현재 body의 스크롤 위치를 저장합니다.
    var scrollPosition = window.pageYOffset;

    if (type == "layer") {
        $(".popup_layer").fadeOut();
        $("#" + id).fadeIn();
    }

    $(".popup_mask").fadeIn();

    // Scroll to the top of the page
    $('html, body').animate({
        scrollTop: 0
    }, 'fast');

    // body에 overflow: hidden 속성을 적용하여 스크롤을 막습니다.
    $("body").css({
        overflow: "hidden",
        height: "100%",
        position: "fixed",
        top: "0"
       // 스크롤이 되지 않도록 스크롤 위치를 유지합니다.
    });

    // 팝업 레이어의 위치를 조정합니다.
    $("#" + id).css({    
        top: "0", // 현재 스크롤 위치에 맞추어 팝업을 표시합니다.
        overflowY: "scroll"
    });
}


// 팝업 닫기
function closePop(id) {
    // 팝업 레이어를 닫습니다.
    $("#" + id).fadeOut();
    $(".popup_layer").fadeOut();
    $(".popup_mask").fadeOut();

    // body의 overflow 속성을 원래대로 복원합니다.
    $("body").css({
        overflow: "initial",
        height: "100%",
        position: "relative",
        top: "0"
    });

    // 팝업이 열렸을 때 저장한 스크롤 위치로 스크롤을 복원합니다.
    $('html, body').animate({
        scrollTop: savedScrollPosition
    }, 'fast');
}

var savedScrollPosition = 0; */ // 스크롤 위치를 저장할 변수를 초기화합니다.

var isOpen = false; // 팝업이 열려있는지 여부를 나타내는 변수

function openPop(type, id) {
    // 현재 body의 스크롤 위치를 저장합니다.
    var scrollPosition = $(window).scrollTop();

    if (type == "layer") {
        $(".popup_layer").hide();
        $("#" + id).show();
    }

    $(".popup_mask").fadeIn();

    // 팝업 레이어의 위치를 조정합니다.
    $("#" + id).css({
        top: scrollPosition + "px", // 현재 스크롤 위치에 맞추어 팝업을 표시합니다.
        position: "absolute"
    });    

    isOpen = true; // 팝업이 열렸음을 표시
  
    document.body.style.overflow = 'hidden'; // body의 overflow 속성을 hidden으로 설정
    $("html").css("overflow", "hidden");
}

// 팝업 닫기
function closePop(id) {
    // 팝업 레이어를 닫습니다.
    $("#" + id).hide();
    $(".popup_layer").hide();
    $(".popup_mask").hide();

    isOpen = false; // 팝업이 닫혔음을 표시
  
    document.body.style.overflow = 'auto'; // body의 overflow 속성을 auto로 설정하여 스크롤 가능하게 합니다.
    $("html").css("overflow", "auto");
}


////////////////////////////////////////////////////////
// top 버튼  

$(document).ready(function () {

let tBtn = "";
tBtn += '<!-- 최상단 이동 -->';
tBtn += '<div class="wrap_top_btn">';
tBtn += '    <a href="#wrapper" aria-label="최상단으로 이동" role="button"></a>';
tBtn += '</div>';
  //top button add & scroll event
  // new markup

    $(".footer").after(tBtn); 
    $(".wrap_top_btn").hide();
});


// $(window.parent).scroll(function () {
$(window).scroll(function () {

  // top_btn
    console.log($(this).scrollTop())

    if ($(this).scrollTop() > 600) {
        $(".wrap_top_btn").fadeIn();
        // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
    } else if ($(this).scrollTop() < 600) {
        $(".wrap_top_btn").fadeOut();
    }
});

$(document).on("click", ".wrap_top_btn a", function () {
  // $(document).on("click",".top_btn", function () {
    $("html, body").stop().animate({
        scrollTop: 0,
    },
    "500"
    );
    return false;
});

// tab common
$(document).on("click", ".wrap_tabs .tab_btn_item", function () {

    $(".wrap_tabs .tab_btn_item").removeClass("on");
    $(".tab_btn_list .tab_btn_anchor").removeClass("on");

    $(this).addClass("on");
    $(this).children(".tab_btn_anchor").addClass("on");

    let tabIdx = $(this).index();
    $(".wrap_tabs .tab_contents").removeClass("on");
    $(".wrap_tabs .tab_contents").eq(tabIdx).addClass("on");

    // 접근성 속성 추가 - 탭 버튼 선택 됨 
    $(".tab_btn_anchor").attr("aria-selected", "false");
    $(this).children(".tab_btn_anchor").attr("aria-selected", "true");

    // 선택된 탭 상태 추가  
    $(".tab_btn_anchor").children(".sr_only").remove();
    if(!$(this).hasClass('on')){
        $(this).children(".tab_btn_anchor").prepend('<span class="sr_only">비활성화 탭</span>');
    } else{
        $(this).children(".tab_btn_anchor").prepend('<span class="sr_only">선택된 탭</span>');	
    } 
});



    // 클릭 시 스크롤 부드럽게 이동 
    $(document).ready(function() {
        $(".scroll_down_btn").click(function(event) {      
            event.preventDefault();   
            var targetPosition = $($(this).attr("href")).offset().top;        

            $("html, body").animate({
                scrollTop: targetPosition
            }, {
                duration: 600, 
                easing: "easeInOutQuad"
            });
        });
    });


    // 아코디언 common

    /** 접근성 아코디언 메뉴 확장 축소 text 추가 - accodian_item  */    
    function toggleStateText() {
        $(".accodian_item .accodian_tit").attr({
            "aria-expanded": "false",
        });
            $(".accodian_item").each(function(){
      	        if(!$(this).hasClass('on')){
                $(this).children(".accodian_tit").prepend('<span class="sr_only">축소됨</span>');	
        
      	    } else{
                $(this).children(".accodian_tit").prepend('<span class="sr_only">확장됨</span>');
            
            }
        });
    }
    $(document).ready(function () {      
        toggleStateText(); 
    });

$(document).on("click", ".accodian_item", function () {
    $(this).toggleClass("on"); 

    if ($(this).hasClass("on")) {
        $(this).children(".accodian_cnt").stop().slideDown(300);
        $(this).addClass("on");
        $(this).find(".sr_only").text('확장됨');
        $(this).children(".accodian_tit").attr({
            "aria-expanded": "true",
        });
    
    } else {
        $(this).removeClass("on");
        $(this).children(".accodian_cnt").stop().slideUp(300);
        $(this).find(".sr_only").text('축소됨');
        $(this).children(".accodian_tit").attr({
            "aria-expanded": "falese",
        });
    }
});

// 아코디언 모두 접기 버튼
$(document).on("click", ".btn_accodian_all", function () {
    $(".accodian_list .accodian_item").removeClass("on");
    $(".accodian_list .accodian_tit").removeClass("on");
    $(".accodian_list .accodian_tit").attr({
        "aria-expanded": "false",
    });
    $(".accodian_list .accodian_tit").find(".sr_only").text('축소됨');
    $(".accodian_list .accodian_item").children(".accodian_cnt").stop().slideUp(300);
});



// 접근성 관련 스크립트 
// /* <div class="popup_layer"> 에 role="dialog" aria-modal="true" aria-labelledby="popup + "id="smPop" " 추가 */

function popupAriaAttrAdd() {

    $(".popup_layer").attr({
        "role": "dialog",
        "aria-modal": "true",
        "aria-labelledby": "",
    });

    $(".popup_layer").attr("aria-labelledby", function () {
        return this.id + "Title";
    });
}
$(document).ready(function () {
    popupAriaAttrAdd();
});


