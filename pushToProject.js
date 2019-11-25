// const fs = require('fs');
const fs = require("fs-extra");

fs.readdir('./dist', {withFileTypes: true }, (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data);
    
});

fs.copy('./dist', '~/programming/keepit/random', err => {
    if(err){
        return console.log(err);
    };

    console.log('Coping complited!');
})