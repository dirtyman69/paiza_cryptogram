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
    
    const line2 = String(lines[1]);
    const join_word = line2.split(" ").join("");
    
    let first_word = join_word; //hqomqgfsoftiqeaqzigf
    let first_word_split = first_word.split(""); //[ 'h', 'q', 'o', 'm', 'q' ]
    
    
    var first_array = []; //[ 15, 0, 8, 25, 0 ]
    var answer = [];
    
    const first_word_nunber = first_word_split.length; //5 (hqomq)
    
    for(let i = 0; i < first_word_nunber; i++){
    var result = split_word.indexOf(first_word_split[i]); ///h=15
        first_array.push(result);
        answer.push(String.fromCharCode(97+result));
    }
    var array = [];
    var word = lines[1].split(" ");
    var number = word.length; //3
    
    var number_space = [];
    for(let l = 0; l < number; l++){
        number_space.push(word[l].length)
    }
    
    
    var word = String(answer.join('')); //paiza
    
    //空白を追加
    const first_slice = word.slice(0,number_space[0]);
    const add = " ";
    const second_slice = word.slice(number_space[0],number_space[0]+number_space[1]);
    const third_slice = word.slice(number_space[0]+number_space[1]);
    console.log(first_slice+add+second_slice+add+third_slice);
    
    
  
});
