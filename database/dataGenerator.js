const faker = require('faker');
const axios = require('axios');
const fs = require('fs');


// random number 
let randomNum = Math.ceil(Math.random() * 5);

// user, date, stars, title, description
const dataGenerator = () => {
    let data;
    for(let i = 0; i < 10000000; i++){
        data = `${faker.fake("{{name.findName}}")}, ${faker.fake("{{date.recent}}")}, ${randomNum}, ${faker.fake("{{name.jobTitle}}")}, ${faker.fake("{{lorem.sentence}}")}\n`;
    
        fs.appendFile('./rawdata.csv', data, (err)=>{
            if(err){
                // console.log(err);
                console.log(err, "ya borked it");
            } else {
                console.log('not borked:');
            }
        })
    }
}

dataGenerator();
// mongoimport --db sdc --collection sole --type csv --file rawdata.csv --headerline