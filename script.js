// Data Menu (Bisa ditambah/diubah dengan mudah)
const menuData = [
  {
    nama: "Kopi Susu Gula Aren",
    kategori: "minuman",
    harga: 18000,
    deskripsi: "Espresso, susu segar, dan gula aren asli.",
    gambar: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300",
    tersedia: true
  },
  {
    nama: "Roti Bakar Cokelat Keju",
    kategori: "snack",
    harga: 15000,
    deskripsi: "Roti bakar tebal dengan limpahan keju dan meses.",
    gambar: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=300",
    tersedia: true
  },
  {
    nama: "Nasi Goreng Special",
    kategori: "makanan",
    harga: 25000,
    deskripsi: "Nasi goreng ayam dengan telur mata sapi dan kerupuk.",
    gambar: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300",
    tersedia: false
  },
  {
    nama: "Matcha Latte",
    kategori: "minuman",
    harga: 22000,
    deskripsi: "Teh hijau jepang berkualitas dengan campuran susu gurih.",
    gambar: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300",
    tersedia: true
  }
];

let selectedCategory = "semua";

// Fungsi untuk menampilkan menu
function renderMenu(items) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Menu tidak ditemukan...</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}">
      <div class="card-details">
        <div class="card-title">${item.nama}</div>
        <div class="card-desc">${item.deskripsi}</div>
        <div class="card-price">Rp ${item.harga.toLocaleString('id-ID')}</div>
        ${!item.tersedia ? '<span class="badge-habis">❌ Stok Habis</span>' : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter Berdasarkan Kategori
function filterCategory(category, btnElement) {
  selectedCategory = category;

  // Ubah status tombol aktif
  document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  filterMenu();
}

// Filter Berdasarkan Pencarian & Kategori
function filterMenu() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  const filtered = menuData.filter(item => {
    const matchCategory = selectedCategory === "semua" || item.kategori === selectedCategory;
    const matchSearch = item.nama.toLowerCase().includes(searchText) || item.deskripsi.toLowerCase().includes(searchText);
    return matchCategory && matchSearch;
  });

  renderMenu(filtered);
}

// Tampilkan semua menu saat pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuData);
});
