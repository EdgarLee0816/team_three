document.addEventListener("DOMContentLoaded", () => {
    const about = document.getElementById("about");
    const port = document.getElementById("portfolio");
    const event = document.getElementById("event");
    const contact = document.getElementById("contact");
    const navLinks = document.querySelectorAll("#nav a");

    let lastScrollY = window.scrollY; // 초기 스크롤 위치
    let isAnimating = false; // 애니메이션 상태

    const updateAnimations = () => {
        if (isAnimating) return; // 애니메이션 중일 때는 업데이트 방지

        const y = window.scrollY;

        /**************************** about 동작 ******************************/
        if (y >= 500 && y < 2400) {
            about.style.transform = "translateX(0)";
        } else if (y >= 2400) {
            about.style.transform = "translateX(100vw)";
        } else {
            about.style.transform = "translateX(-100vw)";
        }

        /**************************** portfolio 동작 ******************************/
        if (y >= 1600 && y < 3200) {
            port.style.transform = "translateX(0)";
        } else if (y >= 3200) {
            port.style.transform = "translateX(-100vw)";
        } else {
            port.style.transform = "translateX(100vw)";
        }

        /**************************** event 동작 ******************************/
        if (y >= 2400 && y < 3100) {
            event.style.transform = "translateX(0)";
        } else if (y >= 3100) {
            event.style.transform = "translateX(-100vw)";
        } else {
            event.style.transform = "translateX(100vw)";
        }

        /**************************** contact 동작 ******************************/
        if (y >= 3100) {
            contact.style.transform = "translateX(0)";
        } else {
            contact.style.transform = "translateX(100vw)";
        }

        lastScrollY = y;
    };

    window.addEventListener("scroll", updateAnimations);

    // 내비게이션 클릭 시 부드러운 스크롤 애니메이션 적용
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // 기본 클릭 동작 방지
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.offsetTop;

            isAnimating = true; // 애니메이션 상태 설정

            // Smooth scroll with animation
            window.scrollTo({
                top: targetPosition,
               // behavior: "smooth"
            });

            // 애니메이션 완료 후 상태 복원
            setTimeout(() => {
                isAnimating = false;
                updateAnimations(); // 클릭 후 스크롤 위치에 맞춰 애니메이션 상태 업데이트
            }, 100); // 1초는 애니메이션의 지속 시간에 맞게 조절
        });
    });
});
