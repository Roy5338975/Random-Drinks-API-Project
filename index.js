import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const URL_API = "https://www.thecocktaildb.com/api/json/v1/1/";

app.use(express.static("public"));

app.get("/", async(req,res) => {
    try{
        const result = await axios.get(URL_API + "random.php");
        const drinkName = result.data.drinks[0].strDrink;
        const drinkImage = result.data.drinks[0].strDrinkThumb;
        res.render("index.ejs",{name:drinkName,image:drinkImage});
    }catch(error){
        res.render("index.ejs",{name:error.response.data,image:error.response.data});
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
});