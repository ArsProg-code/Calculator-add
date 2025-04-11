let display = document.getElementById('layar');

// Menambahkan nilai ke layar
function appendValue(value) {
  display.value += value;
}

// Menghapus isi layar
function clearDisplay() {
  display.value = '';
}

// Menghitung hasil ekspresi
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
