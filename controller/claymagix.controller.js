const ClaymagixModel = require("../model/claymagix.model");



const handleCreateClaymagix = async(req,res) => {
  const data = req.body
  try {
     const claymagix = new ClaymagixModel(data)
     await claymagix.save()
     res.status(200).json({ msg: "claymagix added Successfully!!!", success:true })
  
  } catch (error) {
     res.status(400).json({ msg: error.message })
     console.log(error.message)
  }

}
const handleGetClaymagix = async (req, res) => {
  try {
    const blog = await ClaymagixModel.find();
    res
      .status(200)
      .json({
        msg: "claymagix fetched successfully!",
        success: true,
        data: blog,
      });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error.message);
  }
};

const handleUpdateClaymagix = async (req, res) => {
  const { id } = req.params;
  // const { bgimage, title, title2, para, info, images } = req.body;
  try {
    console.log(id); 
    await ClaymagixModel.findByIdAndUpdate({_id:id}, req.body)
    res.status(200).json({ msg: "claymagix  data updated Successfully!!!", success:true })

  } catch (error) {
      res.status(500).json({ msg: error.message })
      console.log(error.message) 
  }
};

module.exports = {
  handleGetClaymagix,
  handleUpdateClaymagix,
  handleCreateClaymagix
};
