const SkyaceModel = require('../model/skyace.model');

const getSkyace = async (req, res) => {
  try {
    const skyace = await SkyaceModel.findOne(); // fetch the first document

    if (!skyace) {
      return res.status(404).json({ message: 'Skyace not found' });
    }

    res.status(200).json(skyace);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Skyace entry', error });
  }
};
const createSkyace = async (req, res) => {
  try {
    const { title, backgroundImage, heading, info, images } = req.body;
    const brochure = req.file; 

    const newSkyace = new SkyaceModel({
      title,
      backgroundImage,
      heading,
      brochure: brochure.path, 
      info,
      images,
    });

    await newSkyace.save();
    res
      .status(201)
      .json({ message: "Skyace created successfully", data: newSkyace });
  } catch (error) {
    res.status(500).json({ message: "Error creating Skyace", error });
  }
};
const updateSkyace = async (req, res) => {
  try {
    const { title, backgroundImage, heading, info, images } = req.body;
    const brochure = req.file; 
    const skyace = await SkyaceModel.findOne();

    if (!skyace) {
      return res.status(404).json({ message: 'Skyace not found' });
    }

    skyace.title = title || skyace.title;
    skyace.backgroundImage = backgroundImage || skyace.backgroundImage;
    skyace.heading = heading || skyace.heading;
    skyace.brochure = brochure ? brochure.path : skyace.brochure;
    skyace.info = info || skyace.info;
    skyace.images = images || skyace.images;

    
    await skyace.save();

    res.status(200).json({ message: 'Skyace updated successfully', data: skyace });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Skyace', error });
  }
};


module.exports = {
  getSkyace,
  createSkyace,
  updateSkyace,
};