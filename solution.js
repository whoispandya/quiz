/*
Code 
1 = > address check
2 = > name check 
3 = > email check 
4 = > driver licence num without XXX 
5 = > dob 
6 = > gender 
7 = > Phone 

Supply input as checks which need to be passed 

for eg. if only gender and phone check required => supply input variable as "67"

note =: if you see multiple entry for eg "missing exact birthday, only range given" => this means that a policy has more then 1 members(spouce, kid, etc..) and they are also missing birthday info..

*/


const fs = require('fs')

fs.readFile('policies.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }

    let parsedData = JSON.parse(jsonString)
    
    const input = '1234567'
    
    for(let i=0;i<parsedData.length;i++){

        console.log('policy:' + parsedData[i].policyId)

        if(input.includes(1)){
            checkAddress(parsedData[i])
        }
        if(input.includes(2)){
            checkName(parsedData[i])
        }
        if(input.includes(3)){
            checkPolicyHolderEmail(parsedData[i])
        }
        if(input.includes(4)){
            checkDriverLicense(parsedData[i])
        }
        if(input.includes(5)){
            checkDOB(parsedData[i])
        }
        if(input.includes(6)){
            checkGender(parsedData[i])
        }
        if(input.includes(7)){
            checkPhone(parsedData[i])
        }

        console.log('.............................')
    }

    function checkPhone(parsedData){
        if(!parsedData.policyHolder.phoneNumber || parsedData.policyHolder.phoneNumber==""){
            console.log('missing phone number...')
        }
    }

    function checkGender(parsedData){
        if(parsedData.operators.length >0){
            for(let i=0;i<parsedData.operators.length;i++){
                if(!parsedData.operators[i].gender || parsedData.operators[i].gender.length == "" ){
                    console.log('missing gender data')
                }
            }
        }
    }

    function checkName(parsedData){
        if(!parsedData.policyHolder.name){
            console.log('missing name...')
        }
        if(parsedData.policyHolder.name.firstName.length == 0){
            console.log('missing first name..')
        }
        if(parsedData.policyHolder.name.middleName.length == 0){
            console.log('missing middle name..')
        }
        if(parsedData.policyHolder.name.lastName.length == 0){
            console.log('missing last name..')
        }
    }
    
    function checkDOB(parsedData){
        if(parsedData.operators.length >0){
            for(let i=0;i<parsedData.operators.length;i++){
                
                if(!parsedData.operators[i].birthdayRange){
                    console.log('missing birthday information')
                }
                else{ 
                        if( parsedData.operators[i].birthdayRange.start != parsedData.operators[i].birthdayRange.end){
                            console.log('missing exact birthday, only range given')
                        }      
                }
            }
        }
    }

    function checkPolicyHolderEmail(parsedData){
        if(!parsedData.policyHolder.email || parsedData.policyHolder.email==""){
            console.log('missing email...')
        }
    }
    function checkDriverLicense(parsedData){
        if(parsedData.operators.length > 0){
            for(let i=0;i<parsedData.operators.length;i++){
                if(!parsedData.operators[i].driversLicenseNumber){
                    console.log('missing driver license number')
                }
                else {
                    if(parsedData.operators[i].driversLicenseNumber.includes('XXX')){
                        console.log('missing full version of driver licence')
                    }
                }
            }
        }
    }

    function checkAddress(parsedData){

        if(!parsedData.policyHolder.address.number) 
        {
                console.log('missing Address field => Number') 
        } 
        if(!parsedData.policyHolder.address.street) 
        {
            console.log('missing Address field => street') 
        } 

        if(!parsedData.policyHolder.address.city) 
        {
            console.log('missing Address field => city') 
        } 

        if(!parsedData.policyHolder.address.state) 
        {
            console.log('missing Address field => state') 
        } 

        if(!parsedData.policyHolder.address.zip) 
        {
            console.log('missing Address field => zip') 
        } 

    }
})