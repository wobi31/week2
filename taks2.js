function getDataFromServer(status, callback) {
  setTimeout(function () {
    if (status) {
      callback(["product 1", "product 2", "product 3"], null);
    } else {
      const err = new Error("failed to fetch data");
      err.name = "Error";
      callback(null, err);
    }
  }, 3000);
}

function prosesData(ress, error) {
  try {
    if (ress) {
      console.log(ress);
    } else {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
}

getDataFromServer(false, prosesData);
