function getDataFromServer(status, callback){
  setTimeout(function(){
    if(status){
      callback(['product 1', 'product 2', 'product 3'], null)
    } else {
      const err = new Error ('failed to fetch data');
      err.name = 'Error';
      callback(null, err)
    }
  }, 3000)
}
getDataFromServer()
.try {
   nonExitentFucntion() 
} catch (error) {
  console.erro(error)
} finally {
  finally
}