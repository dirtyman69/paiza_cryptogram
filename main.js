process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const line1 = lines[0].split(" ");
    const n = line1[0];
    const cryptogram = line1[1];
    const split_word = cryptogram.split("");
    
    const line2 = lines[1].split(" ");
    
    let word_number = line2.length;
    
    // for(let j = 0; j < word_number; j++){
        
    // }
    let first_word = line2[0];
    let first_word_split = line2[0].split("");
    
    
    var first_array = [];
    var answer = [];
    
    const first_word_nunber = first_word_split.length;
    
    for(let i = 0; i < first_word_nunber; i++){
    var result = split_word.indexOf(first_word_split[i]); ///h=15
        first_array.push(result);
        answer.push(String.fromCharCode(97+result));
    }
    
    var word = answer.join(''); //paiza
    console.log(word);
    console.log(word_number);
  
});
