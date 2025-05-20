document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // zatrzymaj domyślne wysyłanie formularza

    // Pobierz wartości pól
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    // Prosta walidacja
    if (name.length < 3) {
      formMessage.textContent = "Imię musi mieć co najmniej 3 znaki.";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Podaj poprawny adres email.";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Wiadomość musi mieć co najmniej 10 znaków.";
      return;
    }

    // Jeśli walidacja OK
    formMessage.style.color = "green";
    formMessage.textContent = "Formularz został poprawnie wysłany!";

    // Opcjonalnie: wyczyść formularz
    this.reset();
  });
