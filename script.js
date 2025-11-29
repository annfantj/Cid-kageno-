document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.glass, .glass-thin, .glass-thick, nav, footer');

    elements.forEach(el => {
        const overlay = el.querySelector('::before');
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const before = el.querySelector('::before');
            if (!before) return;
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
        });
        el.addEventListener('mouseenter', () => {
            const before = el.querySelector('::before');
            if(!before) return;
            el.style.setProperty('--overlay-opacity', '0.6');
        });
        el.addEventListener('mouseleave', () => {
            el.style.setProperty('--overlay-opacity', '0');
        });
    });

    // Card click animation
    const cards = document.querySelectorAll('.glass');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('animate-pulse');
            setTimeout(()=>card.classList.remove('animate-pulse'), 1000);
        });
    });
});
