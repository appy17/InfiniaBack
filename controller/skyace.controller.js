
const express = require("express");

const { SkyaceModel } = require("../model/skyace.model");



const handleGetSkyace = async (req, res) => {
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


const handleCreateSkyace = async (req, res) => {
  try {
    const { title, backgroundImage, heading, info, images } = req.body;
    console.log("body", req.body);

    if (
      !title ||
      !backgroundImage ||
      !heading ||
      !info ||
      !images ||
      images.length === 0
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const formattedInfo = info.map((item) => ({
      title: item.title,
      description: item.description,
    }));

    const newSkyace = new SkyaceModel({
      title,
      backgroundImage,
      heading,
      info: formattedInfo,
      images: images,
    });

    const savedSkyace = await newSkyace.save();
    console.log("Skyace created:", savedSkyace);

    res.status(201).json({
      message: "Skyace created successfully",
      data: {
        _id: savedSkyace._id,
        title: savedSkyace.title,
        backgroundImage: savedSkyace.backgroundImage,
        heading: savedSkyace.heading,
        images: savedSkyace.images,
        info: savedSkyace.info.map((prop) => ({ _id: prop._id })),
        __v: savedSkyace.__v,
      },
    });
  } catch (error) {
    console.error("Error creating Skyace:", error);
    res.status(500).json({ message: "Error creating Skyace", error });
  }
};


const handleUpdate = async( req, res) => {
  const { id } = req.params;

  try {
    console.log(id); 
    await SkyaceModel.findByIdAndUpdate({_id:id}, req.body)
    res.status(200).json({ msg: "skyace  data updated Successfully!!!", success:true })

  } catch (error) {
      res.status(500).json({ msg: error.message })
      console.log(error.message) 
  }
}



module.exports= {
  handleGetSkyace,
  handleCreateSkyace,
  handleUpdate

};