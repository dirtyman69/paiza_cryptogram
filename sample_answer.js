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
    const [n, cryptogram] = lines[0].split(' ');

    const words = lines[1].split(' ');
    const result_words = [];
    words.forEach ( word => { 
        let result_string = '';
        word.split('').forEach ( letter => {
            result_string += decrypt(letter, n, cryptogram);
        })
        result_words.push(result_string);
    })
    console.log(result_words.join(' '));

    function decrypt( letter, n, cryptogram ) {
        // charcode 97 + 0 ~ 23でアルファベットを出せる
        const base_charcode = 97;
        let result = letter;
        for( let i = 0; i < n; i++ ) {
            crypto_index = cryptogram.indexOf(result);
            result = String.fromCharCode(base_charcode + crypto_index);
        }
        return result;
    }
});