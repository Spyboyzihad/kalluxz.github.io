document.getElementById('bt').addEventListener('click', function() {
    document.querySelector('.bg_blur').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg_blur').style.display = 'none';
});