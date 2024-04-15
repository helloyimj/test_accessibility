/* 개방서비스 */

/* 개방서비스 페이지 최상단 페이지 타이틀 */

// 교통
$(document).ready(function () {

    var page_title_traffic = "";
    page_title_traffic +=    '<h2 class="page_title title_underline">교통</h2>'; 
    page_title_traffic +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_traffic").html(page_title_traffic);
});


// 바우처˙증명
$(document).ready(function () {

    var page_title_voucher = "";
    page_title_voucher +=    '<h2 class="page_title title_underline">바우처˙증명</h2>'; 
    page_title_voucher +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_voucher").html(page_title_voucher);
});


// 발급
$(document).ready(function () {

    var page_title_issue = "";
    page_title_issue +=    '<h2 class="page_title title_underline">발급</h2>'; 
    page_title_issue +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_issue").html(page_title_issue);
});


// 안전
$(document).ready(function () {

    var page_title_security = "";
    page_title_security +=    '<h2 class="page_title title_underline">안전</h2>'; 
    page_title_security +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_security").html(page_title_security);
});


// 여행˙휴양
$(document).ready(function () {

    var page_title_vacation = "";
    page_title_vacation +=    '<h2 class="page_title title_underline">여행˙휴양</h2>'; 
    page_title_vacation +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_vacation").html(page_title_vacation);
});


// 임신·육아
$(document).ready(function () {

    var page_title_parenting = "";
    page_title_parenting +=    '<h2 class="page_title title_underline">임신·육아</h2>'; 
    page_title_parenting +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_parenting").html(page_title_parenting);
});


// 청년
$(document).ready(function () {

    var page_title_young = "";
    page_title_young +=    '<h2 class="page_title title_underline">청년</h2>'; 
    page_title_young +=    '<h3>디지털서비스개방에서는 청년, 교통, 안전, 여행·휴양, 임신·육아, 바우처·증명, 발급 등<br class="none_768"> 7가지 분야의 다양한 공공서비스를 제공하고 있습니다.</h3>'; 

    $(".article01 .page_title_young").html(page_title_young);
});


// 국민비서
$(document).ready(function () {

    var page_title_ntsecretary = "";
    page_title_ntsecretary +=    '<h2 class="page_title title_underline">국민비서</h2>'; 
    page_title_ntsecretary +=    '<h3>국민이 필요한 행정 정보를 미리 알려주고 국민의 질문 사항을 상담해주는<br class="none_768">온라인 개인비서 입니다.</h3>'; 

    $(".article01 .page_title_ntsecretary").html(page_title_ntsecretary);
});


// 전자증명서
$(document).ready(function () {

    var page_title_Ecertificate = "";
    page_title_Ecertificate +=    '<h2 class="page_title title_underline">전자증명서</h2>'; 
    page_title_Ecertificate +=    '<h3>필요한 공공문서가 있다면 모바일 앱을 통해 발급 열람 제출까지 한번에 이용하실 수 있습니다.</h3>'; 

    $(".article01 .page_title_Ecertificate").html(page_title_Ecertificate);
});




/* 아직 준비중인 페이지 안내 모달 팝업 */

$(document).ready(function () {

    var prepare_alertPop = "";
    prepare_alertPop +=   '<!-- 콘텐츠 준비중 팝업 -->'; 
    prepare_alertPop +=   '<div class="popup_layer" id="contents_alertPop">'
    prepare_alertPop +=       '<div class="popup_inner popup_small contents_alertPop">'
    prepare_alertPop +=           '<div class="popup_statusbar">'
    prepare_alertPop +=               '<div class="popup_status_btn_wrap">'
    prepare_alertPop +=                 '<button type="button" aria-label="레이어 팝업 닫기" class="popup_close" onclick="closePop(\'layer\', \'contents_alertPop\'); return false;"></button>';
    prepare_alertPop +=               '</div>'
    prepare_alertPop +=           '</div>'
    prepare_alertPop +=           '<div class="popup_contents">'
    prepare_alertPop +=               '<p class="text_bold">콘텐츠 준비 중입니다.</p>'
    prepare_alertPop +=               '<p>보다 나은 서비스 제공을 위해 <br class="block_480"> 준비 중 입니다.</p>'
    prepare_alertPop +=           '</div>'
    prepare_alertPop +=       '</div>'
    prepare_alertPop +=   '</div>'

    $(".prepare_alertPop").html(prepare_alertPop);
});




/* 개방서비스 서비스 선택 슬라이드 */

/************************ 교통 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_traffic = "";
    service_list_traffic +=    '<div class="slide_box">'; 
    service_list_traffic +=      '<!-- slide -->'; 
    service_list_traffic +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_traffic +=        '<div class="service_list swiper-wrapper">'; 
    service_list_traffic +=            '<div class="swiper-slide">'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_벌점감경교육 예약.html" target="_self" class="service_item_ traffic_penaltyEdu">벌점감경교육 예약</a>'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_자동차검사 예약.html" target="_self" class="service_item_ traffic_carcheck">자동차검사 예약</a>'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_자동차 통합이력 조회 서비스.html" target="_self" class="service_item_ traffic_carHistory">자동차 통합이력 조회 서비스</a>'; 
    service_list_traffic +=                '<a href="javascript:void(0);" class="service_item_ traffic_tollFee" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">고속도로 미납통행료 조회 및 납부</a>'; 
    service_list_traffic +=                '<a href="javascript:void(0);" class="service_item_ traffic_eCharge" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">전기차 충전기 불편 신고</a>';     
/*     service_list_traffic +=                '<a href="04_개방서비스_교통_고속도로 미납통행료 조회 및 납부.html" target="_self" class="service_item_ traffic_tollFee">고속도로 미납통행료 조회 및 납부</a>'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_벌점감경교육 예약.html" target="_self" class="service_item_ traffic_penaltyEdu">벌점감경교육 예약</a>'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_자동차검사 예약.html" target="_self" class="service_item_ traffic_carcheck">자동차검사 예약</a>'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_자동차 통합이력 조회 서비스.html" target="_self" class="service_item_ traffic_carHistory">자동차 통합이력 조회 서비스</a>'; 
    service_list_traffic +=                '<a href="04_개방서비스_교통_전기차 충전기 불편 신고.html" target="_self" class="service_item_ traffic_eCharge">전기차 충전기 불편 신고</a>'; */
    service_list_traffic +=             '</div>'; 
    service_list_traffic +=        '</div>'; 
    service_list_traffic +=      '</div>'; 
    service_list_traffic +=      '<div class="wrap-slide-box">'; 
    service_list_traffic +=        '<div class="swiper-button-prev"></div>'; 
    service_list_traffic +=        '<div class="swiper-button-next"></div>';
    service_list_traffic +=      '</div>'; 
    service_list_traffic +=      '<div class="swiper-pagination"></div>'; 
    service_list_traffic +=    '</div>'; 

    $(".article01 .service_list_traffic").html(service_list_traffic);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_traffic_mob = "";
    service_list_traffic_mob += '<div class="select_area">'; 
    service_list_traffic_mob +=    '<!-- combo box -->'; 
    service_list_traffic_mob +=    '<div class="combo_box_wrap">';  
    service_list_traffic_mob +=       '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_traffic_mob +=       '<select class="combo_box">'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_벌점감경교육 예약.html" class="service_option traffic_penaltyEdu">벌점감경교육 예약</option>'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_자동차검사 예약.html" class="service_option traffic_carcheck">자동차검사 예약</option>'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_자동차 통합이력 조회 서비스.html" class="service_option traffic_carHistory">자동차 통합이력 조회 서비스</option>'; 
    service_list_traffic_mob +=           '<option value="prepare_alertPop" class="service_option traffic_tollFee">고속도로 미납통행료 조회 및 납부</option>'; 
    service_list_traffic_mob +=           '<option value="prepare_alertPop" class="service_option traffic_eCharge">전기차 충전기 불편 신고</option>'; 
/*     service_list_traffic_mob +=           '<option value="04_개방서비스_교통_고속도로 미납통행료 조회 및 납부.html" class="service_option traffic_tollFee">고속도로 미납통행료 조회 및 납부</option>'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_벌점감경교육 예약.html" class="service_option traffic_penaltyEdu">벌점감경교육 예약</option>'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_자동차검사 예약.html" class="service_option traffic_carcheck">자동차검사 예약</option>'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_자동차 통합이력 조회 서비스.html" class="service_option traffic_carHistory">자동차 통합이력 조회 서비스</option>'; 
    service_list_traffic_mob +=           '<option value="04_개방서비스_교통_전기차 충전기 불편 신고.html" class="service_option traffic_eCharge">전기차 충전기 불편 신고</option>';  */
    service_list_traffic_mob +=       '</select>';   
    service_list_traffic_mob +=      '</div>';   
    service_list_traffic_mob +=    '</div>'; 

    $(".article01 .service_list_traffic_mob").html(service_list_traffic_mob);

});


/************************ 바우처˙증명 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_voucher = "";
    service_list_voucher +=    '<div class="slide_box">'; 
    service_list_voucher +=      '<!-- slide -->'; 
    service_list_voucher +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_voucher +=        '<div class="service_list swiper-wrapper">'; 
    service_list_voucher +=            '<div class="swiper-slide">'; 
    service_list_voucher +=                '<a href="04_개방서비스_바우처·증명_문화누리카드이용.html" target="_self" class="service_item_ voucher_mnuriApi">문화누리카드 이용</a>'; 
    service_list_voucher +=                '<a href="04_개방서비스_바우처·증명_세금포인트조회및사용.html" target="_self" class="service_item_ voucher_taxPoint">세금포인트 조회 및 사용</a>'; 
    service_list_voucher +=                '<a href="04_개방서비스_바우처·증명_책이음서비스.html" target="_self" class="service_item_ voucher_bookConnect">책이음서비스</a>'; 
    service_list_voucher +=             '</div>'; 
    service_list_voucher +=        '</div>'; 
    service_list_voucher +=      '</div>'; 
    service_list_voucher +=      '<div class="wrap-slide-box">'; 
    service_list_voucher +=        '<div class="swiper-button-prev"></div>'; 
    service_list_voucher +=        '<div class="swiper-button-next"></div>';
    service_list_voucher +=      '</div>'; 
    service_list_voucher +=      '<div class="swiper-pagination"></div>'; 
    service_list_voucher +=    '</div>'; 

    $(".article01 .service_list_voucher").html(service_list_voucher);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_voucher_mob = "";
    service_list_voucher_mob += '<div class="select_area">'; 
    service_list_voucher_mob +=    '<!-- combo box -->'; 
    service_list_voucher_mob +=    '<div class="combo_box_wrap">';  
    service_list_voucher_mob +=       '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_voucher_mob +=       '<select class="combo_box">'; 
/*     service_list_voucher_mob +=        '<select onchange="if(this.value) location.href=(this.value);" class="combo_box">';  */
    service_list_voucher_mob +=            '<option value="04_개방서비스_바우처·증명_문화누리카드이용.html" class="service_option voucher_mnuriApi">문화누리카드 이용</option>'; 
    service_list_voucher_mob +=            '<option value="04_개방서비스_바우처·증명_세금포인트조회및사용.html" class="service_option voucher_taxPoint">세금포인트 조회 및 사용</option>'; 
    service_list_voucher_mob +=            '<option value="04_개방서비스_바우처·증명_책이음서비스.html" class="service_option voucher_bookConnect">책이음서비스</option>'; 
    service_list_voucher_mob +=        '</select>';   
    service_list_voucher_mob +=      '</div>';   
    service_list_voucher_mob +=    '</div>'; 

    $(".article01 .service_list_voucher_mob").html(service_list_voucher_mob);
});



/************************ 발급 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_issue = "";
    service_list_issue +=    '<div class="slide_box">'; 
    service_list_issue +=      '<!-- slide -->'; 
    service_list_issue +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_issue +=        '<div class="service_list swiper-wrapper">'; 
    service_list_issue +=            '<div class="swiper-slide">'; 
    service_list_issue +=                '<a href="javascript:void(0);" target="_self" class="service_item_ issue_healthInsurVer" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">건강보험자격득실확인서 발급</a>'; 
    service_list_issue +=                '<a href="javascript:void(0);" target="_self" class="service_item_ issue_incomeCert" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">소득금액 증명원 발급</a>'; 
    service_list_issue +=                '<a href="javascript:void(0);" target="_self" class="service_item_ issue_resiRegiCert" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">주민등록표등본(초본) 발급</a>';
/*     service_list_issue +=                '<a href="04_개방서비스_발급_건강보험자격득실확인서 발급.html" target="_self" class="service_item_ issue_healthInsurVer">건강보험자격득실확인서 발급</a>'; 
    service_list_issue +=                '<a href="04_개방서비스_발급_소득금액 증명원 발급.html" target="_self" class="service_item_ issue_incomeCert">소득금액 증명원 발급</a>'; 
    service_list_issue +=                '<a href="04_개방서비스_발급_주민등록표등본초본 발급.html" target="_self" class="service_item_ issue_resiRegiCert">주민등록표등본(초본) 발급</a>';  */
    service_list_issue +=             '</div>'; 
    service_list_issue +=        '</div>'; 
    service_list_issue +=      '</div>'; 
    service_list_issue +=      '<div class="wrap-slide-box">'; 
    service_list_issue +=        '<div class="swiper-button-prev"></div>'; 
    service_list_issue +=        '<div class="swiper-button-next"></div>';
    service_list_issue +=      '</div>'; 
    service_list_issue +=      '<div class="swiper-pagination"></div>'; 
    service_list_issue +=    '</div>'; 

    $(".article01 .service_list_issue").html(service_list_issue);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_issue_mob = "";
    service_list_issue_mob += '<div class="select_area">'; 
    service_list_issue_mob +=    '<!-- combo box -->'; 
    service_list_issue_mob +=    '<div class="combo_box_wrap">';  
    service_list_issue_mob +=       '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_issue_mob +=       '<select class="combo_box">'; 
/*     service_list_issue_mob +=        '<select onchange="if(this.value) location.href=(this.value);" class="combo_box">';  */
    service_list_issue_mob +=            '<option value="prepare_alertPop" class="service_option issue_healthInsurVer">건강보험자격득실확인서 발급</option>'; 
    service_list_issue_mob +=            '<option value="prepare_alertPop" class="service_option issue_incomeCert">소득금액 증명원 발급</option>'; 
    service_list_issue_mob +=            '<option value="prepare_alertPop" class="service_option issue_resiRegiCert">주민등록표등본(초본) 발급</option>'; 
  /*   service_list_issue_mob +=            '<option value="04_개방서비스_발급_건강보험자격득실확인서 발급.html" class="service_option issue_healthInsurVer">건강보험자격득실확인서 발급</option>'; 
    service_list_issue_mob +=            '<option value="04_개방서비스_발급_소득금액 증명원 발급.html" class="service_option issue_incomeCert">소득금액 증명원 발급</option>'; 
    service_list_issue_mob +=            '<option value="04_개방서비스_발급_주민등록표등본초본 발급.html" class="service_option issue_resiRegiCert">주민등록표등본(초본) 발급</option>';  */
    service_list_issue_mob +=        '</select>';   
    service_list_issue_mob +=      '</div>';   
    service_list_issue_mob +=    '</div>'; 

    $(".article01 .service_list_issue_mob").html(service_list_issue_mob);
});



/************************ 안전 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_security = "";
    service_list_security +=    '<div class="slide_box">'; 
    service_list_security +=      '<!-- slide -->'; 
    service_list_security +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_security +=        '<div class="service_list swiper-wrapper">'; 
    service_list_security +=            '<div class="swiper-slide">'; 
    service_list_security +=                '<a href="javascript:void(0);" target="_self" class="service_item_ security_noTeleSale" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">전화권유판매 수신거부 등록</a>'; 
    /* service_list_security +=                '<a href="04_개방서비스_안전_전화권유판매 수신거부 등록.html" target="_self" class="service_item_ security_noTeleSale">전화권유판매 수신거부 등록</a>';  */
    service_list_security +=             '</div>'; 
    service_list_security +=        '</div>'; 
    service_list_security +=      '</div>'; 
    service_list_security +=      '<div class="wrap-slide-box">'; 
    service_list_security +=        '<div class="swiper-button-prev"></div>'; 
    service_list_security +=        '<div class="swiper-button-next"></div>';
    service_list_security +=      '</div>'; 
    service_list_security +=      '<div class="swiper-pagination"></div>'; 
    service_list_security +=    '</div>'; 

    $(".article01 .service_list_security").html(service_list_security);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_security_mob = "";
    service_list_security_mob += '<div class="select_area">'; 
    service_list_security_mob +=    '<!-- combo box -->'; 
    service_list_security_mob +=    '<div class="combo_box_wrap">';  
    service_list_security_mob +=        '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_security_mob +=        '<select class="combo_box">'; 
/*     service_list_security_mob +=        '<select onchange="if(this.value) location.href=(this.value);" class="combo_box">';  */
    service_list_security_mob +=            '<option value="prepare_alertPop" class="service_option security_noTeleSale">전화권유판매 수신거부 등록</option>'; 
    /* service_list_security_mob +=            '<option value="04_개방서비스_안전_전화권유판매 수신거부 등록.html" class="service_option security_noTeleSale">전화권유판매 수신거부 등록</option>';  */
    service_list_security_mob +=        '</select>';   
    service_list_security_mob +=      '</div>';   
    service_list_security_mob +=    '</div>'; 

    $(".article01 .service_list_security_mob").html(service_list_security_mob);
});



/************************ 여행˙휴양 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_vacation = "";
    service_list_vacation +=    '<div class="slide_box">'; 
    service_list_vacation +=      '<!-- slide -->'; 
    service_list_vacation +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_vacation +=        '<div class="service_list swiper-wrapper">'; 
    service_list_vacation +=        '<div class="swiper-slide">'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_KTX승차권예매.html" target="_self" class="service_item_ vacation_korail">KTX 승차권 예매</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_SRT승차권 예매.html" target="_self" class="service_item_ vacation_srt">SRT 승차권 예매</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_국립생태원 예약.html" target="_self" class="service_item_ vacation_ntEcoResBook">국립생태원 예약</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_국립수목원 예약.html" target="_self" class="service_item_ vacation_ntArbor">국립수목원 예약</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_산림복지시설예약.html" target="_self" class="service_item_ vacation_sooperang">산림복지시설 예약</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_세종˙백두대간수목원 예약.html" target="_self" class="service_item_ vacation_sjbd">세종·백두대간 수목원 예약</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_여권재발급온라인신청.html" target="_self" class="service_item_ vacation_passportReissue">여권 재발급 온라인 신청</a>'; 
    service_list_vacation +=            '</div>'; 
    service_list_vacation +=            '<div class="swiper-slide">'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_인천공항 지도 서비스.html" target="_self" class="service_item_ vacation_hta">인천공항 지도 서비스</a>'; 
    service_list_vacation +=                '<a href="04_개방서비스_여행·휴양_휴양림 예약.html" target="_self" class="service_item_ vacation_forest">휴양림 예약</a>'; 
    service_list_vacation +=                '<a href="javascript:void(0);" target="_self" class="service_item_ vacation_lostReport" onclick="openPop(\'layer\', \'contents_alertPop\'); return false;">분실물 신고</a>'; 
    service_list_vacation +=            '</div>'; 
    service_list_vacation +=        '</div>'; 
    service_list_vacation +=      '</div>'; 
    service_list_vacation +=      '<div class="wrap-slide-box">'; 
    service_list_vacation +=        '<div class="swiper-button-prev"></div>'; 
    service_list_vacation +=        '<div class="swiper-button-next"></div>';
    service_list_vacation +=      '</div>'; 
    service_list_vacation +=      '<div class="swiper-pagination"></div>'; 
    service_list_vacation +=    '</div>'; 

    $(".article01 .service_list_vacation").html(service_list_vacation);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_vacation_mob = "";
    service_list_vacation_mob += '<div class="select_area">'; 
    service_list_vacation_mob +=    '<!-- combo box -->'; 
    service_list_vacation_mob +=    '<div class="combo_box_wrap">';  
    service_list_vacation_mob +=      '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_vacation_mob +=           '<select class="combo_box">'; 
/*     service_list_vacation_mob +=        '<select onchange="if(this.value) location.href=(this.value);" class="combo_box">';  */
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_KTX승차권예매.html" class="service_option vacation_korail">KTX 승차권 예매</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_SRT승차권 예매.html" class="service_option vacation_srt">SRT 승차권 예매</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_국립생태원 예약.html" class="service_option vacation_ntEcoResBook">국립생태원 예약</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_국립수목원 예약.html" class="service_option vacation_ntArbor">국립수목원 예약</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_산림복지시설예약.html" class="service_option vacation_sooperang">산림복지시설 예약</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_세종˙백두대간수목원 예약.html" class="service_option vacation_sjbd">세종·백두대간 수목원 예약</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_여권재발급온라인신청.html" class="service_option vacation_passportReissue">여권 재발급 온라인 신청</option>';
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_인천공항 지도 서비스.html" class="service_option vacation_hta">인천공항 지도 서비스</option>'; 
    service_list_vacation_mob +=               '<option value="04_개방서비스_여행·휴양_휴양림 예약.html" class="service_option vacation_forest">휴양림 예약</option>';  
    service_list_vacation_mob +=               '<option value="prepare_alertPop" class="service_option vacation_lostReport">분실물 신고</option>'; 
    service_list_vacation_mob +=           '</select>';   
    service_list_vacation_mob +=      '</div>';   
    service_list_vacation_mob +=    '</div>'; 

    $(".article01 .service_list_vacation_mob").html(service_list_vacation_mob);
});




/************************ 임신˙육아 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_parenting = "";
    service_list_parenting +=    '<div class="slide_box">'; 
    service_list_parenting +=      '<!-- slide -->'; 
    service_list_parenting +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_parenting +=        '<div class="service_list swiper-wrapper">'; 
    service_list_parenting +=            '<div class="swiper-slide">'; 
    service_list_parenting +=                '<a href="04_개방서비스_임신·육아_예방접종 내역 조회.html" target="_self" class="service_item_ parenting_vaccinRecord">예방접종 내역 조회</a>'; 
    service_list_parenting +=             '</div>'; 
    service_list_parenting +=        '</div>'; 
    service_list_parenting +=      '</div>'; 
    service_list_parenting +=      '<div class="wrap-slide-box">'; 
    service_list_parenting +=        '<div class="swiper-button-prev"></div>'; 
    service_list_parenting +=        '<div class="swiper-button-next"></div>';
    service_list_parenting +=      '</div>'; 
    service_list_parenting +=      '<div class="swiper-pagination"></div>'; 
    service_list_parenting +=    '</div>'; 

    $(".article01 .service_list_parenting").html(service_list_parenting);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_parenting_mob = "";
    service_list_parenting_mob += '<div class="select_area">'; 
    service_list_parenting_mob +=    '<!-- combo box -->'; 
    service_list_parenting_mob +=    '<div class="combo_box_wrap">';  
    service_list_parenting_mob +=        '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_parenting_mob +=        '<select onchange="if(this.value) location.href=(this.value);" class="combo_box">'; 
    service_list_parenting_mob +=            '<option value="04_개방서비스_임신·육아_예방접종 내역 조회.html" class="service_option parenting_vaccinRecord">예방접종 내역 조회</option>'; 
    service_list_parenting_mob +=        '</select>';   
    service_list_parenting_mob +=      '</div>';   
    service_list_parenting_mob +=    '</div>'; 

    $(".article01 .service_list_parenting_mob").html(service_list_parenting_mob);
});



/************************ 청년 *************************/
// pc 버전
$(document).ready(function () {

    var service_list_young = "";
    service_list_young +=    '<div class="slide_box">'; 
    service_list_young +=      '<!-- slide -->'; 
    service_list_young +=      '<div class="swiper slide_service swiper-container">'; 
    service_list_young +=        '<div class="service_list swiper-wrapper">'; 
    service_list_young +=            '<div class="swiper-slide">'; 
    service_list_young +=                '<a href="04_개방서비스_청년_동원훈련 일정조회.html" target="_self" class="service_item_ young_inqRsrvForceTrn">동원훈련 일정조회</a>'; 
    service_list_young +=                '<a href="04_개방서비스_청년_병역판정검사본인선택.html" target="_self" class="service_item_ young_applyMilSrvExam">병역판정검사 본인선택</a>'; 
    service_list_young +=                '<a href="04_개방서비스_청년_취업후상환학자금대출채무자신고.html" target="_self" class="service_item_ young_stdLoanDebtorRprt">취업 후 상환 학자금대출 채무자신고</a>'; 
    service_list_young +=             '</div>'; 
    service_list_young +=        '</div>'; 
    service_list_young +=      '</div>'; 
    service_list_young +=      '<div class="wrap-slide-box">'; 
    service_list_young +=        '<div class="swiper-button-prev"></div>'; 
    service_list_young +=        '<div class="swiper-button-next"></div>';
    service_list_young +=      '</div>'; 
    service_list_young +=      '<div class="swiper-pagination"></div>'; 
    service_list_young +=    '</div>'; 

    $(".article01 .service_list_young").html(service_list_young);
});

// 모바일 버전
$(document).ready(function () {

    var service_list_young_mob = "";
    service_list_young_mob += '<div class="select_area">'; 
    service_list_young_mob +=    '<!-- combo box -->'; 
    service_list_young_mob +=    '<div class="combo_box_wrap">';  
    service_list_young_mob +=        '<h3>개방서비스를 찾아보세요!</h3>'; 
    service_list_young_mob +=         '<select onchange="if(this.value) location.href=(this.value);" class="combo_box">'; 
    service_list_young_mob +=            '<option value="04_개방서비스_청년_동원훈련 일정조회.html" class="service_option young_inqRsrvForceTrn">동원훈련 일정조회</option>'; 
    service_list_young_mob +=            '<option value="04_개방서비스_청년_병역판정검사본인선택.html" class="service_option young_applyMilSrvExam">병역판정검사 본인선택</option>'; 
    service_list_young_mob +=            '<option value="04_개방서비스_청년_취업후상환학자금대출채무자신고.html" class="service_option young_stdLoanDebtorRprt">취업 후 상환 학자금대출 채무자신고</option>'; 
    service_list_young_mob +=        '</select>';   
    service_list_young_mob +=      '</div>';   
    service_list_young_mob +=    '</div>'; 

    $(".article01 .service_list_young_mob").html(service_list_young_mob);
});



/* 적용사례_서비스별 사례 상단 페이지 이동 */
$(document).ready(function () {

    var page_rep_case_list = "";
    page_rep_case_list +=   '<!-- 서비스별 선택 영역 PC 버전 -->'; 
    page_rep_case_list +=   '<div class="only_pc">'; 
    page_rep_case_list +=       '<ul class="wrap_select_link">'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_KTX승차권예매.html" target="_self" class="service_item item_korail" title="KTX 승차권 예매 서비스별 사례 소개 부분으로 이동">KTX 승차권 예매</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_SRT승차권 예매.html" target="_self" class="service_item item_srt" title="SRT 승차권 예매 서비스별 사례 소개 부분으로 이동">SRT 승차권 예매</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_국립수목원 예약.html" target="_self" class="service_item item_ntarboretum" title="국립수목원 예약 서비스별 사례 소개 부분으로 이동">국립수목원 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_세종·백두대간 수목원 예약.html" target="_self" class="service_item item_sjbdarboretum" title="세종·백두대간 수목원 예약 서비스별 사례 소개 부분으로 이동">세종·백두대간수목원 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_인천공항 지도 서비스.html" target="_self" class="service_item item_hta" title="인천공항 지도 서비스 서비스별 사례 소개 부분으로 이동">인천공항 지도 서비스</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_자동차 검사 예약.html" target="_self" class="service_item item_carcheck" title="자동차 검사 예약 서비스별 사례 소개 부분으로 이동">자동차 검사 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_휴양림 예약.html" target="_self" class="service_item item_forest" title="휴양림 예약 서비스별 사례 소개 부분으로 이동">휴양림 예약</a></li>'; 
    page_rep_case_list +=       '</ul>'; 
    page_rep_case_list +=   '</div>'; 
    page_rep_case_list +=   '<!-- 서비스별 선택 콤보 박스 모바일 버전 -->';  
    page_rep_case_list +=   '<div class="only_mob">'; 
    page_rep_case_list +=       '<div class="combo_box_wrap">'; 
    page_rep_case_list +=           '<h3>서비스별 사례를 찾아보세요!</h3>'; 
    page_rep_case_list +=               '<select onchange="if(this.value) location.href=(this.value);" id="select_case" class="combo_box">'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_KTX승차권예매.html" class="service_option">KTX 승차권 예매</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_SRT승차권 예매.html" class="service_option">SRT 승차권 예매</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_국립수목원 예약.html" class="service_option">국립수목원 예약</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_세종·백두대간 수목원 예약.html" class="service_option">세종·백두대간수목원 예약</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_인천공항 지도 서비스.html" class="service_option">인천공항 지도 서비스</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_자동차 검사 예약.html" class="service_option">자동차 검사 예약</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_휴양림 예약.html" class="service_option">휴양림 예약</option>';     
    page_rep_case_list +=               '</select>';     
    page_rep_case_list +=       '</div>'; 
    page_rep_case_list +=   '</div>'; 

    $(".article02 .page_rep_case_list").html(page_rep_case_list);
});



$(document).ready(function() {
    $('.combo_box').on('change', function() {
        var selectedOption = $(this).find('option:selected');

        if (selectedOption.val() === 'prepare_alertPop') {
            // 모달 창을 띄우는 코드를 여기에 작성하세요.
            openPop('layer', 'contents_alertPop');  
/*             alert('모달 창을 띄웁니다.'); */
        } else {
            // 다른 HTML 페이지로 이동하는 코드를 여기에 작성하세요.
            window.location.href = selectedOption.val();
        }
    });
});

