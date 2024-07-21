/* 
    use the inquirer nmp package to take user input:
    use qr-image nmp package for qr image generator:
    create the text file to save the user input using the file system method:

*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type Your url Here", 
            name: "URL"
        },
    ])
    .then((answer) =>{
        console.log(answer);
        const url = answer.URL;
        var ans = qr.image(url);

        ans.pipe(fs.createWriteStream("qr-code.png"));

        fs.writeFile("url.txt", url, (error) =>{
            if(error) throw error;

            console.log("File has been saved");
        });
    })