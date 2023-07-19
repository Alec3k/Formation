let rondMouseFollower = document.getElementById('mouse-follower');

document.addEventListener('mousemove', () => {
    rondMouseFollower.style.left = event.clientX + 'px';
    rondMouseFollower.style.top = event.clientY + window.scrollY + 'px';
});

window.addEventListener('scroll', () => {
    
});


