document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('hamburger-active');
    });
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 900){
                navList.classList.remove('active');
                hamburger.classList.remove('hamburger-active');
            }
        });
    });
    hamburger.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            hamburger.click();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.press-toggle');
    const content = document.querySelector('.press-content');
    btn.addEventListener('click', function() {
        content.classList.toggle('expanded');
        const expanded = content.classList.contains('expanded');
        btn.textContent = expanded ? 'Show less' : 'Read more';
        btn.setAttribute('aria-expanded', expanded);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bentos = document.querySelectorAll('.bento-fade');
    const revealOnScroll = () => {
        bentos.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});
