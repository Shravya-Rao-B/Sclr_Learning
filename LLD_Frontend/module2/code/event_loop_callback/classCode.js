/* callback hell */
let fs = require('fs')
function fileRead(){
    fs.readFile("./f1.txt",'utf-8',(err,data) => {
        if(err){
            console.log(err)
        }
        else if(data){
            console.log('f1:',data);
            fs.readFile('./f2.txt','utf-8',(err,data) => {
                if(err){
                    console.log(err)
                }
                else if(data){
                    console.log('f2:',data)
                    fs.readFile('./f3.txt','utf-8',(err,data) => {
                        if(err)
                        {
                            console.log(err)
                        }
                        else if (data){
                            console.log('f3:',data)
                        }
                    })
                }
            })
        }
    })
}
// fileRead();

//Avoiding callback hell
