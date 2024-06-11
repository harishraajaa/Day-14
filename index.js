console.log("Harish Raajaa R V")

let h1 = document.createElement("h1")
h1.innerText="Pavithra Baskar"

document.body.appendChild(h1)

let h2 = document.createElement("h2")
h2.innerText="Access Resticted!!!"

var page

function openfun(){
    page=window.open("","_blank","height='750' width='750'")
    page.document.body.appendChild(h2)
}

function closefun(){
    console.log("Trying to Close")
    page.close()
}

function sumit(){
    let res=confirm("Are you sure?")
    console.log(res)

    if(res){
        let page1=window.open("https://www.youtube.com/","_blank","height='750' width='750'")
    }
    else{
        let page1=window.open("","_blank","height='750' width='750'")
        page1.document.body.appendChild(h2)
    }
}


// setTimeout(()=>{
//     console.log("Gonna Come")    
//     let div = document.createElement("div")
//     div.innerText="Harish Weds Pavi!!!"
//     document.body.appendChild(div)
// },5000)

// setTimeout(()=>{
//     console.log("Gonna Come")    
//     let div = document.createElement("div")
//     div.innerText="Hoorayyyyy"
//     document.body.appendChild(div)
// },10000)

// setInterval(() => {
//     console.log("Gonna Come")    
//     let div = document.createElement("div")
//     div.innerText="Hoorayyyyy"
//     document.body.appendChild(div)
// }, 3000);

let h=0
let m=29
let s=10


setInterval(()=>{
    s--
    if(s==0){
        m--
        s=59
    }

    let div=document.getElementById("timer")
    div.innerHTML=`Your Offer will ends in ${h}<small> H</small>:${m}<small> M</small>:${s}<small> S</small>`
},1000)


