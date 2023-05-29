const path = require('path');
const docxConverter = require('docx-pdf');


const File = function (app) {
    this.app = app;
}
module.exports = File;

File.prototype.FileConversion = async function (req, res) {
    let ext = '.pdf'
    let inputPath = path.join(__dirname, '../import/testFile.docx');
    let outputPath = path.join(__dirname, '../import/testFile' + ext);

    docxConverter(inputPath, outputPath, (err, result) => {
        if (err) {
            res.json({ status: false, message: "Error to create PDF file.", result: err })
        }
        else {
            res.json({ status: true, message: "PDF file created successfully.", result: result })
        }
    });
}

File.prototype.sample = async function (req, res) {
    let a = 10, b = 20;
    let array = ["peacock", "crow", "Eagle", "pigeon", "parrot"];
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    await sum(a, b).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })

    await findWord(array).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })

    await findEven(num).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })

}

function sum(num1, num2) {
    return new Promise((resolve, reject) => {
        let val = num1 + num2;
        if (val > 0) {
            resolve(val);
        } else {
            reject("Error to add the values")
        }
    })
}

function findWord(Text) {
    return new Promise((resolve, reject) => {
        let newArr = Text.filter((a) => a.toLowerCase() !== "eagle")
        if (newArr.length) {
            resolve(newArr);
        } else {
            reject("Error to remove the eagle")
        }
    })
}

function findEven(number) {
    return new Promise((resolve, reject) => {
        let newArr = [];
        number.map((a) => {
            if ((a % 2)) {
                newArr.push(a)
            }
        })
        if (newArr.length) {
            resolve(newArr);
        } else {
            reject("Error to get the odd number")
        }
    })
}