$(document).ready(function() {
    $('.btn-modal').trigger('click');
});

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')

var el = document.getElementById("music");
function playAudio() { 
  el.play();
  pause.classList.remove('d-none');
  play.classList.add('d-none');
} 
function pauseAudio() { 
  el.pause();
  pause.classList.add('d-none');
  play.classList.remove('d-none');
}
// Waktu akhir countdown
var countDownDate = new Date("Mar 11, 2023 08:30:00").getTime();

// Update countdown setiap 1 detik
var x = setInterval(function() {

  // Get tanggal dan waktu saat ini
  var now = new Date().getTime();

  // Hitung jarak waktu antara sekarang dan waktu akhir countdown
  var distance = countDownDate - now;

  // Hitung waktu yang tersisa dalam hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan waktu yang tersisa dalam elemen dengan id "countdown"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika waktu countdown sudah berakhir, tampilkan pesan
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Countdown Telah Berakhir";
  }
}, 1000);

function copy_bca1() {
    document.getElementById("bca1").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}

function copy_bca2() {
    document.getElementById("bca2").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}