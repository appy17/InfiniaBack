const { TestimonialModel } = require("../model/testimonial.model")

const handleCreateTestimonial = async(req,res) => {
    const data = req.body
    try {
       const testimonial = new TestimonialModel(data)
       await testimonial.save()
       res.status(200).json({ msg: "testimonial  added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetTestimonial = async(req,res) => {
    try {
      const testimonial = await TestimonialModel.find()  
      res.status(200).json({ msg: "testimonial get Successfully!!!", success:true, data:testimonial })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateTestimonial = async(req,res) => {
    // create logic  
    const {id} = req.params
    try { 
      await TestimonialModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).json({ msg: "Testimonial updated Successfully!!!", success:true })

    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message) 
    }
}


module.exports = {
   handleCreateTestimonial,
   handleGetTestimonial,
   handleUpdateTestimonial
}