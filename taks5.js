function appFazzfood(harga, voucher, jarak, pajak) {
  let diskon = 0;
  if (voucher) {
    const voucherKonfir = {
      'FAZZFOOD50': 50,
      'DITRAKTIR60': 60,
    };
    let potongan;
    let potonganMaksimal;
    if (voucher === 'FAZZFOOD50') {
      potonganMaksimal = 50000; // Maksimal potongan 50rb untuk FAZZFOOD50
    } else if (voucher === 'DITRAKTIR60') {
      potonganMaksimal = 30000; // Maksimal potongan 30rb untuk DITRAKTIR60
    }
    potongan = harga * (voucherKonfir[voucher] / 100);
    diskon = Math.min(potongan, potonganMaksimal); // membandingkan kedua nilai dan mengembalikan nilai yang lebih kecil
  }

  let biayaJarak = 0;
  if (jarak > 2) {
    biayaJarak = 5000; // 2km pertama 5000
    biayaJarak += (jarak - 2) * 3000; //+= operator assigmen 1km selanjutnya 3000
  }

  let pajakDikenakan = 0;
  if (pajak) {
    pajakDikenakan = harga * 0.05; //5%
  }

  let subtotal = harga - diskon + biayaJarak;
  let total = subtotal + pajakDikenakan;

  return {
    potonganHarga: diskon, 
    pajakDikenakan,
    biayaJarak: biayaJarak,
    subtotal,
  };
}

let harga = 50000;
let voucher = 'FAZZFOOD50';
let jarak = 10; 
let pajak = true;

let result = appFazzfood(harga, voucher, jarak, pajak);

console.log(`Harga: ${harga}`);
console.log(`voucher: ${voucher}`);
console.log(`Potongan: ${result.potonganHarga}`);
console.log(`Pajak: ${result.pajakDikenakan}`);
console.log(`Jarak: ${result.biayaJarak}`);
console.log('==============='); 
console.log(`Subtotal: ${result.subtotal}`); 

// console.log(appFazzfood(`Harga: ${harga} voucher: ${voucher} Potongan:${potonganHarga} pajak: ${pajakDikenakan} Jarak: ${biayaJarak} ======= Subtotal:${subtotal}`))