document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentNode;
      const content = this.nextElementSibling;
      const isActive = item.classList.contains('active');
      
      // Zamykanie wszystkich innych akordeonów
      document.querySelectorAll('.accordion-item').forEach(accordionItem => {
        if (accordionItem !== item) {
          accordionItem.classList.remove('active');
          accordionItem.querySelector('.accordion-content').style.maxHeight = null;
          accordionItem.querySelector('.accordion-header').classList.remove('active');
        }
      });
      
      // Otwórz/zamknij kliknięty akordeon
      if (!isActive) {
        item.classList.add('active');
        this.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        this.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
});