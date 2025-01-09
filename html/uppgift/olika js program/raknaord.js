function countWords(text) {
  const array = text
    .toLowerCase()
    .replace(/[!?,.]/g, "")
    .split(" ");
  console.log(array);

  const textlista = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (textlista[element]) {
      textlista[element]++;
    } else textlista[element] = 1;
  }

  return textlista;
}

console.log(countWords("Hej världen hej elever hej!"));
