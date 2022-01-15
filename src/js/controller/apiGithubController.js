class apiController{
    constructor(){
        this.arr = []
    }
    async recebeDados(){
        const model = new apiModel()
        let input = $('#repositorio').val()
        let resultApi = await model.recebeApi(input)
        resultApi.forEach((i) => {
          this.arr.push({
            img:i.owner.avatar_url,
            descricao: i.description,
            titulo: i.name,
            url: i.html_url
        })
        });
        const view = new apiView(this.arr)
        view.criaUl()
       
       
        
    }
    removeArr(){
        this.arr.forEach(() => {
            this.arr.splice(0, this.arr.length)
        });
        console.log(this.arr);
       
    }
}