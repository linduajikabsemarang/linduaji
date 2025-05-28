// Fungsi untuk validasi form pendaftaran
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Ambil nilai dari input
        const fullName = document.getElementById('fullName').value;
        const idNumber = document.getElementById('idNumber').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;

        // Validasi sederhana untuk memastikan form diisi dengan benar
        if (!fullName || !idNumber || !dob || !address || !email || !phone || !gender) {
            alert('Semua kolom harus diisi!');
            return;
        }

        // Kirim data (simulasi)
        alert(`Terima kasih, ${fullName}. Pendaftaran berhasil!`);
        
        // Reset form setelah submit
        form.reset();
    });
});

// Animasi gambar galeri untuk responsif
window.addEventListener('resize', function() {
    let images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.style.transition = 'transform 0.3s ease';
    });
});
