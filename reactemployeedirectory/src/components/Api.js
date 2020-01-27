// Pulled from Jake O'Toole's repo


const axios = require("axios");

function Main(){

    async function getRandomEmployees(){
        try{
            const response = await axios.get("https://randomuser.me/api/?results=5")
            console.log(response.data)
        }
        catch(err){
            console.log("error getting employees from api: ", err)
        }
    }
    getRandomEmployees()
}
Main()

export default Main