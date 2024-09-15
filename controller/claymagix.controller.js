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
  const { bgimage, title, title2, para, info, images } = req.body;

  try {
    let claymagixItem = await ClaymagixModel.findById(id);
    if (!claymagixItem) {
      return res
        .status(404)
        .json({ msg: "Claymagix item not found", success: false });
    }

    claymagixItem.bgimage = bgimage || claymagixItem.bgimage;
    claymagixItem.title = title || claymagixItem.title;
    claymagixItem.title2 = title2 || claymagixItem.title2;
    claymagixItem.para = para || claymagixItem.para;

    if (info) {
      claymagixItem.info.heading = info.heading || claymagixItem.info.heading;
      claymagixItem.info.points = info.points || claymagixItem.info.points;
    }

    claymagixItem.images = images || claymagixItem.images;

    const updatedClaymagix = await claymagixItem.save();
    console.log("Updated Claymagix: ", updatedClaymagix);

    res.status(200).json({
      success: true,
      msg: "Claymagix updated successfully!",
      data: updatedClaymagix,
    });
  } catch (error) {
    console.error(`Error updating Claymagix: ${error}`);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};

module.exports = {
  handleGetClaymagix,
  handleUpdateClaymagix,
  handleCreateClaymagix
};
