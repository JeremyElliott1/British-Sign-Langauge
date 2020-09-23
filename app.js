const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/quiz',(req,res,next) => {
  res.sendFile(path.join(__dirname, 'views', 'bsl-QUIZ.html'));
});

app.use('/',(req,res,next) => {
  res.sendFile(path.join(__dirname, 'views', 'bsl-HOME.html'));
});

app.listen(3000);