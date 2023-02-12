const mongoose=require('mongoose')

const dbConnect=()=>{
    try{
        const con=mongoose.connect(process.env.url, {useNewUrlParser:true}, { useUnifiedTopology: true })
        console.log('Database connected')
    }catch(error){
        console.log('Database Error')
    }
}

module.exports=dbConnect;