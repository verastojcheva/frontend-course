const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });
}

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 4);
    }
});

document.querySelectorAll('.site-nav a').forEach((a) => {
    a.addEventListener('click', () => {
        if (nav) nav.classList.remove('open');
    });
});

const y = document.getElementById('yearNow');
if (y) y.textContent = String(new Date().getFullYear());

const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('newsletterEmail');
const msg = document.getElementById('newsletterMsg');

function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

if (form && emailInput && msg) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = emailInput.value.trim();

        if (!isEmail(v)) {
            msg.textContent = 'Please enter a valid email.';
            msg.style.color = '#b00020';
            emailInput.focus();
            return;
        }

        try {
            const list = JSON.parse(localStorage.getItem('subscribers') || '[]');
            if (list.indexOf(v) === -1) list.push(v);
            localStorage.setItem('subscribers', JSON.stringify(list));
        } catch (err) {}

        msg.textContent = 'Subscribed! Check your inbox for a welcome note.';
        msg.style.color = '#0a7f3f';
        emailInput.value = '';
        emailInput.disabled = true;
        const btn = form.querySelector('button');
        if (btn) btn.setAttribute('disabled', 'true');
    });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach((o) => o.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

const tabs = document.querySelectorAll('.faq-tabs button');
if (tabs.length) {
    tabs.forEach((btn) => {
        btn.addEventListener('click', () => {
            tabs.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.faq-item').forEach((it) => {
                if (filter === 'all' || it.getAttribute('data-category') === filter) {
                    it.style.display = '';
                } else {
                    it.style.display = 'none';
                }
            });
        });
    });
}