import inquirer from "inquirer";

let myBalance = 15000;
let mypin = 7979;
console.log("WELLOCOME TO ZAMIN ATM MACHINE");

let pinAnswer = await inquirer.prompt([

    {
        type: "number",
        name: "pincode",
        message: "Enter your pin code"

    }
]);

 if (pinAnswer.pincode === mypin){
    console.log("correct pin code...!");
    console.log(`your current account balance is ${myBalance}`)


let accAnswer = await inquirer.prompt([
    {
        type: "list",
        name: "myaccount",
        message: "please choose your Account",
        choices: ["SAVING ACCOUNT","FIXED DEPOSIT ACCOUNT","CURRENT ACCOUNT"]

    }
]);
if(accAnswer.myaccount==="CURRENT ACCOUNT"){
    console.log("correct account...!")

    let operationAnswer = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message:"SELECT THE OPERATION TO PERFORM",
            choices: ["withdraw","Check balance","Donation","transfer amount"]
        }
    ]);

    if (operationAnswer.operation==="withdraw"){
        let amountAns = await inquirer.prompt([
            {
               type: "number" ,
               name: "amount",
               message: "ENTER THE AMOUNT TO WITHDRAW"
            }
        ]);

        if(amountAns.amount > myBalance){
            console.log("INSUFFICIANT BALANCE");
        }
        else{
            myBalance -= amountAns.amount
            console.log(`${amountAns.amount} withdraw successfull`);
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
         if(operationAnswer.operation==="Check balance")
            console.log(`your balance is ${myBalance}`)


         else if(operationAnswer.operation==="Donation"){
            let foundations = await inquirer.prompt([
                {
                    type: "list",
                    name:"organization",
                    message:"which organization to you want donate ",
                    choices:["jdc foundation","saylani welafare","chippa welfare"]
                }
            ]); 
            if (foundations.organization==="jdc foundation"||"saylani welafare"||"chippa welfare"){
                let doamount = await inquirer.prompt([
                    {
                        type: "number",
                        name: "selectamount",
                        message: "enter the amount"
                            
                    }
                    
                ]);
            
                if(doamount.selectamount>myBalance){
                    console.log("insufficiant balance")
                }
                else{
                    myBalance-=doamount.selectamount
                    console.log("Sent Amount Successfully....!")
                    console.log(`your remaining balance is ${myBalance}`)
                    console.log("THANKS FOR USING OUR ATM")
                }
            }

         }

        










         }  
        
        
        
        
        }  
        
       





