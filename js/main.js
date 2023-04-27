var ball = document.getElementsByClassName('ball')[0]
var points = document.getElementsByClassName('points')[0]
var points_num = 0
ball.addEventListener('click', () => {
    ball.style.top = Math.floor(Math.random() * (350 - 0 + 1) + 0) + "px";
    ball.style.left = Math.floor(Math.random() * (350 - 0 + 1) + 0) + "px";
    points_num += 200
    points.innerHTML = 'Points: ' + points_num;
})
document.getElementsByClassName('frame')[0].addEventListener('click', () => {
    points_num -= 100
    points.innerHTML = 'Points: ' + points_num;
})
