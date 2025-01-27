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
 

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container")

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = Math.sign(e.deltaY)
    const currentSection = Math.round(container.scrollTop / window.innerHeight)
    const nextSection = currentSection + delta
    container.scrollTo({
      top: nextSection * window.innerHeight,
      behavior: "smooth",
    })
  }

  container.addEventListener("wheel", handleWheel, { passive: false })

  // Touch events for mobile devices
  let touchStartY = 0
  let touchEndY = 0

  container.addEventListener(
    "touchstart",
    (e) => {
      touchStartY = e.touches[0].clientY
    },
    { passive: true },
  )

  container.addEventListener(
    "touchmove",
    (e) => {
      touchEndY = e.touches[0].clientY
    },
    { passive: true },
  )

  container.addEventListener(
    "touchend",
    () => {
      const delta = touchStartY - touchEndY
      if (Math.abs(delta) > 50) {
        // Minimum swipe distance
        const direction = delta > 0 ? 1 : -1
        const currentSection = Math.round(container.scrollTop / window.innerHeight)
        const nextSection = currentSection + direction
        container.scrollTo({
          top: nextSection * window.innerHeight,
          behavior: "smooth",
        })
      }
    },
    { passive: true },
  )
})

