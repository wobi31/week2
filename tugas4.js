function cekpalindrome(str) {
  // Ubah semua huruf menjadi huruf kecil
  let newstr1 = str.toLowerCase();
  // Hilangkan spasi dengan filter dan join
  let newstr2 = newstr1.split("");
  let newstr3 = "";
  for (var i = 0; i < newstr2.length; i++) {
    if (newstr2[i] !== " ") {
      newstr3 += newstr2[i];
    }
  }
  // versi terbalik dari teks
  let newstr4 = "";
  for (var j = newstr3.length - 1; j >= 0; j--) {
    newstr4 += newstr3[j];
  }
  // membandingkan dua versi
  if(newstr3 === newstr4){
    return `kata adalah palindrom ${str}`
  } else {
    return `kata bukan palindrom`
  }
}

// console.log(cekpalindrome('Malam'))
console.log(cekpalindrome('Kuda')); 

//riverse balikan kata
function Reverseword(string){
  return string.split(" ").reverse().join(' ');
  }
  console.log(Reverseword('Saya Belajar Javascript'))
  