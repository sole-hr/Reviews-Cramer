const faker = require('faker');
const fs = require('fs');


// random number 
// let randomNum = Math.ceil(Math.random() * 5);

// sku #,user, date, title, description
const dataGenerator = () => {
    let data;
    for(let j = 0; j < 10; j++){
        let sku = 0;
        console.clear();
        console.log('Loading initiated...stand by....', j, 'of 10');
        for(let i = 0; i < 1000000; i++){
            // if(i % 10000 === 0){
                // console.clear();
                // console.log(`Loading initiated...stand by....${j} of 10...thank you for your patience...${((i % 1000000) / 100000).toFixed(1)}%...`)
            // }
            data = `${sku++}, ${faker.fake("{{name.findName}}")}, ${faker.fake("{{date.recent}}")}, ${faker.fake("{{name.jobTitle}}")}, ${faker.fake("{{lorem.sentence}}")}\n`;
        
            fs.appendFileSync(`./rawdata${j}.csv`, data, (err)=>{
                if(err){
                    // console.log(err, "ya borked it");
                } else {
                    // console.log('not borked:');
                }
            })
        }
    }
}

dataGenerator();
// headerline = sku,user,date,title,description
// mongoimport --db sdc --collection sole --type csv --file rawdata9.csv --headerline