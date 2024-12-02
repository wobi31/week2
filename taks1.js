function fetchData(status){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(status === true){
        resolve("Data berhasil di ambil")
      } else{
        reject('Data gagal di ambil')
      }
    }, 3000)
  })
}

fetchData(true)
.then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});