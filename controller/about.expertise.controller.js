const { AboutExpertiseModel } = require("../model/about.expertise.model")


const handleCreateAboutExpertise= async(req,res) => {
    const data = req.body
    try {
       const about = new AboutExpertiseModel(data)
       await about.save()
       res.status(200).json({ msg: "about expertise added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetAboutExpertise = async(req,res) => {
    try {
      const about = await AboutExpertiseModel.find()  
      res.status(200).json({ msg: "about expertise get Successfully!!!", success:true, data:about })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateAboutExpertise = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await AboutExpertiseModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "about expertise updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
handleCreateAboutExpertise,
handleGetAboutExpertise,
handleUpdateAboutExpertise
}