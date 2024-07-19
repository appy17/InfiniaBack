const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    pdflink:{type:String},
    Pattern:{type:String},
    Coverage:{type:String},
    orderQantity:{type:String},
    color:{type:String},
    material:{type:String},
    shape:{type:String},
    size:{type:String},
    laminated:{type:String},
    Thickness:{type:String},
    CountryOfOrigin:{type:String},
    SurfaceFinish:{type:String},
    type:{type:String},
    gradeOfMaterial:{type:String},
    UsageApplication:{type:String},
    Position:{type:String},
    ProductType:{type:String},
    Feature:{type:String},
    Weight:{type:String},
    Dimensions:{type:String},
    Durability:{type:String},
    EcoFriendly:{type:String},
    image1:{type:String},
    image2:{type:String},
    image3:{type:String},
    image4:{type:String},
},{
    versionKey:false
})

const ProductModel = mongoose.model("products", productSchema)

module.exports = {
    ProductModel
}