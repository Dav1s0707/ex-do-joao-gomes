module.exports = (app)=>{
    //definir a resposta para a req "/'
    app.get('/formulario', (req,res)=>{
        res.render('formulario.ejs')
    })
    app.post("/formulario",(req,res)=>{
        res.send(req.body)
    })
}