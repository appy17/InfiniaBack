const { heroModel } = require("../model/home.hero.model");
const { OfferingModel } = require("../model/offering.model");

const handleCreateOffering = async(req,res) => {
    const data = req.body
    try {
       const material = new OfferingModel(data)
       await material.save()
       res.status(200).json({ msg: "offering material added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetOffering = async(req,res) => {
    try {
      const material = await OfferingModel.find()  
      res.status(200).json({ msg: "material get Successfully!!!", success:true, data:material })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateOffering = async(req,res) => {
    // create logic  
    const {id} = req.params
    try {
      console.log(id); 
      await OfferingModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "offering material updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
   handleCreateOffering,
   handleGetOffering,
   handleUpdateOffering
}