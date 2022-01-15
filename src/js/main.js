let controller = new apiController()
$('#adicionar').click((e)=>{
    e.preventDefault()
    controller.recebeDados()
    
})

let view = new apiView()
$('#remover').click((e)=>{
    e.preventDefault()
    view.remover() 
    controller.removeArr()
})