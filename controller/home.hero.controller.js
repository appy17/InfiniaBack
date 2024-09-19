const { heroModel } = require("../model/home.hero.model");

const handleCreateHome = async(req,res) => {
    const data = req.body
    try {
       const herodata = new heroModel(data)
       await herodata.save()
       res.status(200).json({ msg: "hero data added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetHome = async(req,res) => {
    try {
      const heroData = await heroModel.find()  
      res.status(200).json({ msg: "hero  added Successfully!!!", success:true, data:heroData })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateHome = async(req,res) => {

    const {id} = req.params
    try {
      console.log(id); 
      await heroModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "hero  data updated Successfully!!!", success:true })

    } catch (error) {
        res.status(500).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
    handleCreateHome,
    handleGetHome,
    handleUpdateHome
}