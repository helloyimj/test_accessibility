/* 서비스 사례*/


/* 서비스 사례 상단 타이틀 */
$(document).ready(function () {

    var page_title_rep_case = "";
    page_title_rep_case +=    '<h2 class="page_title title_underline">서비스 사례</h2>'; 
    page_title_rep_case +=    '<h3>더 빠르게, 더 간편하게<br />내게 가장 익숙한 플랫폼에서 공공서비스를<br class="block_480"/> 이용할 수 있습니다.</h3>'; 

    $(".article01 .page_title_rep_case").html(page_title_rep_case);
});


/* 적용사례_서비스 사례 상단 페이지 이동 */
$(document).ready(function () {

    var page_rep_case_list = "";
    page_rep_case_list +=   '<!-- 서비스별 선택 영역 PC 버전 -->'; 
    page_rep_case_list +=   '<div class="only_pc">'; 
    page_rep_case_list +=       '<ul class="wrap_select_link">'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_SRT승차권 예매.html" target="_self" class="service_item item_srt" title="SRT 승차권 예매 서비스별 사례 소개 부분으로 이동">SRT 승차권 예매</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_자동차 검사 예약.html" target="_self" class="service_item item_carcheck" title="자동차 검사 예약 서비스별 사례 소개 부분으로 이동">자동차 검사 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_국립수목원 예약.html" target="_self" class="service_item item_ntArbor" title="국립수목원 예약 서비스별 사례 소개 부분으로 이동">국립수목원 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_세종·백두대간 수목원 예약.html" target="_self" class="service_item item_sjbdarboretum" title="세종·백두대간 수목원 예약 서비스별 사례 소개 부분으로 이동">세종·백두대간수목원 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_인천공항 지도 서비스.html" target="_self" class="service_item item_hta" title="인천공항 지도 서비스 서비스별 사례 소개 부분으로 이동">인천공항 지도 서비스</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_KTX승차권 예매.html" target="_self" class="service_item item_korail" title="KTX 승차권 예매 서비스별 사례 소개 부분으로 이동">KTX 승차권 예매</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_휴양림 예약.html" target="_self" class="service_item item_forest" title="휴양림 예약 서비스별 사례 소개 부분으로 이동">휴양림 예약</a></li>'; 
    page_rep_case_list +=           '<li><a href="03_적용사례_서비스별 사례_문화누리카드이용.html" target="_self" class="service_item item_mnuriApi" title="문화누리카드 이용 서비스별 사례 소개 부분으로 이동">문화누리카드 이용</a></li>'; 
    page_rep_case_list +=       '</ul>'; 
    page_rep_case_list +=   '</div>'; 
    page_rep_case_list +=   '<!-- 서비스별 선택 콤보 박스 모바일 버전 -->';  
    page_rep_case_list +=   '<div class="only_mob">'; 
    page_rep_case_list +=       '<div class="combo_box_wrap">'; 
    page_rep_case_list +=           '<h3>서비스별 사례를 찾아보세요!</h3>'; 
    page_rep_case_list +=           '<label for="select_case" class="sr_only">서비스별 사례 선택 목록 열기 : </label>';
    page_rep_case_list +=               '<select onchange="if(this.value) location.href=(this.value);" id="select_case" class="combo_box">'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_SRT승차권 예매.html" class="service_option">SRT 승차권 예매</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_자동차 검사 예약.html" class="service_option">자동차 검사 예약</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_국립수목원 예약.html" class="service_option">국립수목원 예약</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_세종·백두대간 수목원 예약.html" class="service_option">세종·백두대간수목원 예약</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_인천공항 지도 서비스.html" class="service_option">인천공항 지도 서비스</option>';     
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_KTX승차권 예매.html" class="service_option">KTX 승차권 예매</option>'; 
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_휴양림 예약.html" class="service_option">휴양림 예약</option>';     
    page_rep_case_list +=                   '<option value="03_적용사례_서비스별 사례_문화누리카드이용.html" class="service_option">문화누리카드 이용</option>';     
    page_rep_case_list +=               '</select>';     
    page_rep_case_list +=       '</div>'; 
    page_rep_case_list +=   '</div>'; 

    $(".article02 .page_rep_case_list").html(page_rep_case_list);
});



/* 모바일: 셀렉트 박스 해당하는 페이지의 옵션이 선택되어 있도록  */
$(document).ready(function() {
    // 각 케이스에 대한 옵션 값 설정
    var optionValues = {
        "page_case_korail": "03_적용사례_서비스별 사례_KTX승차권 예매.html",
        "page_case_srt": "03_적용사례_서비스별 사례_SRT승차권 예매.html",
        "page_case_ntArbor": "03_적용사례_서비스별 사례_국립수목원 예약.html",
        "page_case_sjbdarboretum": "03_적용사례_서비스별 사례_세종·백두대간 수목원 예약.html",
        "page_case_hta": "03_적용사례_서비스별 사례_인천공항 지도 서비스.html",
        "page_case_carcheck": "03_적용사례_서비스별 사례_자동차 검사 예약.html",
        "page_case_forest": "03_적용사례_서비스별 사례_휴양림 예약.html",
        "page_case_mnuriApi": "03_적용사례_서비스별 사례_문화누리카드이용.html"
    };

    // 각 케이스에 대해 해당 옵션을 선택
    for (var key in optionValues) {
        if (optionValues.hasOwnProperty(key)) {
            $("." + key + " #select_case").val(optionValues[key]);
        }
    }
});