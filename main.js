var wra = document.getElementsByClassName('wrapper')[0];
var move1 = document.getElementsByClassName('move1')[0];
var move2 = document.getElementsByClassName('move2')[0];
var move3 = document.getElementsByClassName('move3')[0];
var move4 = document.getElementsByClassName('move4')[0];
var move5 = document.getElementsByClassName('move5')[0];
var move6 = document.getElementsByClassName('move6')[0];
console.log(move5);
var key = true;
wra.onmouseenter = function (e) {
  // wra.style.animationPlayState = 'paused';
  move1.style.animation = 'move1 4s linear infinite';
  move2.style.animation = 'move2 4s linear infinite';
  move3.style.animation = 'move3 4s linear infinite';
  move4.style.animation = 'move4 4s linear infinite';
  move5.style.animation = 'move5 4s linear infinite';
  move6.style.animation = 'move6 4s linear infinite';

}
wra.onmouseleave = function (e) {
  // wra.style.animationPlayState = 'paused';
  move1.style.animation = '';
  move2.style.animation = '';
  move3.style.animation = '';
  move4.style.animation = '';
  move5.style.animation = '';
  move6.style.animation = '';
}