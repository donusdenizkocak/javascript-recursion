const express = require('express')
const app = express();
app.use(express.json());

for (var i=1; i<10; i++){
    if(i==5){continue;}   //skips the re
    console.log(i +", ")
}

let a="10"
console.log(typeof  a)


 a=10
console.log(typeof  a)


function us(x, n) {
    let sonuc = 1;
    // x'in x defa kendisiyle çarpımı.
    for(let i = 0; i < n; i++) {
      sonuc *= x;
    }
  
    return sonuc;
  }
  
  alert( us(2, 3) ); // 8


  function us(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * us(x, n - 1);
    }
  }
  
  alert( us(2, 3) ); // 8


  let firma = {
    satis: [{
      adi: 'Ahmet',
      maasi: 1000
    }, {
      adi: 'Mehmet',
      salary: 150
    }],
  
    gelistirme: {
      siteler: [{
        adi: 'Mustafa',
        ucret: 200
      }, {
        adi: 'Mazlum',
        ucret: 50
      }],
  
      dahili: [{
        adi: 'Zafer',
        ucret: 1300
      }]
    }
  };
  
  // İşi yapan fonksiyon
  function maaslariTopla(firma) {
    if (Array.isArray(firma)) { // (1). durum
      return firma.reduce((onceki, suanki) => onceki + suanki.salary, 0); // diziyi topla
    } else { // (2.) durum
      let toplam = 0;
      for(let altDep of Object.values(altDep)) {
        sum += maaslariTopla(altDep); // özçağrı ile alt departmanların çağrılması, bunu sum ile topla.
      }
      return sum;
    }
  }
  
  alert(maaslariTopla(firma)); // 2700

app.listen(3030)