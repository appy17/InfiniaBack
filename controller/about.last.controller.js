const { AboutlastModel } = require("../model/about.last.model")

const handleCreateAboutLast= async(req,res) => {
    const data = req.body
    console.log('sssssssssss',data);
    try {
       const about = new AboutlastModel(data)
       await about.save()
       res.status(200).json({ msg: "about last added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetAboutLast = async(req,res) => {
    try {
      const about = await AboutlastModel.find()  
      res.status(200).json({ msg: "about last get Successfully!!!", success:true, data:about })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateAboutLast = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await AboutlastModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "about last updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
handleCreateAboutLast,
handleGetAboutLast,
handleUpdateAboutLast
}