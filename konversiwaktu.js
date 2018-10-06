function konversiMenit(menit) {
  var a = Math.floor(menit / 60);
  var b = (menit % 60).toString().length === 1 ? '0' + Math.floor(menit % 60) : Math.floor(menit % 60);

  return a + ":" + b;
}
console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))

/* TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
*/