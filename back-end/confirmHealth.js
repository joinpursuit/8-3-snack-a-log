const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (fiber === null || protein === null || added_sugar === null) {
    console.log("inside if of confirmHealth");
    return null;
  }

  if ((fiber >= 5 || protein >= 5) && added_sugar <= 5) {
    return true;
  } else {
    return false;
  }
};

module.exports = confirmHealth;
