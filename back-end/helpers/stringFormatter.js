const stringFormatter = (string) => {
  const splitString = string.split(" ");
  const keepSameOrder = [];

  for (let word of splitString) {
    if (word.length > 2) {
      const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      keepSameOrder.push(newWord);
    } else {
      const keepWord = word;
      keepSameOrder.push(keepWord);
    }
  }
  return keepSameOrder.join(" ");
};

module.exports = { stringFormatter };
