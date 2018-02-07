let list = document.getElementById('list');
const lessthan20 = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



// 101+
for (let z = 0; z < 10; z++) {
  if (z > 0) {
    let number = document.createElement('li');
    number.textContent = lessthan20[z] + ' hundred';
    list.appendChild(number);
  }
  // 0-19
  for (let i = 1; i <= lessthan20.length-1 ; i++) {
    let number = document.createElement('li');
    number.textContent = `${z > 0 ? lessthan20[z]+' hundred' : ''} ${lessthan20[i]}`;
    list.appendChild(number);
  }

  // 20-99
  for (let i = 0; i < tens.length; i++) {
    for (let j = 0; j < 10; j++) {
      let number = document.createElement('li');
      number.textContent = `${z > 0 ? lessthan20[z]+' hundred' : ''} ${tens[i]} ${lessthan20[j]}`;
      list.appendChild(number);
    }
  }
}
let number = document.createElement('li');
number.textContent = 'one thousand';
list.appendChild(number);
