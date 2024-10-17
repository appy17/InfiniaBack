const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { HomeHeroRouter } = require("./routes/home.hero.routes")
const { OfferingRouter } = require("./routes/offering.routes")
const { TestimonialRouter } = require("./routes/testinomial.routes")
const { AboutHeadRouter } = require("./routes/about.head.routes")
const { AboutExpertiseRouter } = require("./routes/about.expertise.routes")
const { AboutLastRouter } = require("./routes/about.last.routes")
// const { ProductRouter } = require("./routes/products.routes")
const { BlogRouter } = require("./routes/blog.routes")
const { EcomagixRouter } = require("./routes/ecomagix.routes")
const { BrandsRouter } = require("./routes/brands.routes")
const { EventRouter } = require("./routes/event.routes")
const { LoginRouter } = require("./routes/Login.routes")
const { ProductRouter } = require("./routes/products.routes")
const { CarousalRouter } = require("./routes/carousal.routes")
const { RelatedProductorRouter } = require("./routes/relatedProduct.routes")
const { ClaymagixRouter} = require("./routes/claymagix.routes")
const {  WoodmagixRouter } = require("./routes/woodmagix.routes")
const { SkyaceRouter } = require("./routes/skyace.routes")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/hero", HomeHeroRouter)
app.use("/offering", OfferingRouter)
app.use("/testimonial", TestimonialRouter)
app.use("/abouthead", AboutHeadRouter)
app.use("/aboutExpertise", AboutExpertiseRouter)
app.use("/aboutlast", AboutLastRouter)
app.use("/product", ProductRouter)
app.use("/blog", BlogRouter)
app.use("/ecomagix", EcomagixRouter)
// app.use("/brands", BrandsRouter)
app.use("/events", EventRouter);
app.use("/login", LoginRouter);
app.use("/carousal", CarousalRouter);
app.use("/related", RelatedProductorRouter);

app.use("/claymagix", ClaymagixRouter);
app.use("/woodmagix",WoodmagixRouter);
app.use("/skyace",SkyaceRouter)


const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Welcome to infinia');
  });

app.listen(port, async() => {
    await connection
    console.log(`server is running at port ${port}`);
})


