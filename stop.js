let timer=document.getElementById("timer")
let hh=0
let mm=0
let ss=0
let ms=0

let myint
let str
function pad(num){
    str=num.toString()
    return str.padStart(2,'0')

}

function start(){
    myint=setInterval(()=>{
        ms++

        if(ms===99){
            
            ms=0
            ss++
        }
        if(ss===59){
            
            ss=0
            mm++    
        }
        if(mm===59){
            
            mm=0
            hh++
        }

        timer.innerHTML = `${pad(hh)}<sub>HH</sub>: ${pad(mm)}<sub>MM</sub>: ${pad(ss)}<sub>SS</sub><sub>  ${pad(ms)} MS</sub>`
    },10)
}

function reset()
{
    stop()
    hh=0
    mm=0
    ss=0
    ms=0
    timer.innerHTML = `${pad(hh)}<sub>HH</sub>: ${pad(mm)}<sub>MM</sub>: ${pad(ss)}<sub>SS</sub><sub>  ${pad(ms)} MS</sub>`

}

function stop(){
    clearInterval(myint)
}
