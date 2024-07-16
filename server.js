const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  

app.listen(PORT,function(err){
    if(err)console.log('error', err);
    console.log('server is running on port',PORT);
})