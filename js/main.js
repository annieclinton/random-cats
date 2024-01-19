//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLowerCase()
//   const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
// const url = 'https://pokeapi.co/api/v2/pokemon/'+choice (Alternate option for line above)

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.thecatapi.com/v1/images/search/?api_key=live_Oz05rHDvzIuGl7pFi0W8voj6FWjGRPHZ1JTBTrRtdcmnuZT75rxSmrdUjKs9P2hl&limit=${choice}`
  
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => { 
        console.log(data)
        console.log(choice)
        document.querySelector('#image1').src = data[0].url
        document.querySelector('#image2').src = data[1].url
        document.querySelector('#image3').src = data[2].url
        document.querySelector('#image4').src = data[3].url
        document.querySelector('#image5').src = data[4].url
        document.querySelector('#image6').src = data[5].url
        document.querySelector('#image7').src = data[6].url
        document.querySelector('#image8').src = data[7].url
        document.querySelector('#image9').src = data[8].url
        document.querySelector('#image10').src = data[9].url        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
