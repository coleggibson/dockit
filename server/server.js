const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

var convertapi = require('convertapi')('2yw1Y41g8jaLfSh8');
convertapi.convert('html', {
    File: '/home/cole/Downloads/This is a test document.docx',
    FileName: 'Test Doc'
}, 'doc').then(function(result) {
    result.saveFiles('/home/cole/Downloads');
    console.log(result)
});

