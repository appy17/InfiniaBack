const { BrandsModel } = require("../model/brands.model")


const handleCreatebrands = async(req,res) => {
    const data = req.body
    console.log("Frontend data ",data)
    try {
        const brands = new BrandsModel(data)
        
        await brands.save()
        console.log("hiiiiii");
       res.status(200).json({ msg: "brands added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetbrands = async(req,res) => {
    try {
      const brands = await BrandsModel.find()  
      res.status(200).json({ msg: "brands get Successfully!!!", success:true, data:brands })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdatebrands = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await BrandsModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "brands updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
handleCreatebrands,
handleGetbrands,
handleUpdatebrands
}