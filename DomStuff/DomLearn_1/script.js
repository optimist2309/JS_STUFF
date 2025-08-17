function addRipple(e) {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const d = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - d / 2;
      const y = e.clientY - rect.top - d / 2;

      const ripple = document.createElement('span');
      ripple.setAttribute('style', `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${d}px;
        height: ${d}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,.5) 0%, rgba(255,255,255,.25) 30%, rgba(255,255,255,0) 70%);
        transform: scale(0);
        opacity: .9;
        pointer-events: none;
        transition: transform .6s ease, opacity .8s ease;
        z-index: 0;
      `);
      btn.appendChild(ripple);

      // Trigger the transition
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(2.8)';
        ripple.style.opacity = '0';
      });

      ripple.addEventListener('transitionend', () => ripple.remove());
    }

document.querySelector('#wowBtn').addEventListener('click', function(e) 
{ document.querySelector('body').style.backgroundColor = '#090000f7';
});



