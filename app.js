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
const clickBallon = () => {
    return tableClasses.forEach((item, index) => document.querySelector("." + item).addEventListener("click", () => popBalloon(balloons, index)))
}
clickBallon()
