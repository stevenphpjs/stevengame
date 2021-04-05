// const tanah = document.querySelectorAll('.tanah')
// const tikus = document.querySelectorAll('.tikus')
// const Skor = document.querySelector('.skor')
// const pop = document.querySelector('.pop')

// let random3;
// let selesai;
// let skor;
//   function random(pp) {
//         const random1 = Math.floor(Math.random() * tanah.length)
//        const random2 = pp[random1]
//        if(random2 == random3) {
//            random(pp)
//        }
//        random3 = random2
//         return random2
//     }
    
    
//     function rw(min, max) {
//        return Math.round(Math.random() * (max - min) + min)
//     }


// function muncul() {    
    
//         const coba = random(tanah)
//         const waktu = rw(300, 1100)
//         coba.classList.add('muncul')
    
//         setTimeout(() => {
//             coba.classList.remove('muncul') 
//             if(!selesai) {
//                 muncul()
//             }
//         }, waktu)
        
//     }
    

// function mulai() {
//     selesai = false
//     skor = 0
//     Skor.innerHTML = 0
//     muncul()
//     setTimeout(() => {
//         selesai = true
//     }, 10000)
   
// }

// function pukul() {
//  skor++
//  this.parentNode.classList.remove('muncul')
//  Skor.textContent = skor
//  pop.play()
// }
// tikus.forEach(t => {
//  t.addEventListener('click', pukul)
// })




const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const Skor = document.querySelector('.sad')
const pop = document.querySelector('.pop')

let selesai;
let random3;
let skor;
function random(pp) {
    const random1 = Math.floor(Math.random() * tanah.length)
    const random2 = pp[random1]
    if(random2 == random3) {
        random(pp)
    }
    random3 = random2
    return random2
}


function rw(max, min) {
    return Math.round(Math.random() * (max - min) + min )
}



const time = rw(1000, 2000)
function muncul() {
    const coba = random(tanah)
    coba.classList.add('muncul') 

    setTimeout(() => {
        coba.classList.remove('muncul') 
        if(!selesai) {
            muncul()
        }
    }, time)
}


function mulai() {
    selesai = false
    skor = 0
    Skor.innerHTML = 0
    muncul()
    setTimeout(() => {
        selesai = true
    }, 10000)
}

function pukul() {
    skor++
    // pop.play()
    this.parentNode.classList.remove('muncul')
    // this.classList.add('efek')
    // setTimeout(() => {
    //     this.classList.remove('efek')


    // },time)
    Skor.innerHTML = skor
}


tikus.forEach(t => {
    t.addEventListener('click', pukul)
})
