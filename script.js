// ====== Data Awal (Minimal 5 produk) ======
let produkToko = [
  {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
  {id: 2, nama: "Mouse", harga: 200000, stok: 10},
  {id: 3, nama: "Keyboard", harga: 350000, stok: 7},
  {id: 4, nama: "Monitor", harga: 1500000, stok: 3},
  {id: 5, nama: "Headset", harga: 500000, stok: 8}
];

let nextId = produkToko.length + 1;

// ====== Menampilkan Produk ======
function tampilkanProduk() {
  const tbody = document.getElementById("produkList");
  tbody.innerHTML = "";

  // Destructuring
  produkToko.forEach(({id, nama, harga, stok}) => {
    let row = `<tr>
                 <td>${id}</td>
                 <td>${nama}</td>
                 <td>Rp ${harga.toLocaleString()}</td>
                 <td>${stok}</td>
                 <td><button class="btn danger" onclick="hapusProduk(${id})">Hapus</button></td>
               </tr>`;
    tbody.innerHTML += row;
  });
}

// ====== Menambah Produk (Spread Operator) ======
function tambahProduk(nama, harga, stok) {
  const produkBaru = {id: nextId++, nama, harga, stok};
  produkToko = [...produkToko, produkBaru]; // Spread Operator
  tampilkanProduk();
}

// ====== Menghapus Produk ======
function hapusProduk(id) {
  produkToko = produkToko.filter(p => p.id !== id);
  tampilkanProduk();
}

// ====== Event Listener ======
document.getElementById("addBtn").addEventListener("click", () => {
  const nama = document.getElementById("nama").value;
  const harga = parseInt(document.getElementById("harga").value);
  const stok = parseInt(document.getElementById("stok").value);

  if (nama && harga > 0 && stok > 0) {
    tambahProduk(nama, harga, stok);
    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
  } else {
    alert("Isi semua data dengan benar!");
  }
});

// ====== Contoh Rest Parameter (untuk hitung total stok) ======
function totalStok(...stokList) {
  return stokList.reduce((total, s) => total + s, 0);
}

console.log("Total stok awal:", totalStok(...produkToko.map(p => p.stok)));

// Tampilkan produk saat pertama kali
tampilkanProduk();
