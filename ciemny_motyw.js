// Pobranie przycisku zmiany motywu z HTML
const toggleButton = document.getElementById("toggle-theme");

// Sprawdzenie, czy w localStorage jest zapisany motyw
const savedTheme = localStorage.getItem("theme");

// Jeśli zapisany motyw to "dark", będzie dodana klasa "motyw"
if (savedTheme === "dark") {
  document.body.classList.add("motyw");
}

// Obsługa kliknięcia przycisku
toggleButton.addEventListener("click", () => {
  // Przełączenie klasy 'motyw' na elemencie body
  document.body.classList.toggle("motyw");

  // Zapisywanie nowy stan motywu w localStorage
  if (document.body.classList.contains("motyw")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
