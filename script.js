let elForm = document.querySelector('form')
let elInput = elForm.querySelector('input')
let creteElement_div = document.createElement('div')
document.body.appendChild(creteElement_div)

var moviesArr = []
movies.forEach(function(index){
  moviesArr.push({
    title: index.Title.toString().toLowerCase(),
    rating:index.imdb_rating,
    silka_traler:`https://www.youtube.com/watch?v=${index.ytid}`,
    img:`https://i3.ytimg.com/vi/${index.ytid}/maxresdefault.jpg`,
  })
})



elForm.addEventListener('submit', function(e){
  e.preventDefault()
  let input_value = elInput.value.toLowerCase()

  for (let x = 0; x < moviesArr.length; x++) {
    if(moviesArr[x].title.includes(input_value)){
      let creteElement_title = document.createElement('p')

      creteElement_div.appendChild(creteElement_title)
      creteElement_title.textContent = moviesArr[x].title

      let creteElement_title_p1 = document.createElement('p')

      creteElement_div.appendChild(creteElement_title_p1)
      creteElement_title_p1.textContent = moviesArr[x].rating

      let creteElement_title_p2 = document.createElement('a')

      creteElement_div.appendChild(creteElement_title_p2)
      creteElement_title_p2.textContent = moviesArr[x].silka_traler

      creteElement_title_p2.setAttribute('p', 'black' )

      let creteElement_title_p3 = document.createElement('img')

      creteElement_div.appendChild(creteElement_title_p3)

      creteElement_title_p3.setAttribute('src','https:picsum.photos/100/100' )

      
      
      console.log(moviesArr[x]);
    }
  }
})