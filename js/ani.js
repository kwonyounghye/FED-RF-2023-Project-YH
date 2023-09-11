const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

window.addEventListener('DOMContentLoaded', loadFn);

function loadFn() {
    console.log('로딩중');
    
    const intro_ani = qs('.intro1');
    // let ani_txt = intro_ani.innerText;
    // // 글자 담기 변수
    let ani_txt = intro_ani.innerText;
    let ani_text = '';
    // // for of문으로 한 글자씩 순회하기
    let num = 0;
    for(let x of ani_txt) {
        ani_text += `<span style="animation-delay:${0.1*num}s">${x}</span>`;
        console.log('x:', x);   
        num++;    
    }

    intro_ani.innerHTML = ani_text;
    
    
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