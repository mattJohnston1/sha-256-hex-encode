const { createHash } = require('crypto');
const { encode, decode } = require('hex-encode-decode')

String.prototype.hexEncode = function(){
    return encode(this)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function makeRandomWord() {
  let string = "";
  for (let i = 0; i<15; i++) {
    // string += String.fromCharCode(getRandomInt(65, 90));
    string += String.fromCharCode(getRandomInt(65, 210));
  }
  return string;
}

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

function endsInZeroes(string) {
    let zeroCount = 0;
    for (let i = string.length-1; i>=0; i--) {
        if (string[i]==='0') {
            zeroCount++;
        } else {
            break;
        }
    }
    console.log(zeroCount);
    return zeroCount >= 4;
}

let hexEncoded = makeRandomWord().hexEncode()
let found = true;
while(!found) {
    if(endsInZeroes(hash(hexEncoded))){
        found = true;
    } else {
        console.log(hash(hexEncoded))
        hexEncoded = makeRandomWord().hexEncode()
    }
}

// console.log("hex encoded with 2 0: ", hexEncoded);
// console.log("hex encoded sha256 with 22 0's", hash(hexEncoded));


