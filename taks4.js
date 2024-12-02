const palindrom  = (str) =>{
  const newStr = str.split('').reverse().join('')
  if(newStr === str){
      return `${str} kata adalah palindrom;`
  }else{
      return `${str} kata bukan palindrom;`
  }
}

// console.log(palindrom('malam'));
console.log(palindrom('sore'));

//riverse balikan kata
function Reverseword(string){
  return string.split(" ").reverse().join(' ');
  }
  console.log(Reverseword('Saya Belajar Javascript'))