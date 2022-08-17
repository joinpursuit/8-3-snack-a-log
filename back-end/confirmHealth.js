const confirmHealth = (snack) => {
  let { fiber, protein, added_sugar } = snack;
  const fiberValue = parseInt(fiber);
  const proteinValue = parseInt(protein);
  const added_sugarValue = parseInt(added_sugar);

  //if fiber, protein, added_sugar is not a num, then can not use them to determine healthy
  if (isNaN(fiberValue) || isNaN(proteinValue) || isNaN(added_sugarValue)) {
    return null;
  }

  //Checks if fiber is above five and added_sugar is below 5
  if (fiberValue >= 5 && added_sugarValue < 5) {
    return true;
  }

  //Checks if protein is above 5 and added_sugar is below 5
  if (proteinValue >= 5 && added_sugarValue < 5) {
    return true;
  }

  //Checks if protein is above 5 or fiber is above five and added_sugar is below 5
  if ((proteinValue >= 5 || fiberValue >= 5) && added_sugarValue < 5) {
    return true;
  }

  // Checks if fiber is above five and added_sugar is above 5 (4 ms)
  if (fiberValue >= 5 && added_sugarValue >= 5) {
    return false;
  }

  //Checks if protein is above 5 and added_sugar is above 5
  if (proteinValue >= 5 && added_sugarValue >= 5) {
    return false;
  }

  //Checks if protein is above 5 and fiber is above five and added_sugar is above 5
  if (proteinValue >= 5 && fiberValue >= 5 && added_sugarValue >= 5) {
    return false;
  }

  return false;
};

module.exports = confirmHealth;
