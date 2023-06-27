export default function(){
  
  const home = document.querySelector('#home')
  const universe = document.querySelector('#universe')
  const exploracao = document.querySelector('#exploracao')
  

  home.addEventListener('click', function(){
    home.classList.add('active')
    universe.classList.remove('active')
    exploracao.classList.remove('active')  })
  
  universe.addEventListener('click', function(){
    universe.classList.add('active')
    home.classList.remove('active')
    exploracao.classList.remove('active')
})

  exploracao.addEventListener('click', function(){
    exploracao.classList.add('active')
    home.classList.remove('active')
    universe.classList.remove('active')
})
}