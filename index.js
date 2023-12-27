let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


// Tambahkan script untuk menangani pembelian ke nomor WhatsApp
document.querySelectorAll('.orderNow button').forEach(item => {
  item.addEventListener('click', (e) => {
      // Ganti nomor berikut dengan nomor WhatsApp admin Anda
      const nomorAdmin = '6281234567890';

      // Dapatkan informasi produk
      let parent = e.target.parentNode.parentNode;
      let judulProduk = parent.querySelector('h3').innerHTML;

      // Buat pesan untuk WhatsApp
      let pesanWhatsApp = `Halo, saya ingin memesan produk ${judulProduk}`;

      // Buat URL WhatsApp dengan nomor admin dan pesan
      let urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${encodeURIComponent(pesanWhatsApp)}`;

      // Buka halaman WhatsApp dengan URL yang sudah dibuat
      window.open(urlWhatsApp, '_blank');
  });
});

// Inisialisasi objek keranjang
let keranjang = [];

// Fungsi untuk menambahkan produk ke keranjang
function tambahkanKeKeranjang(judulProduk) {
    keranjang.push({ judul: judulProduk });
    updateJumlahKeranjang();
}

// Fungsi untuk memperbarui jumlah di ikon keranjang
function updateJumlahKeranjang() {
    let jumlahKeranjang = document.querySelector('.jumlahKeranjang');
    jumlahKeranjang.innerHTML = keranjang.length;
}

// Tambahkan event listener pada setiap tombol "Order Now"
document.querySelectorAll('.orderNow button').forEach(item => {
    item.addEventListener('click', (e) => {
        // Dapatkan informasi produk
        let parent = e.target.parentNode.parentNode;
        let judulProduk = parent.querySelector('h3').innerHTML;

        // Tambahkan produk ke keranjang
        tambahkanKeKeranjang(judulProduk);

        // Ganti nomor berikut dengan nomor WhatsApp admin Anda
        const nomorAdmin = '6281234567890';

        // Buat pesan untuk WhatsApp
        let pesanWhatsApp = `Halo, saya ingin memesan produk ${judulProduk}.\n\nProduk sudah ditambahkan ke keranjang.`;

        // Buat URL WhatsApp dengan nomor admin dan pesan
        let urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${encodeURIComponent(pesanWhatsApp)}`;

        // Buka halaman WhatsApp dengan URL yang sudah dibuat
        window.open(urlWhatsApp, '_blank');
    });
});

// Tambahkan event listener pada tombol "Tambah ke Keranjang" di modal
document.querySelector('.btnBeli').addEventListener('click', () => {
    let judulProduk = document.querySelector('.modalTitle').innerHTML;

    // Tambahkan produk ke keranjang
    tambahkanKeKeranjang(judulProduk);

    // Sembunyikan modal setelah menambahkan ke keranjang
    document.querySelector('.btnTutup').click();
});


// Fungsi untuk melakukan pencarian berdasarkan nama produk
function cariProduk() {
  // Dapatkan nilai dari input pencarian
  let kataKunci = document.querySelector('.search input').value.toLowerCase();

  // Dapatkan semua elemen produk
  let produkList = document.querySelectorAll('.product-content');

  // Sembunyikan semua produk
  produkList.forEach((produk) => {
      produk.parentNode.style.display = 'none';
  });

  // Tampilkan produk yang sesuai dengan kata kunci
  produkList.forEach((produk) => {
      let judulProduk = produk.querySelector('h3').innerText.toLowerCase();
      if (judulProduk.includes(kataKunci)) {
          produk.parentNode.style.display = 'block';
      }
  });
}

// Tambahkan event listener pada input pencarian
document.querySelector('.search input').addEventListener('input', cariProduk);
