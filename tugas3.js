const cekangBarang = (Barang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Databarang = ["monitor", "kybord", "pc", "mouse", "meja kantor", "kursi kantor"];
      const result = Databarang.find((el) => el == Barang);
      if (result) {
        resolve(`${result} barang ada`);
      } else {
        reject(`data not found`);
      }
    }, 1000);
  });
};
// 
cekangBarang("monitor").then((ress) => {
  console.log(ress);
}).catch((err) => {
  console.log(err)
})


const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Day = ["senin", "selasa", "rabu", "kamis", "jum'at"];
      const cek = Day.find((el) => el == day);
      if (cek) {
        resolve(`hari ini adalah hari kerja ${cek}`);
      } else {
        reject(`bukan hari kerja`);
      }
    }, 1000);
  });
};

cekHariKerja("minggu").then((ress) => {
  console.log(ress);
}).catch((err) => {
  console.log(err)
})


// fetching data
fetch("https://jsonplaceholder.typicode.com/users")
.then((ress) => ress.json())
.then((data) => {
const getName = data.map(result => console.log(result.name))
return getName;
});