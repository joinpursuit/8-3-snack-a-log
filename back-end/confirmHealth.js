const confirmHealth = (snack) => {
  //console.log('this is a snack', snack);
  const { fiber, protein, added_sugar } = snack;

  if (
    fiber === undefined ||
    protein === undefined ||
    added_sugar === undefined ||
    fiber === '' ||
    protein === '' ||
    added_sugar === ''
  )
    return null;

  if (added_sugar <= 5 && (fiber >= 5 || protein >= 5)) {
    return true;
  } else {
    return false;
  }
};

module.exports = confirmHealth;
