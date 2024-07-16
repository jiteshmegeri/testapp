const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send("Hello from server!");
  });
  

app.listen(PORT,()=>{
    
    console.log(`server listening at http://localhost:${PORT}`);
})