let a = [1, 7, 6, 2, 12, 3, 8, 11];

let pairs = [];

for (let i = 0; i < a.length - 2; i++) {
  for (let j = i + 1; j < a.length - 1; j++) {
    for (let k = j + 1; k < a.length; k++) {
      if (a[i] !== a[j] && a[i] !== a[k] && a[j] !== a[k] && a[i] + a[j] + a[k] === 13) {
        pairs.push([a[i], a[j], a[k]]);
      }
    }
  }
}

console.log(pairs);