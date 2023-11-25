const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
/*
untuk membuat suatu aksi saat elemen dengan class "menu-toggle input" di klik. Ketika elemen tersebut diklik, kode akan menambahkan atau menghapus class "slide" pada elemen <nav>.
Baris pertama const menuToggle = document.querySelector('.menu-toggle input'); mendefinisikan variabel menuToggle yang akan menyimpan referensi ke elemen yang memiliki class "menu-toggle input" menggunakan metode querySelector().
Baris kedua const nav = document.querySelector('nav ul'); mendefinisikan variabel nav yang akan menyimpan referensi ke elemen <ul> di dalam elemen <nav> menggunakan metode querySelector().
Baris ketiga menuToggle.addEventListener('click', function () { menambahkan event listener pada elemen menuToggle untuk mendengarkan event "click".
Pada baris keempat, nav.classList.toggle('slide'); digunakan untuk menambahkan class "slide" pada elemen nav jika class tersebut belum ada, atau menghapusnya jika sudah ada. Dengan demikian, saat elemen menuToggle diklik, class "slide" akan ditambahkan atau dihapus dari elemen nav, sehingga memberikan efek slide pada elemen tersebut.
Secara keseluruhan, kode ini berfungsi untuk membuat efek slide pada elemen <nav> saat elemen dengan class "menu-toggle input" diklik.
*/
