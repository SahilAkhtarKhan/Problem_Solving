// Que : AAAABBBCCDAABB
// Expected Output : 4A3B2C1D2A2B

let data = "AAAABBBCCDAABB";
let count = 1;
let total = "";
for (let i = 0; i < data.length; i++) {
  if (data[i] == data[i + 1]) {
    count++;
  } else {
    total = count + data[i];
    count = 1;
    console.log(total);
  }
}
