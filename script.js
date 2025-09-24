class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];     // final
    this.daftarSementara = [];     // tampungan sebelum submit
  }

  tambahSementara(nama, telepon, kendaraan) {
    let p = new Pelanggan(nama, telepon, kendaraan);
    this.daftarSementara.push(p);
    this.tampilkanSementara();
  }

  hapusSementara(index) {
    this.daftarSementara.splice(index, 1);
    this.tampilkanSementara();
  }

  tampilkanSementara() {
    let tbody = document.getElementById("tabelPelanggan");
    tbody.innerHTML = "";
    this.daftarSementara.forEach((p, i) => {
      tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${p.nama}</td>
          <td>${p.nomorTelepon}</td>
          <td>${p.kendaraanDisewa}</td>
          <td><button class="btn danger" onclick="sistem.hapusSementara(${i})">Hapus</button></td>
        </tr>`;
    });
  }

  submitSemua() {
    this.daftarPelanggan.push(...this.daftarSementara);
    this.daftarSementara = []; // kosongkan tabel sementara
    this.tampilkanSementara();
    alert("✅ Semua data berhasil disubmit!");
    console.log("Data final:", this.daftarPelanggan);
  }
}

let sistem = new SistemTransportasi();

// Tambah ke tabel sementara
document.getElementById("addBtn").addEventListener("click", () => {
  let nama = document.getElementById("nama").value;
  let telepon = document.getElementById("telepon").value;
  let kendaraan = document.getElementById("kendaraan").value;

  if (nama && telepon && kendaraan) {
    sistem.tambahSementara(nama, telepon, kendaraan);
    document.getElementById("formSewa").reset();
  } else {
    alert("⚠️ Harap isi semua data!");
  }
});

// Submit semua
document.getElementById("submitBtn").addEventListener("click", () => {
  if (sistem.daftarSementara.length > 0) {
    sistem.submitSemua();
  } else {
    alert("Tidak ada data untuk disubmit!");
  }
});
