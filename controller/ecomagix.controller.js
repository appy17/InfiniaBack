const EcomagixModel = require("../model/ecomagix.model")



const handleCreateEcomagix = async(req,res) => {
    const data = req.body
    try {
       const ecomagix = new EcomagixModel(data)
       await ecomagix.save()
       res.status(200).json({ msg: "ecomagix added Successfully!!!", success:true })
    
    } catch (error) {
       res.status(400).json({ msg: error.message })
       console.log(error.message)
    }

}

const handleGetEcomagix = async(req,res) => {
    try {
      const blog = await EcomagixModel.find()  
      res.status(200).json({ msg: "ecomagix get Successfully!!!", success:true, data:blog })
    
    } catch (error) {
        res.status(400).json({ msg: error.message })
        console.log(error.message)
    }
}

const handleUpdateEcomagix = async (req, res) => {
  const { images, name, points } = req.body;
  console.log("Frontend Data", req.body);
  const { id } = req.params;

  try {
    let ecomagixItem = await EcomagixModel.findById(id);
    console.log("Backend Data", ecomagixItem);

    if (!ecomagixItem) {
      return res
        .status(404)
        .json({ msg: "Ecomagix not found", success: false });
    }

    // Transform images to an array of URLs if schema expects only strings
    const imageUrls = images.map((image) => image.url);

    ecomagixItem.images = imageUrls;
    ecomagixItem.name = name;
    ecomagixItem.points = points;

    const updatedEcomagix = await ecomagixItem.save();
    console.log("Updated Ecomagix: ", updatedEcomagix);

    res.status(200).json({
      success: true,
      msg: "Ecomagix updated successfully!!!",
      data: updatedEcomagix,
    });
  } catch (error) {
    console.error(`Error updating ecomagix: ${error}`);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};
  





module.exports = {
handleCreateEcomagix,
handleGetEcomagix,
handleUpdateEcomagix
}