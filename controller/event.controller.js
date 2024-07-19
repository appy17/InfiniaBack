const { EventModel } = require("../model/event.model")


const handleCreateevent = async(req,res) => {
    const data = req.body
    try {
       const events = new EventModel(data)
       await events.save()
       res.status(200).json({ msg: "event added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetevent = async(req,res) => {
    try {
      const event = await EventModel.find()  
      res.status(200).json({ msg: "event get Successfully!!!", success:true, data:event })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateevent = async(req,res) => {
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
handleCreateevent,
handleGetevent,
handleUpdateevent
}