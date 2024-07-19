const mongoose = require("mongoose")

const heroSchema = mongoose.Schema({
    title:{type:String, required:true},
    subTitle:{type:String, required:true},
    buttonText:{type:String, required:true},
    buttonColor:{type:String, required:true},
    num1:{type:String, required:true},
    num1Des:{type:String, required:true},
    num2:{type:String, required:true},
    num2Des:{type:String, required:true},
    num3:{type:String, required:true},
    num3Des:{type:String, required:true},
    num4:{type:String, required:true},
    num4Des:{type:String, required:true},  
},{
    versionKey:false
})

const heroModel = mongoose.model("hero", heroSchema)

module.exports = {
    heroModel 
}