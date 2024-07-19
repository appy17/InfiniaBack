const { BlogModel } = require("../model/blog.model")


const handleCreateblog = async(req,res) => {
    const data = req.body
    try {
       const blog = new BlogModel(data)
       await blog.save()
       res.status(200).json({ msg: "blog added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetblog = async(req,res) => {
    try {
      const blog = await BlogModel.find()  
      res.status(200).json({ msg: "blog get Successfully!!!", success:true, data:blog })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateblog = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await BlogModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "blog updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
handleCreateblog,
handleGetblog,
handleUpdateblog
}