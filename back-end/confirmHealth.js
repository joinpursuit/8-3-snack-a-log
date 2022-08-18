const confirmHealth = (snack) => {
    const {protein, fiber, added_sugar} = snack;
    if(isNaN(fiber) || isNaN(protein) || isNaN(added_sugar)){
        return null;
    }else if((protein >= 5 || fiber >= 5) && added_sugar < 5){
        return true;
    }else{
        return false;
    }
};

module.exports = confirmHealth;
