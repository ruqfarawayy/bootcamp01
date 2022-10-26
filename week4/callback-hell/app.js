//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     first.style.color = 'red'
//     setTimeout(() => {
//       second.style.color = 'blue'
//       setTimeout(() => {
//         third.style.color = 'green'
//       }, 2000)
//     }, 3000)
//   }, 1000)
// })

// const promise1 = () => {
//   return new Promise
// }

btn.addEventListener('click', () => {
  return new Promise(function (resolve) {
      setTimeout( () => {
      }, 1000)
      resolve()
  })
  .then(() => {
      // setTimeout(() => {
          console.log("wkwkkw")
          first.style.color ="red"
      // }, 1000)
      // return new Promise(function (resolve){
      //   resolve()  
      // })
  })
  .then(() => {
      setTimeout(() => {
          console.log("heha")
          second.style.color =  "blue"
      }, 2000)
      // return new Promise(function (resolve) {
      //     resolve()
      // })
  })
  .then(() => {
      setTimeout(() => {
          console.log("hihi")
          third.style.color = "green"
      }, 3000)
  })
})
