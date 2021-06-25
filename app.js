const tableClasses = ['foto_1','foto_2','foto_3','foto_4','foto_5','foto_6','foto_7','foto_8','foto_9','foto_10','foto_11','foto_12','foto_13','foto_14','foto_15','foto_16','foto_17','foto_18','foto_19','foto_20']
const colors = ['blue', 'green', 'red', 'yellow', 'black', 'brown', 'pink', 'purple']


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
const displayBalloons = (balloons) => {
    let countDown = balloons.length
    let pop = 0
    for(let i = 0; i < balloons.length; i++){
        if(balloons[i] === null){
            pop += 1
        }
    }
    countDown -= pop
    if(countDown === 0){
        return window.location.reload()
    }
    // header with countdown 
    let h1 = `Pop all the ${countDown} balloons`
    document.querySelector(".header").innerText = h1
    // creating img for the ballons
    for(let i = 0; i < balloons.length; i++){
        let img = document.createElement("IMG");
        if(balloons[i] === null){
            img.setAttribute("src", `images/green_Balloon.png`)
            img.style.opacity = '0'
        }else {
            img.setAttribute("src", `images/${balloons[i]}_Balloon.png`)
        }
        img.setAttribute("width", "100")
        img.setAttribute("height", "100")
        
        document.querySelector(`.${tableClasses[i]}`).append(img)   
    }
    
}

// Poping the balloon
const popBalloon = (balloons, num) =>{
    balloons[num] = null
    for(let i = 0; i < balloons.length; i++){
        document.querySelector(`.${tableClasses[i]}`).innerHTML = ''   
    }

    displayBalloons(balloons)
}

// Inicialization function
const ini = () => {
    displayBalloons(balloons)

    
}

let balloons = getColorBalloon(colors)


// Click events to pop the balloon
document.querySelector('.foto_1').addEventListener("click", function(){
    popBalloon(balloons, 0)
})
document.querySelector('.foto_2').addEventListener("click", function(){
    popBalloon(balloons, 1)
})
document.querySelector('.foto_3').addEventListener("click", function(){
    popBalloon(balloons, 2)
})
document.querySelector('.foto_4').addEventListener("click", function(){
    popBalloon(balloons, 3)
})
document.querySelector('.foto_5').addEventListener("click", function(){
    popBalloon(balloons, 4)
})
document.querySelector('.foto_6').addEventListener("click", function(){
    popBalloon(balloons, 5)
})
document.querySelector('.foto_7').addEventListener("click", function(){
    popBalloon(balloons, 6)
})
document.querySelector('.foto_8').addEventListener("click", function(){
    popBalloon(balloons, 7)
})
document.querySelector('.foto_9').addEventListener("click", function(){
    popBalloon(balloons, 8)
})
document.querySelector('.foto_10').addEventListener("click", function(){
    popBalloon(balloons, 9)
})
document.querySelector('.foto_11').addEventListener("click", function(){
    popBalloon(balloons, 10)
})
document.querySelector('.foto_12').addEventListener("click", function(){
    popBalloon(balloons, 11)
})
document.querySelector('.foto_13').addEventListener("click", function(){
    popBalloon(balloons, 12)
})
document.querySelector('.foto_14').addEventListener("click", function(){
    popBalloon(balloons, 13)
})
document.querySelector('.foto_15').addEventListener("click", function(){
    popBalloon(balloons, 14)
})
document.querySelector('.foto_16').addEventListener("click", function(){
    popBalloon(balloons, 15)
})
document.querySelector('.foto_17').addEventListener("click", function(){
    popBalloon(balloons, 16)
})
document.querySelector('.foto_18').addEventListener("click", function(){
    popBalloon(balloons, 17)
})
document.querySelector('.foto_19').addEventListener("click", function(){
    popBalloon(balloons, 18)
})
document.querySelector('.foto_20').addEventListener("click", function(){
    popBalloon(balloons, 19)
})