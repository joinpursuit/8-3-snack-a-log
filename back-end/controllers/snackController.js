const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack , deleteSnack, createSnack, updateSnack} = require("../queries/snacks.js");
const confirmHealth = require("../confirmHealth.js");

snacks.get("/", async (req, res) => {
  try {
    ;
    const allSnacks = await getAllSnacks();
    const test = {success: true, payload:allSnacks};
    if (allSnacks[0]) {
      res.status(200).json(test);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (err) {
    return err;
  }
});

snacks.get("/:id", async (req,res) =>{
    const { id } = req.params;
    try{
        const snack = await getOneSnack(id);
        const testId = {success: true, payload: snack};
        if(snack.id){
            res.status(200).json(testId);
        } else {
            res.status(404).json({success:false, payload: "not found"});
        }
    }catch(err){
        console.log(err);
    }

});

function capitalization(str){
  return str.toLowerCase().split(" ").map(el =>{
    if(el.length > 2){
      return el[0].toUpperCase() + el.slice(1);
    }else{
      return el;
    }
  }).join(" ");
}

snacks.post("/", async (req, res)=>{
    let { body } = req;
    try{
      if (!body.name ){
        res.status(422).json({success: false, payload: "Must include name field"});
        return;
      }
      if(!body.image){
        body = {...body, image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"}
      }

      body = {...body, name:capitalization(body.name), is_healthy: confirmHealth(body)};


      const createdSnack = await createSnack(body);
      const testPost = {success: true, payload: createdSnack};
        
        if(createdSnack.id){
            res.status(200).json(testPost);
        }else {
            res.status(500).json({error: "Snack creation error"});
        }
    } catch(err){
        console.log(err);
    }
})

snacks.delete("/:id",async(req,res)=>{
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  const testDeleted = {success: true, payload: deletedSnack};
  if(deletedSnack.id){
      res.status(200).json(testDeleted);
  }else{
      res.status(404).json({success: false, payload: "undefined"});
  }
});

snacks.put("/:id", async(req,res)=>{
  const { id } = req.params;
  let { body } = req;
  body = {...body, name:capitalization(body.name), is_healthy: confirmHealth(body)}
  const updatedSnack = await updateSnack(id, body);
  if(updatedSnack.id){
    res.status(200).json({success: true, payload: updatedSnack})
  } else{
    res.status(404).json({success: false, payload: "error"})
  }
})


module.exports = snacks;