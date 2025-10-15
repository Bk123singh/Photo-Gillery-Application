const express = require('express');
const mongoose = require('mongoose');
const Gleary = require('./models/image.js');
const methodOverride = require('method-override');
const ejsMate=require('ejs-mate');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config();

const app = express();
const port = 8080;

//  define dburl BEFORE calling main()
const dburl = process.env.DB_URL;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

async function main() {
  await mongoose.connect(dburl);
  console.log('Database connected successfully!');
}


main()
  .then(() => {
    console.log('Connection is successful');
  })
  .catch(err => console.log(err));

// show route
app.get('/gleary', async (req, res) => {
  let datas = await Gleary.find();
  res.render('index.ejs', { datas });
});

app.get('/gleary/:id', async(req, res)=>{
    const {id}=req.params;
    const data=await Gleary.findById(id);
    res.render("show.ejs", {data});
})

// new route
app.get('/gleary/new', async (req, res) => {
  let datas = await Gleary.find();
  res.render('new.ejs', { datas });
});


// Edit Form

app.get('/gleary/:id/edit', async(req, res)=>{
    const { id } = req.params;
    const data = await Gleary.findById(id);
    res.render('edit.ejs', { data });
})

//update route

app.put('/gleary/:id',async(req, res)=>{
    const { id } = req.params;
    const { title, image, des } = req.body;
    await Gleary.findByIdAndUpdate(id, {
      name: title,
      image: image,
      des: des,
    });
    console.log('Updated successfully');
    res.redirect(`/gleary/${id}`);
})


// destroy route
app.delete('/gleary/:id', async (req, res) => {
  let { id } = req.params;
  await Gleary.findByIdAndDelete(id);
  res.redirect('/gleary');
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
