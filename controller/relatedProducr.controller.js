
const { RelatedProductModel } = require("../model/relatedProduct.model")


const handleCreaterelatedproduct = async(req,res) => {
    const data = req.body
    try {
       const relatedProduct = new RelatedProductModel(data)
       await relatedProduct.save()
       res.status(200).json({ msg: "relatedProduct added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetrelatedproduct = async(req,res) => {
    try {
      const relatedProduct = await RelatedProductModel.find()  
      res.status(200).json({ msg: "relatedproduct get Successfully!!!", success:true, data:relatedProduct })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdaterelatedproduct = async(req,res) => {
    // create logic  
    const { id } = req.params
    console.log(req.body)
    try { 
        await RelatedProductModel.findByIdAndUpdate({ _id: id }, req.body);
        
      res.status(200).json({ msg: "relatedproduct updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ error: error.message, message:"Internal Server Error" })
        console.log(error.message) 
    }
}


module.exports = {
handleCreaterelatedproduct,
handleGetrelatedproduct,
handleUpdaterelatedproduct
}