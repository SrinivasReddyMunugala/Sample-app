const express = require ('express');
const app = express();
app.get('/',(req,res) => {
    res.sendFile('/home/srinivasreddy_munugala/Sample-app/index.html')
});
app.listen (process.env.PORT || 8081);