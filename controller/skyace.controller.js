const express = require("express");

const { SkyaceModel } = require("../model/skyace.model");

// const getSkyace = async (req, res) => {
//   try {
//     const skyace = await SkyaceModel.findOne(); // Fetch the first document

//     if (!skyace) {
//       console.log("No Skyace documents found");
//       return res.status(404).json({ message: 'Skyace not found' });
//     }

//     res.status(200).json(skyace);
//   } catch (error) {
//     console.error("Error fetching Skyace entry:", error);
//     res.status(500).json({ message: 'Error fetching Skyace entry', error });
//   }
// };

const getSkyace = async (req, res) => {
  try {
    const skyace = await SkyaceModel.find();
    res
      .status(200)
      .json({ msg: "skyace get Successfully!!!", success: true, data: skyace });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error.message);
  }
};

const createSkyace = async (req, res) => {
  try {
    const { title, backgroundImage, heading, info, images } = req.body;
    console.log("body",req.body);
    // const brochure = req.file;

    // Validate required fields
    if (!title || !backgroundImage || !heading || !info) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newSkyace = new SkyaceModel({
      title,
      backgroundImage,
      heading,
      // brochure: brochure.path, // Save the path of the brochure
      info,
      images: images , // Safely parse images array
    });

    // Save the new document to the database
    const savedSkyace = await newSkyace.save();
    console.log("Skyace created:", savedSkyace);

    res
      .status(201)
      .json({ message: "Skyace created successfully", data: savedSkyace });
  } catch (error) {
    console.error("Error creating Skyace:", error);
    res.status(500).json({ message: "Error creating Skyace", error });
  }
};

const updateSkyace = async (req, res) => {
  try {
    const { title, backgroundImage, heading, info, images } = req.body;
    const brochure = req.file;
    const skyace = await SkyaceModel.findOne();

    if (!skyace) {
      return res.status(404).json({ message: "Skyace not found" });
    }

    skyace.title = title || skyace.title;
    skyace.backgroundImage = backgroundImage || skyace.backgroundImage;
    skyace.heading = heading || skyace.heading;
    skyace.brochure = brochure ? brochure.path : skyace.brochure;
    skyace.info = info || skyace.info;
    skyace.images = images ? JSON.parse(images) : skyace.images;

    await skyace.save();

    res
      .status(200)
      .json({ message: "Skyace updated successfully", data: skyace });
  } catch (error) {
    console.error("Error updating Skyace:", error);
    res.status(500).json({ message: "Error updating Skyace", error });
  }
};

module.exports = {
  getSkyace,
  createSkyace,
  updateSkyace,
};
