let accordion = Array.from(document.querySelectorAll('.accordion__content'));
let q;
let a;

accordion.forEach((question) => {
  question.addEventListener('click', (e) => {
    q = question.querySelector('.accordion__q h2');
    a = question.querySelector('.accordion__a');
    a.classList.toggle('hide');
    qColor();
  });
});

let qColor = () => {
  if (!a.classList.contains('hide')) {
    q.style.fontWeight = '700';
  } else {
    q.style.fontWeight = '400';
  }
};
