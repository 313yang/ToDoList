const toggle = document.querySelector('.toggle'),
    wave = document.querySelector('.wave');


toggle.addEventListener('click', function() {
    this.classList.add('animate');
    setTimeout(() => {
    this.classList.toggle('active');
    wave.classList.toggle('active');
    }, 150);
    setTimeout(() => this.classList.remove('animate'), 300);
    });