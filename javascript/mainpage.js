const content = 'front-end를 공부하는 개발자 유병진입니다.';
const text = document.querySelector('.text');
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === '\n' ? '<br/>' : txt;
  if (i > content.length) {
    text.textContent = '';
    i = 0;
  }
}
setInterval(typing, 200);
