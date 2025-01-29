 // 계좌번호 복사 기능
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
    slidesPerView: window.innerWidth > 768 ? 3 : 1.2, // 모바일에서 1.2개만 보이게
    /* slidesPerView: 3, // 한 번에 보여줄 슬라이드 수 */
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

// 지도 관련
document.addEventListener("DOMContentLoaded", function() {
  var map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.564585, 126.942297), // 알렌관 위도 경도 37.564585 / 126.942297
      zoom: 18, // 지도의 초기 줌 레벨
      minZoom: 8, //지도의 최소 줌 레벨
      zoomControl: true, //줌 컨트롤의 표시 여부
      zoomControlOptions: { //줌 컨트롤의 옵션
        position: naver.maps.Position.TOP_RIGHT
  }});
  
  var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.564585, 126.942297),
      map: map
  });

  var contentString = [
    '<div class="iw_inner" style="padding:5px; margin: 5px 0px 5px 0px; width: 150px; height: 45px; text-align: center; ">',
    '   <p style="foint-size: 2rem; margin: 0;">연세대학교 알렌관</p>',
    '   <p style="font-size: 0.7rem; margin: 0;">서울 서대문구 연세로 50</p>',
    '</div>'
    ].join('');

    var infowindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
        height: 50,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
        disableAnchor: true,
        textAlign: "center",
        margin: "auto",

        pixelOffset: new naver.maps.Point(0, -5)
    });

    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });

    infowindow.open(map, marker);
});

// 네이버 지도 연결 관련
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openNaverMapButton').addEventListener('click', function () {
      const appUrl = 'nmap://search?query=연세대학교 알렌관';
      const webUrl = 'https://map.naver.com/v5/search/연세대학교%20알렌관';

      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
          window.location.href = appUrl;

          setTimeout(function () {
              window.location.href = webUrl;
          }, 1000);
      } else {
          window.location.href = webUrl;
      }
  });
});

// openKakaoMapButton
// 카카오 내비 연결 관련
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openKakaoMapButton').addEventListener('click', function () {
      // 카카오 지도 앱 URL 스킴
      const appUrl = 'kakaomap://search?q=연세대학교 알렌관';

      // 카카오 지도 웹 브라우저 URL
      const webUrl = 'https://map.kakao.com/?q=연세대학교%20알렌관';

      // 모바일 환경인지 확인 (앱 실행 가능 여부)
      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
          // 카카오 지도 앱 실행
          window.location.href = appUrl;

          // 일정 시간 대기 후 앱 실행 실패 시 웹으로 리디렉션
          setTimeout(function () {
              window.location.href = webUrl;
          }, 1000); // 1초 대기
      } else {
          // 데스크톱 환경에서는 웹으로 연결
          window.location.href = webUrl;
      }
  });
});

// 캘린더 관련
 // fetch를 사용하여 외부 HTML 삽입
 async function loadHTML() {
  try {
      // calendar.html 파일 로드
      const response = await fetch('./html/calendar.html');
      if (!response.ok) throw new Error('파일 로드 실패');

      // HTML 내용을 삽입
      const htmlContent = await response.text();
      const contentDiv = document.getElementById('calendar');
      contentDiv.innerHTML = htmlContent;

      // ✅ 동적으로 가운데 정렬 스타일 추가
        contentDiv.style.display = "flex";
        contentDiv.style.justifyContent = "center";
        contentDiv.style.alignItems = "center";

      // 삽입된 HTML 내의 script 태그 실행
      const scripts = contentDiv.querySelectorAll('script');
      scripts.forEach(script => {
          const newScript = document.createElement('script');
          if (script.src) {
              // src 속성이 있는 스크립트는 다시 로드
              newScript.src = script.src;
          } else {
              // 인라인 스크립트 실행
              newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript); // 스크립트를 동적으로 추가하여 실행
      });

  } catch (error) {
      console.error(error);
      document.getElementById('calendar').innerText = 'HTML을 불러오는 중 오류가 발생했습니다.';
  }
}

// HTML 로드 실행
loadHTML();