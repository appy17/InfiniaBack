const EcomagixModel = require("../model/ecomagix.model")



const handleCreateEcomagix = async(req,res) => {
    const data = req.body
    try {
       const ecomagix = new EcomagixModel(data)
       await ecomagix.save()
       res.status(200).json({ msg: "ecomagix added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetEcomagix = async(req,res) => {
    try {
      const blog = await EcomagixModel.find()  
      res.status(200).json({ msg: "ecomagix get Successfully!!!", success:true, data:blog })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateEcomagix = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await EcomagixModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "ecomagix updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
handleCreateEcomagix,
handleGetEcomagix,
handleUpdateEcomagix
}