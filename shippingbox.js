const express = require('express');
const app = express();

app.use(express.json())

const items =[];

app.post('/items', (req, res) =>{
    try{
    const item = req.body;
    items.push(item);
    res.send(items);
    }catch(error){
        res.send(error)
    }
})



app.get('/items',(req, res)=>{
    try{
        res.send(items);
    }catch(error){
        res.send(error);
    }
})

//with id
app.get('/items/:id',(req, res)=>{
    try{
        const item=items.find((item) =>
        item.id == req.params.id);
        res.send(item);
    }catch(error){
        res.send(error);
    }
    
    });
    

app.put('/items/:id',(req,res) => {
    try{
    const id= req.params.id;
    const index = items.findIndex(item => 
        item.id == id);
        items[index]=req.body;
        res.send(items);
    }
    catch(error){
        res.send(error);
    }
});

app.delete("/items/:id",(req, res)=>{
    try{
        const index=items.findIndex((item) => 
        item.id==req.params.id);
        items.splice(index,1);
        res.send("Deleted");
    }catch(error){
        res.send(error);
    }
    
});


app.listen(5000 ,() =>{
    console.log("Server is running on the port 5000")
});