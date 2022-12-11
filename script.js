const inputItem = document.querySelector('#input')
const botao = document.querySelector('.botao')
const containerMensagem = document.querySelector('.container-mensagem')
const trash = document.querySelector('.trash')
const apagar = document.querySelector('.apagar')



botao.addEventListener('click', (e)=>{
    if(inputItem.value.length <= 0){
        return
    }else{
        addMensagem()
    }
})



const addMensagem = ()=>{
    const item = document.createElement('p')
    item.innerHTML = inputItem.value
    item.id = 'item'
    containerMensagem.appendChild(item)
    inputItem.value = ''
    
}



inputItem.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        if(inputItem.value.length <= 0){
            return
        }else{
            addMensagem()
        }
    }
})



trash.addEventListener('click', (e)=>{
    containerMensagem.innerHTML = ''
    inputItem.value = ''
})



apagar.addEventListener('click', ()=>{
    let array = inputItem.value.split('')
    array.pop()
    let trans = array.toString()
    let a = trans.replace(/,/g, "").replace(/\./g, "");
    inputItem.value = a

    
})