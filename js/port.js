document.addEventListener("DOMContentLoaded", () => {
    //전체 동작 변수 선언
    const members = [...document.getElementsByClassName("t_left")];
    const nav = [...document.getElementsByClassName("mem_a")];
    const right = [...document.getElementsByClassName("mem_right")];
    const team = document.getElementById("nav_team");
    const team_right = document.getElementById("team_right");
    const span_btn = document.getElementById("span_btn");
    const nav_ul = document.getElementById("nav_ul");
    const ul_left = [...document.getElementsByClassName("ul_left")];

    //게이지 동작 변수 선언
    const progressBars = [
        { element: document.getElementById("s_1"), target: 80, delay: 0, progress: 0 },
        { element: document.getElementById("s_2"), target: 80, delay: 300, progress: 0 },
        { element: document.getElementById("s_3"), target: 60, delay: 600, progress: 0 },
        { element: document.getElementById("s_4"), target: 90, delay: 900, progress: 0 },
        { element: document.getElementById("s_5"), target: 60, delay: 1200, progress: 0 },
        { element: document.getElementById("j_1"), target: 80, delay: 0, progress: 0 },
        { element: document.getElementById("j_2"), target: 80, delay: 300, progress: 0 },
        { element: document.getElementById("j_3"), target: 60, delay: 600, progress: 0 },
        { element: document.getElementById("j_4"), target: 60, delay: 900, progress: 0 },
    ];
    
    //멤버 명함 부분
    members.forEach((i, p) => {
        i.addEventListener("click", () => {
           
            right.forEach((j) => {
                j.style.left = ""; 
                team_right.style.opacity = "0";
                team_right.style.transition = "all 1s";
            });    
            
            if (right[p]) {
                right[p].style.left = "0";
                right[p].style.transition = "left 1s";
            }
    
            //멤버 명함 클릭시 게이지 동작 부분
            progressBars.forEach(bar => {
                
                if (bar.interval) {
                    clearInterval(bar.interval);
                }
    
                bar.progress = 0;      
                
                setTimeout(() => {
                    bar.interval = setInterval(() => {
                        const update = () => {
                            if (bar.progress < bar.target) {
                                bar.progress++;
                                bar.element.style.width = bar.progress + "%";
                            } else {
                                clearInterval(bar.interval); 
                            }
                        };
                        update();
                    }, 20); // 
                }, 1000); // 
            });
        });
    });
    
    //메인 네비 부분
    nav.forEach((i, p) => {
        i.addEventListener("click", () => {
            
            right.forEach((j) => {
                j.style.left = ""; 
                team_right.style.opacity = "0";
                team_right.style.transition = "all 1s";
            });
    
            
            if (right[p]) {
                right[p].style.left = "0";
                right[p].style.transition = "left 1s";
            }
    
            //메인 네비 메뉴 클릭시 게이지 동작 부분
            progressBars.forEach(bar => {
                
                if (bar.interval) {
                    clearInterval(bar.interval);
                }
    
                bar.progress = 0;  
    
                
                setTimeout(() => {
                    bar.interval = setInterval(() => {
                        const update = () => {
                            if (bar.progress < bar.target) {
                                bar.progress++;
                                bar.element.style.width = bar.progress + "%";
                            } else {
                                clearInterval(bar.interval); 
                            }
                        };
                        update();
                    }, 20); // 
                }, 1000); // 
            });
        });
    });   
    
    //팀 메뉴 클릭 시 동작   

    team.addEventListener("click", () => {
        right.forEach((i) => {
            i.style.left = "";
            i.style.transition = "left 1s";
            team_right.style.opacity = "1"; 
            team_right.style.transition = "opacity 2s";
        });
    
        // 팀 이미지 활성화
        if (window.innerWidth >= 1001) {
            team_right.classList.add("active");
        } else {
            team_right.style.opacity = "1"; 
            team_right.style.transition = "opacity 2s";
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth < 1001) {
            team_right.classList.remove("active");
            team_right.style.opacity = "1"; // 작은 화면에서는 항상 표시
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1001) {
            team_right.classList.remove("active");
            team_right.style.opacity = "1"; // 작은 화면에서는 항상 표시
        }
    });


    //타이핑 애니메이션 처리
    const typing = document.getElementById("typing");
    const text = "Team-3 입니다!<br><br>코드 속에 사람을 담은 개발자가 되기 위해<br>끊임없이 배우고 성장하는 3팀을 소개합니다.";

    let i=0; 
    let t = "";
    const chat = () => {
    if ( i < text.length) {    
        t += text[i];
        typing.innerHTML = t;   
        i++;
        setTimeout(chat , 100);        
    };
 };

 setTimeout(chat , 300); 

    ul_left.forEach( i =>{

        i.addEventListener("click", ()=>{

            progressBars.forEach(bar => {
                
                if (bar.interval) {
                    clearInterval(bar.interval);
                }
    
                bar.progress = 0;  
    
                
                setTimeout(() => {
                    bar.interval = setInterval(() => {
                        const update = () => {
                            if (bar.progress < bar.target) {
                                bar.progress++;
                                bar.element.style.width = bar.progress + "%";
                            } else {
                                clearInterval(bar.interval); 
                            }
                        };
                        update();
                    }, 20); // 
                }, 1000); // 
            });

        });
        
    });

    //span_btn 클릭시 동작
    span_btn.addEventListener("click", () => {
        
        if (nav_ul.style.height === "80px") {
            nav_ul.style.height = "0";
        } else {
            nav_ul.style.height = "80px";
        }
    });

});