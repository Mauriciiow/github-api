class apiView{
    constructor(arr){
            this.arr = arr
    }
    criaUl(){
        console.log(this.arr);
       this.arr.forEach((i)=>{
           let pai = document.querySelector('.container')
           let ulNova = document.createElement('ul')
           pai.append(ulNova)
           ulNova.setAttribute('class', 'list-group')
           let novaLi = document.createElement('li')
           ulNova.append(novaLi)
           novaLi.setAttribute('class', 'list-group-item list-group-item-action')
           let novaImg = document.createElement('img')
           novaLi.append(novaImg)
           novaImg.setAttribute('src', i.img)
           let strong = document.createElement('strong')
           novaLi.append(strong)
           strong.innerText = i.titulo
           let p = document.createElement('p')
           novaLi.append(p)
           p.innerText = i.descricao
           let a = document.createElement('a')
           novaLi.append(a)
           a.innerText = 'Acessar'
           a.setAttribute('target', '_blank')
           a.setAttribute('href', i.url)
          
       })
       
      
    }

    remover(){
        $('.list-group').remove()
    
    }

   
}