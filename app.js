document.addEventListener('mousemove',(e)=>{
    const mouseX =e.clientX;
    const mouseY =e.clientY;

    const target = document.getElementById('target');
    const rekt = target.getBoundingClientRect();
    const targetX = rekt.left+rekt.width/2;
    const targetY = rekt.top+rekt.height/2;

    const angleDeg = angle(mouseX,mouseY,targetX,targetY);


    console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
});

function angle(cx,cy,ex,ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180/Math.PI;
    return deg;
}