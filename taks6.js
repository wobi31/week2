function integer(number){
  let toNumber = number.toString().split('0')
  let pengurutan = toNumber.map(el => {
    return el.split(' ').sort().join(' ')
  })
  return pengurutan.join('');
}
console.log(integer(5956560159466056))