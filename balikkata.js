function balikkata(kata)
{
	var kalimat = " "
for (var i = kata.length -1  ; i >= 0 ; i--){
	kalimat = kalimat+kata[i]
}
return kalimat
}
	console.log(balikkata('Hello World and Coders'))
	console.log(balikkata('John Doe'))
	console.log(balikkata('I am a bookworm'))
	console.log(balikkata('Coding is my hobby'))


/* TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
*/