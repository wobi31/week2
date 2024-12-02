function Fazzfood(harga, voucher, jarak, pajak) {
  const voucher1 = "FAZZFOOD50";
  const voucher2 = "DITRAKTIR60";
  // pajak = true;
  if(pajak == true){
     `${harga * 0.05}`;
  } else {
     `${harga * 0}`;
  }
  // if(jarak == 2){
    // jarak = 5000; //2km pertama
  // } else
  if (voucher === voucher1 !== 50000) {
    return console.log(`anda mendapatkan diskon50% dengan potongan sebesar 50rb ${(harga * 50) / 100}`);
  } else if (voucher === voucher2 !== 25000) {
    return console.log(`anda mendapatkan diskon60% dengan potongan sebasar 30rb ${harga * 60 /100}`);
  } else {
    return console.log(`harga ${harga} tidak mendapatkan diskon`)
  };

  // if(jarak > 2){
    // 
  // }
}

Fazzfood(50000, 'FAZZFOOD50', false)
// console.log(Fazzfood(50000, 'FAZZFOOD50', true))