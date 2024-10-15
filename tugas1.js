// Data array dengan objek berisi informasi setiap karyawan
const dataKaryawan = [
    { nama: 'Data 1', golongan: 'A', status: 'NIKAH' },
    { nama: 'Data 2', golongan: 'B', status: 'BELUM' },
    { nama: 'Data 3', golongan: 'C', status: 'NIKAH' },
    { nama: 'Data 4', golongan: 'B', status: 'BELUM' },
    { nama: 'Data 5', golongan: 'A', status: 'NIKAH' },
    { nama: 'Data 6', golongan: 'B', status: 'BELUM' },
    { nama: 'Data 7', golongan: 'C', status: 'NIKAH' },
    { nama: 'Data 8', golongan: 'B', status: 'BELUM' },
    { nama: 'Data 9', golongan: 'A', status: 'NIKAH' },
    { nama: 'Data 10', golongan: 'A', status: 'BELUM' }
  ];
  
  // Fungsi untuk mendapatkan gaji pokok berdasarkan golongan
  function getGajiPokok(golongan) {
    switch (golongan) {
      case 'A':
        return 10000000;
      case 'B':
        return 8000000;
      case 'C':
        return 5000000;
      default:
        return 0;
    }
  }
  
  // Fungsi untuk mendapatkan tunjangan berdasarkan golongan dan status pernikahan
  function getTunjangan(golongan, status) {
    if (status === 'NIKAH') {
      switch (golongan) {
        case 'A':
          return 2000000;
        case 'B':
          return 1500000;
        case 'C':
          return 1000000;
        default:
          return 0;
      }
    } else {
      return 0;
    }
  }
  
  // Fungsi untuk menghitung total gaji (gaji pokok + tunjangan)
  function getTotal(gajiPokok, tunjangan) {
    return gajiPokok + tunjangan;
  }
  
  // Memproses data dan menampilkan hasil
  dataKaryawan.forEach((karyawan) => {
    const gajiPokok = getGajiPokok(karyawan.golongan);
    const tunjangan = getTunjangan(karyawan.golongan, karyawan.status);
    const total = getTotal(gajiPokok, tunjangan);
  
    console.log(`Nama: ${karyawan.nama}`);
    console.log(`Golongan: ${karyawan.golongan}`);
    console.log(`Status: ${karyawan.status}`);
    console.log(`Gaji Pokok: Rp. ${gajiPokok.toLocaleString()}`);
    console.log(`Tunjangan: Rp. ${tunjangan.toLocaleString()}`);
    console.log(`Total: Rp. ${total.toLocaleString()}`);
    console.log('-----------------------------');
  });
  