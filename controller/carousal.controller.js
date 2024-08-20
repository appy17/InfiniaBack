const { CarousalModel } = require("../model/Carousal.model");


const handleCreatecarousal = async(req,res) => {
    const data = req.body
    console.log('Frontend Data', data);
    try {
       const carousal = new CarousalModel(data)
       await carousal.save()
       res.status(200).json({ msg: "carousal added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetcarousal = async (req, res) => {
   
    try {
      const carousal = await CarousalModel.find()  
      res.status(200).json({ msg: "carousal get Successfully!!!", success:true, data:carousal })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateevent = async (req, res) => {
     console.log("Front end data", req.body);
    // create logic  
    const {id} = req.params
    try { 
      await EventModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "event updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
     handleCreatecarousal,
     handleGetcarousal
     }