       // jQuery가 로딩되어 있어야 합니다.
// 탭 컨텐츠 숨기기
$(".tab_content").hide();

// 첫번째 탭 컨텐츠 보이기
$(".tab_container").each(function () {
  $(this).children(".tabs").find("li:first").addClass("active"); //Activate first tab
  $(this).children(".tab_content:first").show();
});

// 탭 메뉴 클릭 이벤트
$(".tabs li a").click(function (e) {
  e.preventDefault(); // 기본 동작 중지
  var tabContainer = $(this).closest(".tab_container");
  
  tabContainer.find("li").removeClass("active");
  $(this).parent().addClass("active"); 
  
  tabContainer.find(".tab_content").hide();
  
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
});

