 function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(function() {
                alert('계좌번호가 복사되었습니다.');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }

// Initialize Swiper
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
    // Swiper 옵션
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
    spaceBetween: 10, // 슬라이드 간 간격
    centeredSlides: true, // 가운데 슬라이드 강조
    loop: true, // 무한 루프
    pagination: {
      el: '.swiper-pagination', // 페이지네이션 활성화
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    
  });
});    
  