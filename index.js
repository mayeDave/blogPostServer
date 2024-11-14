// imports
const express = require("express");
const mongoose = require("mongoose");
const port = 3030;
const postRoutes = require("./routes/postRoutes");

// connect to mongodb server
mongoose.connect("mongodb+srv://olorunmayedavid1234:Aderoyal95@cluster0.eaicp.mongodb.net/tblogdatabase?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to mongodb server");

    const app = express();

    // middleware
    app.use(express.json());
    

    // connect route
    app.use("/api", postRoutes);

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/api/fetch-posts`);
    });

})
.catch((error) => {
    console.log(error);
});





