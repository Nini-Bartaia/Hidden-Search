const search=document.getElementsByClassName('img')[0]
const img= document.getElementsByTagName('input')[0]
const div= document.getElementsByClassName('wrapper')[0]

clicked=0
search.addEventListener('click', ()=>{
    clicked++
    
    if(clicked %2==1 ){
    img.style='display:block'
    div.classList.add('wrapper2')
    } else{
        img.style='display:none'
        div.classList.remove('wrapper2')
    }
   
   
})


