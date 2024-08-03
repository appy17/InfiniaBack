const { AboutHeadModel } = require("../model/about.head.model")


const handleCreateAboutHead = async(req,res) => {
    const data = req.body
    try {
       const about = new AboutHeadModel(data)
       await about.save()
       res.status(200).json({ msg: "about added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetAboutHead = async(req,res) => {
    try {
      const about = await AboutHeadModel.find()  
      res.status(200).json({ msg: "about head get Successfully!!!", success:true, data:about })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateAboutHead = async(req,res) => {
    // create logic  
    const {id} = req.params
    console.log(req.body)
    try { 
      await AboutHeadModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "about head updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
 handleCreateAboutHead,
 handleGetAboutHead,
 handleUpdateAboutHead
}