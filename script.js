// ===== Data awal (10 orang) =====
let data = [
  { nama: "Muhammad Ihsan", umur: 25, alamat: "Depok", email: "ihsan@gmail.com" },
  { nama: "Feri Ardiansyah", umur: 40, alamat: "Medan", email: "feri@gmail.com" },
  { nama: "Luth Hud", umur: 27, alamat: "Medan", email: "luth@gmail.com" },
  { nama: "Syahrul Mubaroq", umur: 22, alamat: "Cikarang", email: "syahrul@gmail.com" },
  { nama: "Irham Syahputra", umur: 55, alamat: "Medan", email: "irham@gmail.com" },
  { nama: "Shinta N", umur: 22, alamat: "Bogor", email: "shinta@gmail.com" },
  { nama: "Ilham Arifin", umur: 24, alamat: "Medan", email: "arifin@gmail.com" },
  { nama: "Fajar Nugraha", umur: 29, alamat: "Makassar", email: "fajar@gmail.com" },
  { nama: "Dewi Lestari", umur: 26, alamat: "Malang", email: "dewi@gmail.com" },
  { nama: "Rahmat Hidayat", umur: 32, alamat: "Bogor", email: "rahmat@gmail.com" }
];

// ===== Melihat Data (pakai map) =====
function tampilkanData() {
  const tbody = document.getElementById("dataList");
  tbody.innerHTML = "";
  data.map((item, index) => {
    let row = `<tr>
                 <td>${index + 1}</td>
                 <td>${item.nama}</td>
                 <td>${item.umur}</td>
                 <td>${item.alamat}</td>
                 <td>${item.email}</td>
                 <td><button class="btn danger" onclick="hapusData(${index})">Hapus</button></td>
               </tr>`;
    tbody.innerHTML += row;
  });
}

// ===== Menambah Data (push minimal 2 data) =====
function tambahData(nama, umur, alamat, email) {
  data.push({ nama, umur, alamat, email });
  tampilkanData();
}

// ===== Menghapus Data =====
function hapusData(index) {
  data.splice(index, 1);
  tampilkanData();
}

// ===== Event Listener untuk form =====
document.getElementById("formTambah").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let umur = parseInt(document.getElementById("umur").value);
  let alamat = document.getElementById("alamat").value;
  let email = document.getElementById("email").value;

  if (nama && umur && alamat && email) {
    tambahData(nama, umur, alamat, email);
    this.reset();
  } else {
    alert("⚠️ Harap isi semua data!");
  }
});

// ===== Tambahkan minimal 2 data saat load =====
tambahData("Yeni Kusuma", 23, "Bali", "yeni@gmail.com");
tambahData("Imam Setiawan", 31, "Padang", "imam@gmail.com");

// Tampilkan data awal
tampilkanData();
