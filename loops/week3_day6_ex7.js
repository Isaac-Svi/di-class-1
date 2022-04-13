let names = ['Jack', 'Philip', 'Sarah', 'Amanda', 'Bernard', 'Kyle'];

let firstLetters = [];

for (let i = 0; i < names.length; i = i + 1) {
    let name = names[i];
    firstLetters.push(name[0]);
}

let sortedLetters = firstLetters.sort();

console.log(sortedLetters.join(''));

// let names = ['Jack', 'Philip', 'Sarah', 'Amanda', 'Bernard', 'Kyle'];
// console.log(
//     names
//         .map((x) => x[0])
//         .sort()
//         .join('')
// );
