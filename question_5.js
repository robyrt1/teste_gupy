const reverse = (str) => {
  let newWord = "";
  for (let indice = str.length - 1; indice >= 0; indice--) {
    newWord += str[indice];
  }
  return newWord;
};

console.log(reverse("rubia"));
