const mongoose=require('mongoose');
const Gleary=require("./models/image.js")

main().then(res=>{
    console.log("connection is successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  
}

Gleary.insertMany([
    {
        title:"NEw Image ",
        image:"https://cdn.pixabay.com/photo/2025/01/17/01/56/horse-9338907_1280.jpg",
        des:"It locking like a Wah",
        Date:new Date(),

    },
    {
        title:"The wilde Grapher",
        image:"https://cdn.pixabay.com/photo/2025/03/03/17/47/cliffs-9444605_1280.jpg",
        des:"It locking like a Wah",
        Date:new Date(),

    },
    {
        title:"Runnings",
        image:"https://cdn.pixabay.com/photo/2024/05/28/12/28/ship-8793759_1280.jpg",
        des:"It locking like a Wah",
        Date:new Date(),

    },
    {
        title:"Dogs",
        image:"https://cdn.pixabay.com/photo/2025/04/12/19/07/white-wagtail-9530692_1280.jpg",
        des:"It locking like a Wah",
        Date:new Date(),

    },
    {
        title:"New Yourk ",
        image:"https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg",
        des:"It locking like a Wah",
        Date:new Date(),

    },
    {
        title:"The Flower",
        image:"https://cdn.pixabay.com/photo/2023/05/04/02/29/cherry-blossoms-7969007_1280.jpg",
        des:"It locking like a Amazine",
        Date:new Date(),

    },
    {
        title:"Beautiful cat",
        image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
        des:"It locking like a new cat lovers",
        Date:new Date(),

    },
    {
        title:"The Lion",
        image:"https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        des:"A king of jungle and great leader ",
        Date:new Date(),

    },

]).then(res=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// Gleary.deleteMany({});







 