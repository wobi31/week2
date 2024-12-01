// function Reverseword(string){
// return string.split(" ").reverse().join(' ');
// }
// console.log(Reverseword('Saya Belajar Javascript'))

// function cekPalindrom(str) {
// const newstr1 = str.toLowerCase()
// const newStr2 = newstr1.split('')
// const newstr3 = '';
// for(let i = 0; i<newStr2.length; i++){
// if(newStr2[i] !== ' '){
// newstr3 += newStr2[i];
// }
// }
// const newstr4 = '';
// for(let j = newstr3.length -1; j >= 0; j--){
// newstr4 += newstr3[j];
// }
// if (newstr3 === newstr4) {
// return `kata palindrom ${result}`;
// } else {
// return `kata bukan palindrom ${result}`;
// }
// }
// console.log(cekPalindrom("Malam"));
// console.log(cekPalindrom("guuk"));

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
  // Buat versi terbalik dari kata tersebut
  let newstr4 = "";
  for (var j = newstr3.length - 1; j >= 0; j--) {
    newstr4 += newstr3[j];
  }
  // Bandingkan kedua versi
  if(newstr3 === newstr4){
    return `kata adalah palindrom ${str}`
  } else {
    return `kata bukan palindrom`
  }
}

// console.log(cekpalindrome('Malam'))
console.log(cekpalindrome('Kuda')); 
