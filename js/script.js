// Menambahkan event listener pada form untuk menghitung luas saat form disubmit
document.getElementById("calculator-form").addEventListener("submit", function (event) {
  event.preventDefault();
  hitungLuas();
});

// Menambahkan event listener pada form untuk menghitung keliling saat form disubmit
document.getElementById("calculator-form-keliling").addEventListener("submit", function (event) {
  event.preventDefault();
  hitungKeliling();
});

// Menambahkan event listener pada tombol reset untuk mereset form
document.getElementById("reset-button").addEventListener("click", function (event) {
  event.preventDefault();
  resetForm();
});

// Fungsi untuk menghitung luas persegi
function hitungLuas() {
  var sisi = document.getElementById("sisi-luas").value;

  // Validasi input
  if (sisi <= 0) {
    document.getElementById("output_luas").innerHTML = "Nilai tidak boleh <= 0";
    return;
  }

  var luas = sisi * sisi;
  var rumus = "L = S x S";
  var hasil = "L = " + sisi + " x " + sisi + "\n";
  hasil += "L = " + luas;
  document.getElementById("output_luas").innerHTML = rumus + "<br>" + hasil;
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
  var sisi = document.getElementById("sisi-keliling").value;

  // Validasi input
  if (sisi <= 0) {
    document.getElementById("output_keliling").innerHTML = "Nilai tidak boleh <= 0";
    return;
  }

  var keliling = 4 * sisi;
  var rumus = "K = 4 x S";
  var hasil = "K = 4 x " + sisi + "\n";
  hasil += "K = " + keliling;
  document.getElementById("output_keliling").innerHTML = rumus + "<br>" + hasil;
}

// Fungsi untuk mereset form
function resetForm() {
  document.getElementById("calculator-form").reset(); // Mereset form untuk hitung luas
  document.getElementById("calculator-form-keliling").reset(); // Mereset form untuk hitung keliling
  document.getElementById("output_luas").innerHTML = ""; // Menghapus hasil luas
  document.getElementById("output_keliling").innerHTML = ""; // Menghapus hasil keliling
}