function togglePortfolioSections() {
  const portfolioTexts = document.querySelectorAll('.portfolio_text');
  portfolioTexts.forEach((text) => {
    text.classList.toggle('visible');
  });

  const contactSection = document.querySelector('.contact_section');
  contactSection.classList.toggle('adjust-position');
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function scrollToSection(event) {
  const year = event.target.dataset.year;
  const section = document.getElementById(`portfolio-${year}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToContact() {
  const contactSection = document.querySelector('.contact_section');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.profile').addEventListener('click', scrollToTop);
  document
    .querySelector('.portfolio')
    .addEventListener('click', togglePortfolioSections);

  const portfolioTexts = document.querySelectorAll('.portfolio_text');
  portfolioTexts.forEach((text) => {
    text.addEventListener('click', scrollToSection);
  });

  document.querySelector('.contact').addEventListener('click', scrollToContact);
});
