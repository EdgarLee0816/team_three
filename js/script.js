const calendar = document.querySelectorAll('.calendar');
const week = document.querySelectorAll('.days');

const arrows = document.querySelectorAll('button.material-symbols-outlined');

const $day = document.querySelectorAll('.day');
const $details = document.querySelector('#details div');


$day.forEach(element => {

    if( ! element.classList.contains('empty'))
    {
        if (element.children[0] != null ) {
            element.addEventListener('click',()=>{
                insert_text(element);
            });
        }
    };
});


const insert_text = ( item ) => {
    const coll = [... item.children];

    let constnent_text = '';

    coll.forEach( i => {
        if( i.classList.contains('content') )
        {
            constnent_text += i.textContent+' : ';
        }
        if( i.classList.contains('detail_content') )
        {
            constnent_text += i.textContent+'<br>';
        }
    });
    $details.innerHTML = constnent_text;
    
};

let page = 0;
const move = (index) => {
    if (index%2 == 0) {
        if (page == 0) {
            // page = 0;
            alert("맨 앞 장 입니다.");
        } else {
            page -= 1;
        }
    }
    else{
        if (page == week.length-1) {
            // page = week.length-1;
            alert("맨 뒷 장 입니다.");
        } else {
            page += 1;
        }
    }

    if (page < 2 && page >= 0) { // 0, 1
        calendar[0].style.display = 'block';
        calendar[1].style.display = 'none';
        calendar[2].style.display = 'none';
    }else if (page < 4 && page >= 2) { // 2, 3
        calendar[0].style.display = 'none';
        calendar[1].style.display = 'block';
        calendar[2].style.display = 'none';
    }else if (page < week.length && page >= 4) { // 4, 5
        calendar[0].style.display = 'none';
        calendar[1].style.display = 'none';
        calendar[2].style.display = 'block';
    }

    week.forEach((element, i) => {
        if(i == page){
            element.style.display = 'grid';
        }else{
            // console.log(page);
            element.style.display = 'none';
        }
    });
};
arrows.forEach((element, i) => {
    element.addEventListener('click', ()=>{ move(i); });
});