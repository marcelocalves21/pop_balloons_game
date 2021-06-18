let colors = ['blue', 'green', 'red', 'yellow', 'brown', 'black', 'brown', 'pink', 'purple']

//Make randon numbers 
const getRandom = (size) => {
    let random = Math.floor(Math.random() * size)
    return random
}

//Function to make the balloon list with the colors
const getColorBalloon = (arr) => {
    let colorBalloon = []
    for( let i =0; i < 20; i++){
        colorBalloon.push(arr[getRandom(arr.length)])
    }
    return colorBalloon
}

//Function Display the numbers of balloons on the HTML
const getBalloons = () => {
    let balloons = getColorBalloon(colors)
    let countDown = balloons.length
    for(let i = 0; i < balloons.length; i++){
        if(balloons[i] === null){
            countDown -= 1
        }
    }
    let h1 = document.createElement("h1")
    h1.innerText = `Pop all the ${countDown} balloons`
    document.querySelector(".balloon").appendChild(h1)

    for(let i = 0; i < balloons.length; i++){
        let spanTag = document.createElement("span")
        if(i === 0){
            continue
        }else if(i % 5 === 0){
            spanTag.innerText = `${balloons[i]} \n`
        }else{
            spanTag.innerText = `${balloons[i]} `
        }
        
        document.querySelector(".balloon").appendChild(spanTag)
    }
}

const popBalloon = () =>{
    
}



// let tableRow = document.querySelector(".ballon")
//     for(let i = 0; i < balloons.length; i++){
//         let row = tableRow.insertRow(i)
//         for(let j = 0; j < 5; j++)
//             var cell = row.insertCell(j)
//             cell.innerHTML = balloons[i]
//     }