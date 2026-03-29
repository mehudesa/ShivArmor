const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const yearTarget = document.querySelector('[data-year]');
const form = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
}

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const details = String(formData.get('details') || '').trim();

    const subject = encodeURIComponent(`Consultation request from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        '',
        'Project details:',
        details,
      ].join('\n'),
    );

    formStatus.textContent = 'Opening your email app with the request details.';
    window.location.href = `mailto:mehudesa@gmail.com?subject=${subject}&body=${body}`;
  });
}