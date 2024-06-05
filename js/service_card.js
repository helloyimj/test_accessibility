/************************************* 개별 서비스 카드 *************************************/

/* KB국민은행 */

// SRT 승차권 예매
$(document).ready(function () {

    var kbStar_srt = "";
    kbStar_srt +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_srt +=        '<h4 class="title_article title_upperline">SRT 승차권 예매</h4>'; 
    kbStar_srt +=        '<div class="case_item_inner">'; 
    kbStar_srt +=            '<div class="wrap_img">'; 
    kbStar_srt +=                '<img src="../img/screenshot/srt_kbstarbanking.PNG" alt="KB스타뱅킹 앱의 SRT 승차권을 예매하는 스크린샷입니다." class="viewer"/>'; 
    kbStar_srt +=            '</div>'; 
    kbStar_srt +=            '<div class="name">'; 
    kbStar_srt +=                '<div class="wrap_logo">'; 
    kbStar_srt +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_srt +=                '</div>';    
    kbStar_srt +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_srt +=                '<p>국민지갑 > 기차예매</p>';    
    kbStar_srt +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_srt_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_srt +=                '<h5>SRT로 전국 방방곡곡</h5>';    
    kbStar_srt +=            '</div>'; 
    kbStar_srt +=        '</div>'; 
    kbStar_srt +=        '<div class="case_item_bottom">';
    kbStar_srt +=            '<h5>서비스 이용해보기</h5>';
    kbStar_srt +=            '<ul class="link_service_list">';
    kbStar_srt +=                '<li class="link_service_item">';
    kbStar_srt +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_srt +=                '</li>'; 
    kbStar_srt +=                '<li class="link_service_item">';
    kbStar_srt +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_srt +=                '</li>'; 
    kbStar_srt +=            '</ul>'; 
    kbStar_srt +=        '</div>'; 
    kbStar_srt +=    '</div>'; 

    $(".case_card.kbStar_srt").html(kbStar_srt);
});

// 인천공항 지도 서비스
$(document).ready(function () {

    var kbStar_hta = "";
    kbStar_hta +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_hta +=        '<h4 class="title_article title_upperline">인천공항 지도 서비스</h4>'; 
    kbStar_hta +=        '<div class="case_item_inner">'; 
    kbStar_hta +=            '<div class="wrap_img">'; 
    kbStar_hta +=                '<img src="../img/screenshot/hta_kbstarbanking.PNG" alt="KB스타뱅킹 앱의 공항 패스트 인천공항 메뉴에서 주차장부터 비행기 탑승구까지의 최단 거리의 경로를 확인하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbStar_hta +=            '</div>'; 
    kbStar_hta +=            '<div class="name">'; 
    kbStar_hta +=                '<div class="wrap_logo">'; 
    kbStar_hta +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_hta +=                '</div>';    
    kbStar_hta +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_hta +=                '<p>국민지갑 > 패스트인천공항</p>';    
    kbStar_hta +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_hta_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_hta +=                '<h5>출발부터 탑승구까지 빠른길 확인</h5>';    
    kbStar_hta +=            '</div>'; 
    kbStar_hta +=        '</div>'; 
    kbStar_hta +=        '<div class="case_item_bottom">';
    kbStar_hta +=            '<h5>서비스 이용해보기</h5>';
    kbStar_hta +=            '<ul class="link_service_list">';
    kbStar_hta +=                '<li class="link_service_item">';
    kbStar_hta +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_hta +=                '</li>'; 
    kbStar_hta +=                '<li class="link_service_item">';
    kbStar_hta +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_hta +=                '</li>'; 
    kbStar_hta +=            '</ul>'; 
    kbStar_hta +=        '</div>'; 
    kbStar_hta +=    '</div>'; 

    $(".case_card.kbStar_hta").html(kbStar_hta);
});

// 국립수목원 예약
$(document).ready(function () {

    var kbStar_ntArbor = "";
    kbStar_ntArbor +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_ntArbor +=        '<h4 class="title_article title_upperline">국립수목원 예약</h4>'; 
    kbStar_ntArbor +=        '<div class="case_item_inner">'; 
    kbStar_ntArbor +=            '<div class="wrap_img">'; 
    kbStar_ntArbor +=                '<img src="../img/screenshot/ntarboretum_kbstarbanking.PNG" alt="KB스타뱅킹 앱에서 국립수목원 이용을 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbStar_ntArbor +=            '</div>'; 
    kbStar_ntArbor +=            '<div class="name">'; 
    kbStar_ntArbor +=                '<div class="wrap_logo">'; 
    kbStar_ntArbor +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_ntArbor +=                '</div>';    
    kbStar_ntArbor +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_ntArbor +=                '<p>국민지갑 > 수목원 예약</p>';    
    kbStar_ntArbor +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_ntArbor_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_ntArbor +=                '<h5>자연과 함께 하는 일상 속 쉼표</h5>';    
    kbStar_ntArbor +=            '</div>'; 
    kbStar_ntArbor +=        '</div>'; 
    kbStar_ntArbor +=        '<div class="case_item_bottom">';
    kbStar_ntArbor +=            '<h5>서비스 이용해보기</h5>';
    kbStar_ntArbor +=            '<ul class="link_service_list">';
    kbStar_ntArbor +=                '<li class="link_service_item">';
    kbStar_ntArbor +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_ntArbor +=                '</li>'; 
    kbStar_ntArbor +=                '<li class="link_service_item">';
    kbStar_ntArbor +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_ntArbor +=                '</li>'; 
    kbStar_ntArbor +=            '</ul>'; 
    kbStar_ntArbor +=        '</div>'; 
    kbStar_ntArbor +=    '</div>'; 

    $(".case_card.kbStar_ntArbor").html(kbStar_ntArbor);
});

// 세종·백두대간 수목원 예약
$(document).ready(function () {

    var kbStar_sjbdarboretum = "";
    kbStar_sjbdarboretum +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_sjbdarboretum +=        '<h4 class="title_article title_upperline">세종·백두대간수목원 예약</h4>'; 
    kbStar_sjbdarboretum +=        '<div class="case_item_inner">'; 
    kbStar_sjbdarboretum +=            '<div class="wrap_img">'; 
    kbStar_sjbdarboretum +=                '<img src="../img/screenshot/sjbdarboretum_kbstarbanking.PNG" alt="KB스타뱅킹 앱에서 국립백두대간수목원 이용을 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbStar_sjbdarboretum +=            '</div>'; 
    kbStar_sjbdarboretum +=            '<div class="name">'; 
    kbStar_sjbdarboretum +=                '<div class="wrap_logo">'; 
    kbStar_sjbdarboretum +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_sjbdarboretum +=                '</div>';    
    kbStar_sjbdarboretum +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_sjbdarboretum +=                 '<p>국민지갑 > 수목원 예약</p>';   
    kbStar_sjbdarboretum +=                 '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_sjbdarboretum_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_sjbdarboretum +=                 '<h5>자연과 함께 하는 일상 속 쉼표</h5>';     
    kbStar_sjbdarboretum +=            '</div>'; 
    kbStar_sjbdarboretum +=        '</div>'; 
    kbStar_sjbdarboretum +=        '<div class="case_item_bottom">';
    kbStar_sjbdarboretum +=            '<h5>서비스 이용해보기</h5>';
    kbStar_sjbdarboretum +=            '<ul class="link_service_list">';
    kbStar_sjbdarboretum +=                '<li class="link_service_item">';
    kbStar_sjbdarboretum +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_sjbdarboretum +=                '</li>'; 
    kbStar_sjbdarboretum +=                '<li class="link_service_item">';
    kbStar_sjbdarboretum +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_sjbdarboretum +=                '</li>'; 
    kbStar_sjbdarboretum +=            '</ul>'; 
    kbStar_sjbdarboretum +=        '</div>'; 
    kbStar_sjbdarboretum +=    '</div>'; 

    $(".case_card.kbStar_sjbdarboretum").html(kbStar_sjbdarboretum);
});

// 자동차 검사 예약
$(document).ready(function () {

    var kbStar_carcheck = "";
    kbStar_carcheck +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_carcheck +=        '<h4 class="title_article title_upperline">자동차 검사 예약</h4>'; 
    kbStar_carcheck +=        '<div class="case_item_inner">'; 
    kbStar_carcheck +=            '<div class="wrap_img">'; 
    kbStar_carcheck +=                '<img src="../img/screenshot/carcheck_kbstarbanking.PNG" alt="KB스타뱅킹 앱에서 자동차 검사를 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbStar_carcheck +=            '</div>'; 
    kbStar_carcheck +=            '<div class="name">'; 
    kbStar_carcheck +=                '<div class="wrap_logo">'; 
    kbStar_carcheck +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_carcheck +=                '</div>';    
    kbStar_carcheck +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_carcheck +=                '<p>국민지갑 > 내 차 등록증</p>';    
    kbStar_carcheck +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_carcheck_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_carcheck +=                '<h5>자동차 검사 예약을 간단하게</h5>';    
    kbStar_carcheck +=            '</div>'; 
    kbStar_carcheck +=        '</div>'; 
    kbStar_carcheck +=        '<div class="case_item_bottom">';
    kbStar_carcheck +=            '<h5>서비스 이용해보기</h5>';
    kbStar_carcheck +=            '<ul class="link_service_list">';
    kbStar_carcheck +=                '<li class="link_service_item">';
    kbStar_carcheck +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_carcheck +=                '</li>'; 
    kbStar_carcheck +=                '<li class="link_service_item">';
    kbStar_carcheck +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_carcheck +=                '</li>'; 
    kbStar_carcheck +=            '</ul>'; 
    kbStar_carcheck +=        '</div>'; 
    kbStar_carcheck +=    '</div>'; 

    $(".case_card.kbStar_carcheck").html(kbStar_carcheck);
});

// KTX 승차권 예매
$(document).ready(function () {

    var kbStar_korail = "";
    kbStar_korail +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_korail +=        '<h4 class="title_article title_upperline">KTX 승차권 예매</h4>'; 
    kbStar_korail +=        '<div class="case_item_inner">'; 
    kbStar_korail +=            '<div class="wrap_img">'; 
    kbStar_korail +=                '<img src="../img/screenshot/korail_kbstarbanking.PNG" alt="KB스타뱅킹 앱의 코레일 열차를 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbStar_korail +=            '</div>'; 
    kbStar_korail +=            '<div class="name">'; 
    kbStar_korail +=                '<div class="wrap_logo">'; 
    kbStar_korail +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_korail +=                '</div>';    
    kbStar_korail +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_korail +=                '<p>국민지갑 > 기차예매</p>';    
    kbStar_korail +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_korail_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_korail +=                '<h5>코레일 승차권 예매를 간편하게</h5>';    
    kbStar_korail +=            '</div>'; 
    kbStar_korail +=        '</div>'; 
    kbStar_korail +=        '<div class="case_item_bottom">';
    kbStar_korail +=            '<h5>서비스 이용해보기</h5>';
    kbStar_korail +=            '<ul class="link_service_list">';
    kbStar_korail +=                '<li class="link_service_item">';
    kbStar_korail +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_korail +=                '</li>'; 
    kbStar_korail +=                '<li class="link_service_item">';
    kbStar_korail +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_korail +=                '</li>'; 
    kbStar_korail +=            '</ul>'; 
    kbStar_korail +=        '</div>'; 
    kbStar_korail +=    '</div>'; 

    $(".case_card.kbStar_korail").html(kbStar_korail);
});

// 휴양림 예약
$(document).ready(function () {

    var kbStar_forest = "";
    kbStar_forest +=    '<div class="case_item_info slide_case_item">'; 
    kbStar_forest +=        '<h4 class="title_article title_upperline">휴양림 예약</h4>'; 
    kbStar_forest +=        '<div class="case_item_inner">'; 
    kbStar_forest +=            '<div class="wrap_img">'; 
    kbStar_forest +=                '<img src="../img/screenshot/forest_kbstarbanking.PNG" alt="KB스타뱅킹 앱의 휴양림 이용을 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbStar_forest +=            '</div>'; 
    kbStar_forest +=            '<div class="name">'; 
    kbStar_forest +=                '<div class="wrap_logo">'; 
    kbStar_forest +=                    '<img src="../img/app_logo/app_kbstarbank.png" alt="KB스타뱅킹 앱 로고" />'; 
    kbStar_forest +=                '</div>';    
    kbStar_forest +=                '<h4>KB스타뱅킹</h4>';    
    kbStar_forest +=                '<p>국민지갑 > 휴양림 예약</p>';    
    kbStar_forest +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_forest_kbstarbanking\'); return false;">자세히 보기</button>';    
    kbStar_forest +=                '<h5>숲속에서 산책하며 힐링을</h5>';    
    kbStar_forest +=            '</div>'; 
    kbStar_forest +=        '</div>'; 
    kbStar_forest +=        '<div class="case_item_bottom">';
    kbStar_forest +=            '<h5>서비스 이용해보기</h5>';
    kbStar_forest +=            '<ul class="link_service_list">';
    kbStar_forest +=                '<li class="link_service_item">';
    kbStar_forest +=                    '<a href="https://apps.apple.com/kr/app/kb%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB스타뱅킹 페이지로 외부 이동">iOS</a>';    
    kbStar_forest +=                '</li>'; 
    kbStar_forest +=                '<li class="link_service_item">';
    kbStar_forest +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB스타뱅킹 페이지로 외부 이동">Android</a>';    
    kbStar_forest +=                '</li>'; 
    kbStar_forest +=            '</ul>'; 
    kbStar_forest +=        '</div>'; 
    kbStar_forest +=    '</div>'; 

    $(".case_card.kbStar_forest").html(kbStar_forest);
});





/* KB카드 */
// 국립수목원 예약
$(document).ready(function () {

    var kbCard_ntArbor = "";
    kbCard_ntArbor +=    '<div class="case_item_info slide_case_item">'; 
    kbCard_ntArbor +=        '<h4 class="title_article title_upperline">국립수목원 예약</h4>'; 
    kbCard_ntArbor +=        '<div class="case_item_inner">'; 
    kbCard_ntArbor +=            '<div class="wrap_img">'; 
    kbCard_ntArbor +=                '<img src="../img/screenshot/ntarboretum_kbpay.PNG" alt="KB Pay 앱에서 국립수목원 이용을 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbCard_ntArbor +=            '</div>'; 
    kbCard_ntArbor +=            '<div class="name">'; 
    kbCard_ntArbor +=                '<div class="wrap_logo">'; 
    kbCard_ntArbor +=                    '<img src="../img/app_logo/app_kbpay.png" alt="KB Pay 앱 로고" />'; 
    kbCard_ntArbor +=                '</div>';    
    kbCard_ntArbor +=                '<h4>KB PAY</h4>';    
    kbCard_ntArbor +=                '<p>편의기능 > 국립수목원 예약 서비스</p>';    
    kbCard_ntArbor +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_ntArbor_kbpay\'); return false;">자세히 보기</button>';    
    kbCard_ntArbor +=                '<h5>국립수목원 예약도 KB페이로</h5>';    
    kbCard_ntArbor +=            '</div>'; 
    kbCard_ntArbor +=        '</div>'; 
    kbCard_ntArbor +=        '<div class="case_item_bottom">';
    kbCard_ntArbor +=            '<h5>서비스 이용해보기</h5>';
    kbCard_ntArbor +=            '<ul class="link_service_list">';
    kbCard_ntArbor +=                '<li class="link_service_item">';
    kbCard_ntArbor +=                    '<a href="https://apps.apple.com/kr/app/kb-pay/id695436326" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB Pay 페이지로 외부 이동">iOS</a>';    
    kbCard_ntArbor +=                '</li>'; 
    kbCard_ntArbor +=                '<li class="link_service_item">';
    kbCard_ntArbor +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbcard.cxh.appcard&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB Pay 페이지로 외부 이동">Android</a>';    
    kbCard_ntArbor +=                '</li>'; 
    kbCard_ntArbor +=            '</ul>'; 
    kbCard_ntArbor +=        '</div>'; 
    kbCard_ntArbor +=    '</div>'; 

    $(".case_card.kbCard_ntArbor").html(kbCard_ntArbor);
});

// 세종·백두대간 수목원 예약
$(document).ready(function () {

    var kbCard_sjbdarboretum = "";
    kbCard_sjbdarboretum +=    '<div class="case_item_info slide_case_item">'; 
    kbCard_sjbdarboretum +=        '<h4 class="title_article title_upperline">세종·백두대간수목원 예약</h4>'; 
    kbCard_sjbdarboretum +=        '<div class="case_item_inner">'; 
    kbCard_sjbdarboretum +=            '<div class="wrap_img">'; 
    kbCard_sjbdarboretum +=                '<img src="../img/screenshot/sjbdarboretum_kbpay.PNG" alt="KB Pay 앱에서 국립백두대간수목원 이용을 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kbCard_sjbdarboretum +=            '</div>'; 
    kbCard_sjbdarboretum +=            '<div class="name">'; 
    kbCard_sjbdarboretum +=                '<div class="wrap_logo">'; 
    kbCard_sjbdarboretum +=                    '<img src="../img/app_logo/app_kbpay.png" alt="KB Pay 앱 로고" />'; 
    kbCard_sjbdarboretum +=                '</div>';    
    kbCard_sjbdarboretum +=                '<h4>KB PAY</h4>';    
    kbCard_sjbdarboretum +=                '<p>편의기능 > 국립수목원 예약 서비스</p>';    
    kbCard_sjbdarboretum +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_sjbdarboretum_kbpay\'); return false;">자세히 보기</button>';    
    kbCard_sjbdarboretum +=                '<h5>세종·백두대간수목원 예약도 KB페이로</h5>';    
    kbCard_sjbdarboretum +=            '</div>'; 
    kbCard_sjbdarboretum +=        '</div>'; 
    kbCard_sjbdarboretum +=        '<div class="case_item_bottom">';
    kbCard_sjbdarboretum +=            '<h5>서비스 이용해보기</h5>';
    kbCard_sjbdarboretum +=            '<ul class="link_service_list">';
    kbCard_sjbdarboretum +=                '<li class="link_service_item">';
    kbCard_sjbdarboretum +=                    '<a href="https://apps.apple.com/kr/app/kb-pay/id695436326" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 KB Pay 페이지로 외부 이동">iOS</a>';    
    kbCard_sjbdarboretum +=                '</li>'; 
    kbCard_sjbdarboretum +=                '<li class="link_service_item">';
    kbCard_sjbdarboretum +=                    '<a href="https://play.google.com/store/apps/details?id=com.kbcard.cxh.appcard&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 KB Pay 페이지로 외부 이동">Android</a>';    
    kbCard_sjbdarboretum +=                '</li>'; 
    kbCard_sjbdarboretum +=            '</ul>'; 
    kbCard_sjbdarboretum +=        '</div>'; 
    kbCard_sjbdarboretum +=    '</div>'; 

    $(".case_card.kbCard_sjbdarboretum").html(kbCard_sjbdarboretum);
});





/* 네이버 주식회사 */
// SRT 승차권 예매
$(document).ready(function () {

    var naverCorp_srt = "";
    naverCorp_srt +=    '<div class="case_item_info slide_case_item">'; 
    naverCorp_srt +=        '<h4 class="title_article title_upperline">SRT 승차권 예매</h4>'; 
    naverCorp_srt +=        '<div class="case_item_inner">'; 
    naverCorp_srt +=            '<div class="wrap_img">'; 
    naverCorp_srt +=                '<img src="../img/screenshot/srt_navermap.png" alt="네이버 지도 앱의 SRT 승차권을 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    naverCorp_srt +=            '</div>'; 
    naverCorp_srt +=            '<div class="name">'; 
    naverCorp_srt +=                '<div class="wrap_logo">'; 
    naverCorp_srt +=                    '<img src="../img/app_logo/app_navermap.png" alt="네이버 지도 앱 로고" />'; 
    naverCorp_srt +=                '</div>';    
    naverCorp_srt +=                '<h4>네이버 지도</h4>';    
    naverCorp_srt +=                '<p>목적지 검색 / 기차 조회·예매</p>';    
    naverCorp_srt +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_srt_navermap\'); return false;">자세히 보기</button>';    
    naverCorp_srt +=                '<h5>길찾기부터 SRT 예매까지 한 번에</h5>';    
    naverCorp_srt +=            '</div>'; 
    naverCorp_srt +=        '</div>'; 
    naverCorp_srt +=        '<div class="case_item_bottom">';
    naverCorp_srt +=            '<h5>서비스 이용해보기</h5>';
    naverCorp_srt +=            '<ul class="link_service_list">';
    naverCorp_srt +=                '<li class="link_service_item">';
    naverCorp_srt +=                    '<a href="https://map.naver.com/" target="_blank" class="link_service_anchor" title="새 창 열림- 네이버 지도 웹사이트로 외부 이동">WEB</a>';    
    naverCorp_srt +=                '</li>'; 
    naverCorp_srt +=                '<li class="link_service_item">';
    naverCorp_srt +=                    '<a href="https://apps.apple.com/kr/app/naver-map-navigation/id311867728" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 네이버 지도 페이지로 외부 이동">iOS</a>';    
    naverCorp_srt +=                '</li>'; 
    naverCorp_srt +=                '<li class="link_service_item">';
    naverCorp_srt +=                    '<a href="https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 네이버 지도 페이지로 외부 이동">Android</a>';    
    naverCorp_srt +=                '</li>'; 
    naverCorp_srt +=            '</ul>'; 
    naverCorp_srt +=        '</div>'; 
    naverCorp_srt +=    '</div>'; 

    $(".case_card.naverCorp_srt").html(naverCorp_srt);
});

// 국립수목원 예약
$(document).ready(function () {

    var naverCorp_ntArbor = "";
    naverCorp_ntArbor +=    '<div class="case_item_info slide_case_item">'; 
    naverCorp_ntArbor +=        '<h4 class="title_article title_upperline">국립수목원 예약</h4>'; 
    naverCorp_ntArbor +=        '<div class="case_item_inner">'; 
    naverCorp_ntArbor +=            '<div class="wrap_img">'; 
    naverCorp_ntArbor +=                '<img src="../img/screenshot/ntarboretum_naverbook.PNG" alt="네이버 예약과 연동된 네이버 지도 앱의 국립수목원의 주차장 이용을 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    naverCorp_ntArbor +=            '</div>'; 
    naverCorp_ntArbor +=            '<div class="name">'; 
    naverCorp_ntArbor +=                '<p class="comment_text">네이버 예약이 연동된 곳에서 예약 가능</p>';  
    naverCorp_ntArbor +=                '<div class="img_several">'; 
    naverCorp_ntArbor +=                     '<div class="wrap_logo">'; 
    naverCorp_ntArbor +=                         '<img src="../img/app_logo/app_naver.png" alt="네이버 앱 로고" />'; 
    naverCorp_ntArbor +=                     '</div>';    
    naverCorp_ntArbor +=                     '<div class="wrap_logo">'; 
    naverCorp_ntArbor +=                         '<img src="../img/app_logo/app_navermap.png" alt="네이버 지도 앱 로고" />'; 
    naverCorp_ntArbor +=                     '</div>';    
    naverCorp_ntArbor +=                '</div>';    
    naverCorp_ntArbor +=                '<h4>네이버 예약</h4>';    
    naverCorp_ntArbor +=                '<p>‘국립수목원’으로 검색 </p>';    
    naverCorp_ntArbor +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_ntArbor_naverbook\'); return false;">자세히 보기</button>';    
    naverCorp_ntArbor +=                '<h5>국립수목원 예약을<br />네이버 예약에서</h5>';    
    naverCorp_ntArbor +=            '</div>'; 
    naverCorp_ntArbor +=        '</div>'; 
    naverCorp_ntArbor +=        '<div class="case_item_bottom">';
    naverCorp_ntArbor +=            '<h5>서비스 이용해보기</h5>';
    naverCorp_ntArbor +=            '<ul class="link_service_list">';
    naverCorp_ntArbor +=                '<li class="link_service_item">';
    naverCorp_ntArbor +=                    '<a href="https://map.naver.com/" target="_blank" class="link_service_anchor" title="새 창 열림- 네이버 지도 웹사이트로 외부 이동">WEB</a>';    
    naverCorp_ntArbor +=                '</li>'; 
    naverCorp_ntArbor +=                '<li class="link_service_item">';
    naverCorp_ntArbor +=                    '<a href="https://apps.apple.com/kr/app/naver-map-navigation/id311867728" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 네이버 지도 페이지로 외부 이동">iOS</a>';    
    naverCorp_ntArbor +=                '</li>'; 
    naverCorp_ntArbor +=                '<li class="link_service_item">';
    naverCorp_ntArbor +=                    '<a href="https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 네이버 지도 페이지로 외부 이동">Android</a>';    
    naverCorp_ntArbor +=                '</li>'; 
    naverCorp_ntArbor +=            '</ul>'; 
    naverCorp_ntArbor +=        '</div>'; 
    naverCorp_ntArbor +=    '</div>'; 

    $(".case_card.naverCorp_ntArbor").html(naverCorp_ntArbor);
});

// 자동차검사 예약
$(document).ready(function () {

    var naverCorp_carcheck = "";
    naverCorp_carcheck +=    '<div class="case_item_info slide_case_item">'; 
    naverCorp_carcheck +=        '<h4 class="title_article title_upperline">자동차검사 예약</h4>'; 
    naverCorp_carcheck +=        '<div class="case_item_inner">'; 
    naverCorp_carcheck +=            '<div class="wrap_img">'; 
    naverCorp_carcheck +=                '<img src="../img/screenshot/carcheck_naverbook.PNG" alt="네이버 예약과 연동된 네이버 지도 앱의 자동차 검사소에서 자동차 검사를 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    naverCorp_carcheck +=            '</div>'; 
    naverCorp_carcheck +=            '<div class="name">'; 
    naverCorp_carcheck +=                '<p class="comment_text">네이버 예약이 연동된 곳에서 예약 가능</p>';  
    naverCorp_carcheck +=                '<div class="img_several">'; 
    naverCorp_carcheck +=                     '<div class="wrap_logo">'; 
    naverCorp_carcheck +=                         '<img src="../img/app_logo/app_naver.png" alt="네이버 앱 로고" />'; 
    naverCorp_carcheck +=                     '</div>';    
    naverCorp_carcheck +=                     '<div class="wrap_logo">'; 
    naverCorp_carcheck +=                         '<img src="../img/app_logo/app_navermap.png" alt="네이버 지도 앱 로고" />'; 
    naverCorp_carcheck +=                     '</div>';    
    naverCorp_carcheck +=                '</div>';    
    naverCorp_carcheck +=                '<h4>네이버 예약</h4>';    
    naverCorp_carcheck +=                '<p>‘한국교통안전공단 자동차검사’로 검색</p>';    
    naverCorp_carcheck +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_carcheck_naverbook\'); return false;">자세히 보기</button>';    
    naverCorp_carcheck +=                '<h5>자동차검사 예약도 네이버에서</h5>';    
    naverCorp_carcheck +=            '</div>'; 
    naverCorp_carcheck +=        '</div>'; 
    naverCorp_carcheck +=        '<div class="case_item_bottom">';
    naverCorp_carcheck +=            '<h5>서비스 이용해보기</h5>';
    naverCorp_carcheck +=            '<ul class="link_service_list">';
    naverCorp_carcheck +=                '<li class="link_service_item">';
    naverCorp_carcheck +=                    '<a href="https://map.naver.com/" target="_blank" class="link_service_anchor" title="새 창 열림- 네이버 지도 웹사이트로 외부 이동">WEB</a>';    
    naverCorp_carcheck +=                '</li>'; 
    naverCorp_carcheck +=                '<li class="link_service_item">';
    naverCorp_carcheck +=                    '<a href="https://apps.apple.com/kr/app/naver-map-navigation/id311867728" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 네이버 지도 페이지로 외부 이동">iOS</a>';    
    naverCorp_carcheck +=                '</li>'; 
    naverCorp_carcheck +=                '<li class="link_service_item">';
    naverCorp_carcheck +=                    '<a href="https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 네이버 지도 페이지로 외부 이동">Android</a>';    
    naverCorp_carcheck +=                '</li>'; 
    naverCorp_carcheck +=            '</ul>'; 
    naverCorp_carcheck +=        '</div>'; 
    naverCorp_carcheck +=    '</div>'; 

    $(".case_card.naverCorp_carcheck").html(naverCorp_carcheck);
});

// KTX 승차권 예매
$(document).ready(function () {

    var naverCorp_korail = "";
    naverCorp_korail +=    '<div class="case_item_info slide_case_item">'; 
    naverCorp_korail +=        '<h4 class="title_article title_upperline">KTX 승차권 예매</h4>'; 
    naverCorp_korail +=        '<div class="case_item_inner">'; 
    naverCorp_korail +=            '<div class="wrap_img">'; 
    naverCorp_korail +=                '<img src="../img/screenshot/korail_navermap.PNG" alt="네이버 지도 앱의 코레일 열차를 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    naverCorp_korail +=            '</div>'; 
    naverCorp_korail +=            '<div class="name">'; 
    naverCorp_korail +=                '<div class="wrap_logo">'; 
    naverCorp_korail +=                    '<img src="../img/app_logo/app_navermap.png" alt="네이버 지도 앱 로고" />'; 
    naverCorp_korail +=                '</div>';    
    naverCorp_korail +=                '<h4>네이버 지도</h4>';    
    naverCorp_korail +=                '<p>목적지 검색 / 기차 조회·예매</p>';    
    naverCorp_korail +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_korail_navermap\'); return false;">자세히 보기</button>';    
    naverCorp_korail +=                '<h5>네이버에서 모든 코레일 승차권 예매를</h5>';    
    naverCorp_korail +=            '</div>'; 
    naverCorp_korail +=        '</div>'; 
    naverCorp_korail +=        '<div class="case_item_bottom">';
    naverCorp_korail +=            '<h5>서비스 이용해보기</h5>';
    naverCorp_korail +=            '<ul class="link_service_list">';
    naverCorp_korail +=                '<li class="link_service_item">';
    naverCorp_korail +=                    '<a href="https://map.naver.com/" target="_blank" class="link_service_anchor" title="새 창 열림- 네이버 지도 웹사이트로 외부 이동">WEB</a>';    
    naverCorp_korail +=                '</li>'; 
    naverCorp_korail +=                '<li class="link_service_item">';
    naverCorp_korail +=                    '<a href="https://apps.apple.com/kr/app/naver-map-navigation/id311867728" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 네이버 지도 페이지로 외부 이동">iOS</a>';    
    naverCorp_korail +=                '</li>'; 
    naverCorp_korail +=                '<li class="link_service_item">';
    naverCorp_korail +=                    '<a href="https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 네이버 지도 페이지로 외부 이동">Android</a>';    
    naverCorp_korail +=                '</li>'; 
    naverCorp_korail +=            '</ul>'; 
    naverCorp_korail +=        '</div>'; 
    naverCorp_korail +=    '</div>'; 

    $(".case_card.naverCorp_korail").html(naverCorp_korail);
});

// 문화누리카드 이용
$(document).ready(function () {

    var naverCorp_mnuriApi = "";
    naverCorp_mnuriApi +=    '<div class="case_item_info slide_case_item">'; 
    naverCorp_mnuriApi +=        '<h4 class="title_article title_upperline">문화누리카드 이용</h4>'; 
    naverCorp_mnuriApi +=        '<div class="case_item_inner">'; 
    naverCorp_mnuriApi +=            '<div class="wrap_img">'; 
    naverCorp_mnuriApi +=                '<img src="../img/screenshot/mnuriApi_naverPay.PNG" alt="네이버 페이 앱의 문화누리카드 결제 화면의 스크린샷입니다." class="viewer"/>'; 
    naverCorp_mnuriApi +=            '</div>'; 
    naverCorp_mnuriApi +=            '<div class="name">'; 
    naverCorp_mnuriApi +=                '<div class="wrap_logo">'; 
    naverCorp_mnuriApi +=                    '<img src="../img/app_logo/app_naverpay.png" alt="네이버 페이 앱 로고" />'; 
    naverCorp_mnuriApi +=                '</div>';    
    naverCorp_mnuriApi +=                '<h4>네이버 페이</h4>';    
    naverCorp_mnuriApi +=                '<p>현장 결제 / 온라인 결제</p>';    
    naverCorp_mnuriApi +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_mnuriApi_naverPay\'); return false;">자세히 보기</button>';    
    naverCorp_mnuriApi +=                '<h5>네이버 페이에서 문화누리카드 이용을</h5>';    
    naverCorp_mnuriApi +=            '</div>'; 
    naverCorp_mnuriApi +=        '</div>'; 
    naverCorp_mnuriApi +=        '<div class="case_item_bottom">';
    naverCorp_mnuriApi +=            '<h5>서비스 이용해보기</h5>';
    naverCorp_mnuriApi +=            '<ul class="link_service_list">';
    naverCorp_mnuriApi +=                '<li class="link_service_item">';
    naverCorp_mnuriApi +=                    '<a href="https://new-m.pay.naver.com/" target="_blank" class="link_service_anchor" title="새 창 열림- 네이버 페이 웹사이트로 외부 이동">WEB</a>';    
    naverCorp_mnuriApi +=                '</li>'; 
    naverCorp_mnuriApi +=                '<li class="link_service_item">';
    naverCorp_mnuriApi +=                    '<a href="https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%B4%EB%B2%84%ED%8E%98%EC%9D%B4/id1554807824" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 네이버 페이 페이지로 외부 이동">iOS</a>';    
    naverCorp_mnuriApi +=                '</li>'; 
    naverCorp_mnuriApi +=                '<li class="link_service_item">';
    naverCorp_mnuriApi +=                    '<a href="https://play.google.com/store/apps/details?id=com.naverfin.payapp&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 네이버 페이 페이지로 외부 이동">Android</a>';    
    naverCorp_mnuriApi +=                '</li>'; 
    naverCorp_mnuriApi +=            '</ul>'; 
    naverCorp_mnuriApi +=        '</div>'; 
    naverCorp_mnuriApi +=    '</div>'; 

    $(".case_card.naverCorp_mnuriApi").html(naverCorp_mnuriApi);
});





/* 비바리퍼블리카(토스) */
// SRT 승차권 예매
$(document).ready(function () {

    var vivaToss_srt = "";
    vivaToss_srt +=    '<div class="case_item_info slide_case_item">'; 
    vivaToss_srt +=        '<h4 class="title_article title_upperline">SRT 승차권 예매</h4>'; 
    vivaToss_srt +=        '<div class="case_item_inner">'; 
    vivaToss_srt +=            '<div class="wrap_img">'; 
    vivaToss_srt +=                '<img src="../img/screenshot/srt_toss.PNG" alt="토스 앱의 SRT 승차권을 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    vivaToss_srt +=            '</div>'; 
    vivaToss_srt +=            '<div class="name">'; 
    vivaToss_srt +=                '<div class="wrap_logo">'; 
    vivaToss_srt +=                    '<img src="../img/app_logo/app_toss.png" alt="토스 앱 로고"/>'; 
    vivaToss_srt +=                '</div>';    
    vivaToss_srt +=                '<h4>토스</h4>';    
    vivaToss_srt +=                '<p>전체 > 교통 > 기차 예약하기</p>';    
    vivaToss_srt +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_srt_toss\'); return false;">자세히 보기</button>';    
    vivaToss_srt +=                '<h5>SRT 승차권 예매도 토스 앱으로</h5>';    
    vivaToss_srt +=            '</div>'; 
    vivaToss_srt +=        '</div>'; 
    vivaToss_srt +=        '<div class="case_item_bottom">';
    vivaToss_srt +=            '<h5>서비스 이용해보기</h5>';
    vivaToss_srt +=            '<ul class="link_service_list">';
    vivaToss_srt +=                '<li class="link_service_item">';
    vivaToss_srt +=                    '<a href="https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 토스 페이지로 외부 이동">iOS</a>';    
    vivaToss_srt +=                '</li>'; 
    vivaToss_srt +=                '<li class="link_service_item">';
    vivaToss_srt +=                    '<a href="https://play.google.com/store/apps/details?id=viva.republica.toss&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 토스 페이지로 외부 이동">Android</a>';    
    vivaToss_srt +=                '</li>'; 
    vivaToss_srt +=            '</ul>'; 
    vivaToss_srt +=        '</div>'; 
    vivaToss_srt +=    '</div>'; 

    $(".case_card.vivaToss_srt").html(vivaToss_srt);
});

// 자동차검사 예약
$(document).ready(function () {

    var vivaToss_carcheck = "";
    vivaToss_carcheck +=    '<div class="case_item_info slide_case_item">'; 
    vivaToss_carcheck +=        '<h4 class="title_article title_upperline">자동차검사 예약</h4>'; 
    vivaToss_carcheck +=        '<div class="case_item_inner">'; 
    vivaToss_carcheck +=            '<div class="wrap_img">'; 
    vivaToss_carcheck +=                '<img src="../img/screenshot/carcheck_toss.PNG" alt="토스 앱의 자동차 검사를 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    vivaToss_carcheck +=            '</div>'; 
    vivaToss_carcheck +=            '<div class="name">'; 
    vivaToss_carcheck +=                '<div class="wrap_logo">'; 
    vivaToss_carcheck +=                    '<img src="../img/app_logo/app_toss.png" alt="토스 앱 로고"/>'; 
    vivaToss_carcheck +=                '</div>';    
    vivaToss_carcheck +=                '<h4>토스</h4>';    
    vivaToss_carcheck +=                '<p>전체 > 자동차 > 자동차 검사 예약</p>';    
    vivaToss_carcheck +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_carcheck_toss\'); return false;">자세히 보기</button>';    
    vivaToss_carcheck +=                '<h5>자동차 검사 예약도 토스 앱으로</h5>'; 
    vivaToss_carcheck +=            '</div>'; 
    vivaToss_carcheck +=        '</div>'; 
    vivaToss_carcheck +=        '<div class="case_item_bottom">';
    vivaToss_carcheck +=            '<h5>서비스 이용해보기</h5>';
    vivaToss_carcheck +=            '<ul class="link_service_list">';
    vivaToss_carcheck +=                '<li class="link_service_item">';
    vivaToss_carcheck +=                    '<a href="https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 토스 페이지로 외부 이동">iOS</a>';    
    vivaToss_carcheck +=                '</li>'; 
    vivaToss_carcheck +=                '<li class="link_service_item">';
    vivaToss_carcheck +=                    '<a href="https://play.google.com/store/apps/details?id=viva.republica.toss&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 토스 페이지로 외부 이동">Android</a>';    
    vivaToss_carcheck +=                '</li>'; 
    vivaToss_carcheck +=            '</ul>'; 
    vivaToss_carcheck +=        '</div>'; 
    vivaToss_carcheck +=    '</div>'; 

    $(".case_card.vivaToss_carcheck").html(vivaToss_carcheck);
});

// KTX 승차권 예매
$(document).ready(function () {

    var vivaToss_korail = "";
    vivaToss_korail +=    '<div class="case_item_info slide_case_item">'; 
    vivaToss_korail +=        '<h4 class="title_article title_upperline">KTX 승차권 예매</h4>'; 
    vivaToss_korail +=        '<div class="case_item_inner">'; 
    vivaToss_korail +=            '<div class="wrap_img">'; 
    vivaToss_korail +=                '<img src="../img/screenshot/korail_toss.PNG" alt="토스 앱의 코레일 열차를 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    vivaToss_korail +=            '</div>'; 
    vivaToss_korail +=            '<div class="name">'; 
    vivaToss_korail +=                '<div class="wrap_logo">'; 
    vivaToss_korail +=                    '<img src="../img/app_logo/app_toss.png" alt="토스 앱 로고"/>'; 
    vivaToss_korail +=                '</div>';    
    vivaToss_korail +=                '<h4>토스</h4>';    
    vivaToss_korail +=                '<p>전체 > 교통 > 기차 예약하기</p>';    
    vivaToss_korail +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_korail_toss\'); return false;">자세히 보기</button>';    
    vivaToss_korail +=                '<h5>코레일 승차권 예매도 토스 앱으로</h5>'; 
    vivaToss_korail +=            '</div>'; 
    vivaToss_korail +=        '</div>'; 
    vivaToss_korail +=        '<div class="case_item_bottom">';
    vivaToss_korail +=            '<h5>서비스 이용해보기</h5>';
    vivaToss_korail +=            '<ul class="link_service_list">';
    vivaToss_korail +=                '<li class="link_service_item">';
    vivaToss_korail +=                    '<a href="https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 토스 페이지로 외부 이동">iOS</a>';    
    vivaToss_korail +=                '</li>'; 
    vivaToss_korail +=                '<li class="link_service_item">';
    vivaToss_korail +=                    '<a href="https://play.google.com/store/apps/details?id=viva.republica.toss&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 토스 페이지로 외부 이동">Android</a>';    
    vivaToss_korail +=                '</li>'; 
    vivaToss_korail +=            '</ul>'; 
    vivaToss_korail +=        '</div>'; 
    vivaToss_korail +=    '</div>'; 

    $(".case_card.vivaToss_korail").html(vivaToss_korail);
});





/* 신한카드 */
// SRT 승차권 예매 (신한SOL페이)
$(document).ready(function () {

    var shCard_srt = "";
    shCard_srt +=    '<div class="case_item_info slide_case_item">'; 
    shCard_srt +=        '<h4 class="title_article title_upperline">SRT 승차권 예매</h4>'; 
    shCard_srt +=        '<div class="case_item_inner">'; 
    shCard_srt +=            '<div class="wrap_img">'; 
    shCard_srt +=                '<img src="../img/screenshot/srt_shsol.PNG" alt="신한SOL페이 앱의 SRT 승차권을 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    shCard_srt +=            '</div>'; 
    shCard_srt +=            '<div class="name">'; 
    shCard_srt +=                '<div class="wrap_logo">'; 
    shCard_srt +=                    '<img src="../img/app_logo/app_shinhansolpay.png" alt="신한SOL페이 앱 로고" />'; 
    shCard_srt +=                '</div>';    
    shCard_srt +=                '<h4>신한SOL페이</h4>';    
    shCard_srt +=                '<p>교통 > 기차 예매</p>';    
    shCard_srt +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_srt_shsol\'); return false;">자세히 보기</button>';    
    shCard_srt +=                '<h5>SRT 승차권 한 번에 예매하기</h5>';    
    shCard_srt +=            '</div>'; 
    shCard_srt +=        '</div>'; 
    shCard_srt +=        '<div class="case_item_bottom">';
    shCard_srt +=            '<h5>서비스 이용해보기</h5>';
    shCard_srt +=            '<ul class="link_service_list">';
    shCard_srt +=                '<li class="link_service_item">';
    shCard_srt +=                    '<a href="https://apps.apple.com/kr/app/%EC%8B%A0%ED%95%9C-sol%ED%8E%98%EC%9D%B4-%EC%8B%A0%ED%95%9C%EC%B9%B4%EB%93%9C-%EB%8C%80%ED%91%9C%ED%94%8C%EB%9E%AB%ED%8F%BC/id572462317" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 신한SOL페이 페이지로 외부 이동">iOS</a>';    
    shCard_srt +=                '</li>'; 
    shCard_srt +=                '<li class="link_service_item">';
    shCard_srt +=                    '<a href="https://play.google.com/store/apps/details?id=com.shcard.smartpay&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 신한SOL페이 페이지로 외부 이동">Android</a>';    
    shCard_srt +=                '</li>'; 
    shCard_srt +=            '</ul>'; 
    shCard_srt +=        '</div>'; 
    shCard_srt +=    '</div>'; 

    $(".case_card.shCard_srt").html(shCard_srt);
});

// 자동차검사 예약 (신한 마이카)
$(document).ready(function () {

    var shCard_carcheck = "";
    shCard_carcheck +=    '<div class="case_item_info slide_case_item">'; 
    shCard_carcheck +=        '<h4 class="title_article title_upperline">자동차검사 예약</h4>'; 
    shCard_carcheck +=        '<div class="case_item_inner">'; 
    shCard_carcheck +=            '<div class="wrap_img">'; 
    shCard_carcheck +=                '<img src="../img/screenshot/carcheck_shmycar.PNG" alt="신한 마이카 앱에서 자동차 검사를 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    shCard_carcheck +=            '</div>'; 
    shCard_carcheck +=            '<div class="name">'; 
    shCard_carcheck +=                '<div class="wrap_logo">'; 
    shCard_carcheck +=                    '<img src="../img/app_logo/app_shinhanmycar.png" alt="신한 마이카 앱 로고" />'; 
    shCard_carcheck +=                '</div>';    
    shCard_carcheck +=                '<h4>신한 마이카</h4>';    
    shCard_carcheck +=                '<p>내차 관리 > 자동차검사 > 자동차검사 예약</p>';    
    shCard_carcheck +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_carcheck_shmycar\'); return false;">자세히 보기</button>';    
    shCard_carcheck +=                '<h5>자동차의 모든 것</h5>';    
    shCard_carcheck +=            '</div>'; 
    shCard_carcheck +=        '</div>'; 
    shCard_carcheck +=        '<div class="case_item_bottom">';
    shCard_carcheck +=            '<h5>서비스 이용해보기</h5>';
    shCard_carcheck +=            '<ul class="link_service_list">';
    shCard_carcheck +=                '<li class="link_service_item">';
    shCard_carcheck +=                    '<a href="https://apps.apple.com/kr/app/%EC%8B%A0%ED%95%9C-sol%ED%8E%98%EC%9D%B4-%EC%8B%A0%ED%95%9C%EC%B9%B4%EB%93%9C-%EB%8C%80%ED%91%9C%ED%94%8C%EB%9E%AB%ED%8F%BC/id572462317" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 신한SOL페이 페이지로 외부 이동">iOS</a>';    
    shCard_carcheck +=                '</li>'; 
    shCard_carcheck +=                '<li class="link_service_item">';
    shCard_carcheck +=                    '<a href="https://play.google.com/store/apps/details?id=com.shcard.smartpay&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 신한SOL페이 페이지로 외부 이동">Android</a>';    
    shCard_carcheck +=                '</li>'; 
    shCard_carcheck +=            '</ul>'; 
    shCard_carcheck +=        '</div>'; 
    shCard_carcheck +=    '</div>'; 

    $(".case_card.shCard_carcheck").html(shCard_carcheck);
});

// KTX 승차권 예매 (신한SOL페이)
$(document).ready(function () {

    var shCard_korail = "";
    shCard_korail +=    '<div class="case_item_info slide_case_item">'; 
    shCard_korail +=        '<h4 class="title_article title_upperline">KTX 승차권 예매</h4>'; 
    shCard_korail +=        '<div class="case_item_inner">'; 
    shCard_korail +=            '<div class="wrap_img">'; 
    shCard_korail +=                '<img src="../img/screenshot/korail_shsol.PNG" alt="신한SOL페이 앱의 코레일 열차를 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    shCard_korail +=            '</div>'; 
    shCard_korail +=            '<div class="name">'; 
    shCard_korail +=                '<div class="wrap_logo">'; 
    shCard_korail +=                    '<img src="../img/app_logo/app_shinhansolpay.png" alt="신한SOL페이 앱 로고" />'; 
    shCard_korail +=                '</div>';    
    shCard_korail +=                '<h4>신한SOL페이</h4>';    
    shCard_korail +=                '<p>교통 > 기차 예매</p>';    
    shCard_korail +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_korail_shsol\'); return false;">자세히 보기</button>';    
    shCard_korail +=                '<h5>코레일 승차권 한 번에 예매하기</h5>';    
    shCard_korail +=            '</div>'; 
    shCard_korail +=        '</div>'; 
    shCard_korail +=        '<div class="case_item_bottom">';
    shCard_korail +=            '<h5>서비스 이용해보기</h5>';
    shCard_korail +=            '<ul class="link_service_list">';
    shCard_korail +=                '<li class="link_service_item">';
    shCard_korail +=                    '<a href="https://apps.apple.com/kr/app/%EC%8B%A0%ED%95%9C-sol%ED%8E%98%EC%9D%B4-%EC%8B%A0%ED%95%9C%EC%B9%B4%EB%93%9C-%EB%8C%80%ED%91%9C%ED%94%8C%EB%9E%AB%ED%8F%BC/id572462317" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 신한SOL페이 페이지로 외부 이동">iOS</a>';    
    shCard_korail +=                '</li>'; 
    shCard_korail +=                '<li class="link_service_item">';
    shCard_korail +=                    '<a href="https://play.google.com/store/apps/details?id=com.shcard.smartpay&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 신한SOL페이 페이지로 외부 이동">Android</a>';    
    shCard_korail +=                '</li>'; 
    shCard_korail +=            '</ul>'; 
    shCard_korail +=        '</div>'; 
    shCard_korail +=    '</div>'; 

    $(".case_card.shCard_korail").html(shCard_korail);
});





/* 카카오모빌리티 */
// SRT 승차권 예매 (카카오T)
$(document).ready(function () {

    var kakaoMo_srt = "";
    kakaoMo_srt +=    '<div class="case_item_info slide_case_item">'; 
    kakaoMo_srt +=        '<h4 class="title_article title_upperline">SRT 승차권 예매</h4>'; 
    kakaoMo_srt +=        '<div class="case_item_inner">'; 
    kakaoMo_srt +=            '<div class="wrap_img">'; 
    kakaoMo_srt +=                '<img src="../img/screenshot/srt_kakaot.PNG" alt="카카오 T 앱의 SRT 승차권을 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kakaoMo_srt +=            '</div>'; 
    kakaoMo_srt +=            '<div class="name">'; 
    kakaoMo_srt +=                '<div class="wrap_logo">'; 
    kakaoMo_srt +=                    '<img src="../img/app_logo/app_kakaot.png" alt="카카오 T 앱 로고" />'; 
    kakaoMo_srt +=                '</div>';    
    kakaoMo_srt +=                '<h4>카카오 T</h4>';    
    kakaoMo_srt +=                '<p>목적지 검색 / 홈 > 기차</p>';    
    kakaoMo_srt +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_srt_kakaot\'); return false;">자세히 보기</button>';    
    kakaoMo_srt +=                '<h5>SRT 승차권 예매는 카카오 T에서</h5>';    
    kakaoMo_srt +=            '</div>'; 
    kakaoMo_srt +=        '</div>'; 
    kakaoMo_srt +=        '<div class="case_item_bottom">';
    kakaoMo_srt +=            '<h5>서비스 이용해보기</h5>';
    kakaoMo_srt +=            '<ul class="link_service_list">';
    kakaoMo_srt +=                '<li class="link_service_item">';
    kakaoMo_srt +=                    '<a href="https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4-t-%ED%83%9D%EC%8B%9C-%EB%8C%80%EB%A6%AC-%EC%A3%BC%EC%B0%A8-%EB%B0%94%EC%9D%B4%ED%81%AC-%ED%95%AD%EA%B3%B5-%ED%80%B5/id981110422" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 카카오T 페이지로 외부 이동">iOS</a>';    
    kakaoMo_srt +=                '</li>'; 
    kakaoMo_srt +=                '<li class="link_service_item">';
    kakaoMo_srt +=                    '<a href="https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 카카오T 페이지로 외부 이동">Android</a>';    
    kakaoMo_srt +=                '</li>'; 
    kakaoMo_srt +=            '</ul>'; 
    kakaoMo_srt +=        '</div>'; 
    kakaoMo_srt +=    '</div>'; 

    $(".case_card.kakaoMo_srt").html(kakaoMo_srt);
});

// 자동차검사 예약 (카카오T)
$(document).ready(function () {

    var kakaoMo_carcheck = "";
    kakaoMo_carcheck +=    '<div class="case_item_info slide_case_item">'; 
    kakaoMo_carcheck +=        '<h4 class="title_article title_upperline">자동차검사 예약</h4>'; 
    kakaoMo_carcheck +=        '<div class="case_item_inner">'; 
    kakaoMo_carcheck +=            '<div class="wrap_img">'; 
    kakaoMo_carcheck +=                ' <img src="../img/screenshot/carcheck_kakaot.PNG" alt="카카오 T 앱의 자동차 검사를 예약하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kakaoMo_carcheck +=            '</div>'; 
    kakaoMo_carcheck +=            '<div class="name">'; 
    kakaoMo_carcheck +=                '<div class="wrap_logo">'; 
    kakaoMo_carcheck +=                    '<img src="../img/app_logo/app_kakaot.png" alt="카카오 T 앱 로고" />'; 
    kakaoMo_carcheck +=                '</div>';    
    kakaoMo_carcheck +=                '<h4>카카오 T</h4>';    
    kakaoMo_carcheck +=                '<p>마이카 > 자동차검사</p>';    
    kakaoMo_carcheck +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_carcheck_kakaot\'); return false;">자세히 보기</button>';    
    kakaoMo_carcheck +=                '<h5>자동차 검사 예약은 카카오 T에서</h5>';    
    kakaoMo_carcheck +=            '</div>'; 
    kakaoMo_carcheck +=        '</div>'; 
    kakaoMo_carcheck +=        '<div class="case_item_bottom">';
    kakaoMo_carcheck +=            '<h5>서비스 이용해보기</h5>';
    kakaoMo_carcheck +=            '<ul class="link_service_list">';
    kakaoMo_carcheck +=                '<li class="link_service_item">';
    kakaoMo_carcheck +=                    '<a href="https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4-t-%ED%83%9D%EC%8B%9C-%EB%8C%80%EB%A6%AC-%EC%A3%BC%EC%B0%A8-%EB%B0%94%EC%9D%B4%ED%81%AC-%ED%95%AD%EA%B3%B5-%ED%80%B5/id981110422" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 카카오T 페이지로 외부 이동">iOS</a>';    
    kakaoMo_carcheck +=                '</li>'; 
    kakaoMo_carcheck +=                '<li class="link_service_item">';
    kakaoMo_carcheck +=                    '<a href="https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 카카오T 페이지로 외부 이동">Android</a>';    
    kakaoMo_carcheck +=                '</li>'; 
    kakaoMo_carcheck +=            '</ul>'; 
    kakaoMo_carcheck +=        '</div>'; 
    kakaoMo_carcheck +=    '</div>'; 

    $(".case_card.kakaoMo_carcheck").html(kakaoMo_carcheck);
});

// KTX 승차권 예매 (카카오T)
$(document).ready(function () {

    var kakaoMo_korail = "";
    kakaoMo_korail +=    '<div class="case_item_info slide_case_item">'; 
    kakaoMo_korail +=        '<h4 class="title_article title_upperline">KTX 승차권 예매</h4>'; 
    kakaoMo_korail +=        '<div class="case_item_inner">'; 
    kakaoMo_korail +=            '<div class="wrap_img">'; 
    kakaoMo_korail +=                '<img src="../img/screenshot/korail_kakaot.PNG" alt="카카오 T 앱의 코레일 열차를 예매하는 화면의 스크린샷입니다." class="viewer"/>'; 
    kakaoMo_korail +=            '</div>'; 
    kakaoMo_korail +=            '<div class="name">'; 
    kakaoMo_korail +=                '<div class="wrap_logo">'; 
    kakaoMo_korail +=                    '<img src="../img/app_logo/app_kakaot.png" alt="카카오 T 앱 로고" />'; 
    kakaoMo_korail +=                '</div>';    
    kakaoMo_korail +=                '<h4>카카오 T</h4>';    
    kakaoMo_korail +=                '<p>목적지 검색 / 홈 > 기차</p>';    
    kakaoMo_korail +=                '<button type="button" class="btn_link filled_white_font_black link_in_black" onclick="openPop(\'layer\',\'modal_korail_kakaot\'); return false;">자세히 보기</button>';    
    kakaoMo_korail +=                '<h5>코레일 승차권 예매는 카카오 T에서</h5>';    
    kakaoMo_korail +=            '</div>'; 
    kakaoMo_korail +=        '</div>'; 
    kakaoMo_korail +=        '<div class="case_item_bottom">';
    kakaoMo_korail +=            '<h5>서비스 이용해보기</h5>';
    kakaoMo_korail +=            '<ul class="link_service_list">';
    kakaoMo_korail +=                '<li class="link_service_item">';
    kakaoMo_korail +=                    '<a href="https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4-t-%ED%83%9D%EC%8B%9C-%EB%8C%80%EB%A6%AC-%EC%A3%BC%EC%B0%A8-%EB%B0%94%EC%9D%B4%ED%81%AC-%ED%95%AD%EA%B3%B5-%ED%80%B5/id981110422" target="_blank" class="link_service_anchor" title="새 창 열림- 앱스토어 카카오T 페이지로 외부 이동">iOS</a>';    
    kakaoMo_korail +=                '</li>'; 
    kakaoMo_korail +=                '<li class="link_service_item">';
    kakaoMo_korail +=                    '<a href="https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=ko&gl=US" target="_blank" class="link_service_anchor" title="새 창 열림- 구글 플레이 스토어 카카오T 페이지로 외부 이동">Android</a>';    
    kakaoMo_korail +=                '</li>'; 
    kakaoMo_korail +=            '</ul>'; 
    kakaoMo_korail +=        '</div>'; 
    kakaoMo_korail +=    '</div>'; 

    $(".case_card.kakaoMo_korail").html(kakaoMo_korail);
});