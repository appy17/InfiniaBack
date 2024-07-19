const { AboutHeadModel } = require("../model/about.head.model")
const { ProductModel } = require("../model/products.model")


const handleCreateproduct = async(req,res) => {
    const data = req.body
    try {
       const product = new ProductModel(data)
       await product.save()
       res.status(200).json({ msg: "product added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetproduct = async(req,res) => {
    try {
      const product = await ProductModel.find()  
      res.status(200).json({ msg: "product get Successfully!!!", success:true, data:product })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateproduct = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await ProductModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "product updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
handleCreateproduct,
handleGetproduct,
handleUpdateproduct
}