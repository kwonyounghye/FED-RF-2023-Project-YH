const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

window.addEventListener('DOMContentLoaded', loadFn);

function loadFn() {
    console.log('로딩중');
    
    const intro_ani = qs('.intro1');
    let ani_txt = intro_ani.innerText;
    // 글자 담기 변수
    let ani_text = '';
    // for of문으로 한 글자씩 순회하기
    let num = 0;
    console.log(ani_txt.length);
    for(let x of ani_txt) {
        if(x=='1') ani_text += '<br>';

        if(num===11)
            ani_text += `<b>${x}</b>`;
        else
            ani_text += `<span style="animation-delay:${0.1*num}s">${x}</span>`;

        console.log('x:', x);   
        num++;    
    }

    intro_ani.innerHTML = ani_text;

    // 얼마후 마지막 b태그(+글자)에 클래스"on"주기
    setTimeout(() => {
        qs('.intro1 b').classList.add('on');
    }, 2000);

    
    
}

// const qs = x => document.querySelector(x);
// const qsa = x => document.querySelectorAll(x);
// window.addEventListener(qs);
// console.log("x: ", qs);
// let intro_ani = qsa('.intro1');
// let ani_txt = intro_ani.innerText;
// // 글자 담기 변수
// let ani_text = '';
// // for of문으로 한 글자씩 순회하기
// for(let x of ani_txt) {
//     console.log(x);
//     ani_text += `<h1 class="intro1">${x}</h1>`;
// }

// intro_ani.innerHTML = ani_text;