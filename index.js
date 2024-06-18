let buttonb = null
let buttont = null
let boxb = null
let boxt = null
let popupb = null
let popupt = null
let linecount = null
let inputb = null
let inputt = null
let ordert = null
// let bground = null

window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("box")
    const log = document.getElementById("boxx")
    const count = document.getElementById("count1")
    if (input) {
        input.addEventListener("input", updateValue)
        function updateValue(e){
            let temp = e.target.value
            temp = temp.toString().replace(/(?!\s+$)\s+/g, ",")
            log.value = temp
            let arr = log.value.split(',')
            count.innerHTML = arr.length
            
        }
    }
})
var vegeta = false
function DBZ(param, url){
    //Remove bottom buttons
    remove()
    vegeta = true
    //Remove main image
    var temp2 = document.getElementById("main")
    temp2.remove()
    //Remove theme dropdown
    temp2 = document.getElementById("dropdown")
    temp2.remove()
    let temp3 = document.querySelector(".node0 .info #order")
    temp3.style.color = 'white';

    //Popup
    temp2 = document.getElementById("snackbar")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'
    temp2 = document.getElementById("added")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'
    temp2 = document.getElementById("removed")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'



    //Change background theme
    // document.body.style.backgroundImage = "url('vegeta.jpg')"
    if (param){
        document.body.style.backgroundImage = "url('vegeta.jpg')"
        document.body.style.backgroundSize = "contain"
    }
    else{
        document.body.style.backgroundImage = `url(${url})`
        document.body.style.backgroundSize = "cover"
    }
    
    document.body.style.backgroundColor = 'black'
    // document.body.style.backgroundSize = "contain"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundPosition = "center center"
    // document.body.style.width = "100%"

    Array.from(document.getElementsByTagName("input"))
    .map(b => {b.style.color = 'white', b.style.backgroundColor = 'black'})

    Array.from(document.getElementsByTagName("button"))
    .map(b => {b.style.color = 'white', b.style.backgroundColor = 'black', b.style.border = '2px solid white'})
    
    Array.from(document.getElementsByTagName("textarea"))
    .map(b => {b.style.background = 'black',b.style.color = 'white',b.style.opacity = '0.5', b.onmouseover = function(){b.style.opacity = '1'}, b.onmouseout = function(){b.style.opacity = '0.5'}})

    Array.from(document.getElementsByTagName("label"))
    .map(b => {b.style.color = 'black',b.style.color = 'white'} )

    Array.from(document.getElementsByTagName("p"))
    .map(b =>  b.style.color = 'white' )
}
function copyCSV(param) {
    if (param === 'removed' || param === 'added'){
        var x = document.getElementById(param);
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 500);
    }
    else{
    var copyText = document.getElementById(param.id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}

function checkout(param){
    var temp = document.getElementById(param.id).value
    if (temp) window.open('https://ims.fello.com/checking-out/' + temp, '_blank')
    else null
}
function edit(param){
    var temp = document.getElementById(param.id).value
    if (temp) window.open('https://ims.fello.com/order/edit/' + temp, '_blank')
    else null
}
function imageSwap(){
    var imageSrc = document.getElementById("profile").value
    var image = document.getElementById("main")
    if (imageSrc.length > 0) image.src = imageSrc
}
function show(){
    var imageSrc = document.getElementById("profile")
    var buttonsrc = document.getElementById("showbutton")
    if (buttonsrc.innerHTML === "Show"){
    buttonsrc.innerHTML="Hide"
    imageSrc.style.removeProperty("display")
    }
    else{
        buttonsrc.innerHTML="Show"
        imageSrc.style.display = "none"
    }
}
function remove(){
    var image = document.getElementById("main")
    image.style.display = "none";
    image = document.getElementById("swap")
    image.style.display = "none";
    image = document.getElementById("remove")
    image.style.display = "none";
    image = document.getElementById("showbutton")
    image.style.display = "none";
}
var textBox = []
    textBox.push("box")
function custom(){
    closeForm()
    var temp = document.getElementById("buttoncol").value
    var temp2 = document.getElementById("buttoncoll").value

    Array.from(document.getElementsByTagName("button"))
    .map((b,i) => {i < 21 ? null : (temp2 ?  (b.style.color = temp2,buttont = temp2) : null, temp ? (b.style.backgroundColor = temp, buttonb = temp) : null, temp2 ? b.style.border = "2px solid " + temp2 : null)} )

    var temp2 = document.getElementById("bgroundcol").value 

    var temp = document.getElementsByTagName("body")[0]
    temp2 ? temp.style.background = temp2 : null

    var temp2 = document.getElementById("box1col").value
    var temp3 = document.getElementById("box11col").value

    for(let i = 0; i < textBox.length; i++){
        let temp = document.getElementById(textBox[i])
        temp2 ? temp.style.background = temp2 : null
        temp3 ? temp.style.color = temp3 : null
    }
    temp2 ? boxb = temp2 : null
    temp3 ? boxt = temp3 : null

    var temp2 = document.getElementById("popupcol").value
    var temp3 = document.getElementById("popupcoll").value

    var temp = document.getElementById("snackbar")
    temp2 ? (temp.style.backgroundColor = temp2, popupb = temp2) : null
    temp3 ? (temp.style.color = temp3, popupt = temp3) : null
    var temp = document.getElementById("added")
    temp2 ? (temp.style.backgroundColor = temp2, popupb = temp2) : null
    temp3 ? (temp.style.color = temp3, popupt = temp3) : null
    var temp = document.getElementById("removed")
    temp2 ? (temp.style.backgroundColor = temp2, popupb = temp2) : null
    temp3 ? (temp.style.color = temp3, popupt = temp3) : null

    var temp2 = document.getElementById("pgraphcol").value
    Array.from(document.getElementsByTagName("p"))
    .map(b => temp2 ? (b.style.color = temp2, linecount = temp2) : null )

    var temp2 = document.getElementById("inputcol").value
    var temp3 = document.getElementById("inputcoll").value

    Array.from(document.getElementsByTagName("input"))
    .map((b,i) => {i < 11 ? null : (temp3 ? (b.style.color = temp3, inputt = temp3) : null, temp2 ? (b.style.backgroundColor = temp2, inputb = temp2) : null)} )

    var temp2 = document.getElementById("labelcol").value

    Array.from(document.getElementsByTagName("label"))
    .map((b,i) => i < 11 ? null : (temp2 ? (b.style.color = temp2, ordert = temp2) : null) )
}
function openForm() {
    
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").style.marginLeft = "50%";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function changeCol(col1,col2){
    var image = document.getElementById("profile").value
    var imageSrc = document.getElementById("main")
    if(image.length <= 0) 
        if (col2 === 'black') imageSrc.src = 'yoda.jpg'
        else if (col2 === 'white') imageSrc.src = 'vader.jpg'
        else imageSrc.src = 'anakin.jpg'


    for(let i = 0; i < textBox.length; i++){
        let temp = document.getElementById(textBox[i])
        temp.style.backgroundColor = col1
        temp.style.color = col2
    }
    boxb = col1
    boxt = col2


    var temp = document.getElementsByTagName("body")[0]
    if (col2 === 'red') temp.style.background = "linear-gradient(95deg, #972c2c, black)"
    else if (col1 === 'white') temp.style.background = "rgb(250, 249, 246)"  
    else temp.style.background = col1

    temp = document.getElementById("snackbar")
    temp.style.backgroundColor = col1
    popupb = col1
    temp.style.color = col2
    popupt = col2

    temp = document.getElementById("added")
    temp.style.backgroundColor = col1
    temp.style.color = col2
    popupb = col1
    popupt = col2

    var temp = document.getElementById("removed")
    temp.style.backgroundColor = col1
    temp.style.color = col2
    popupb = col1
    popupt = col2

    Array.from(document.getElementsByTagName("p"))
    .map(b => col2 === 'black' ? (b.style.color = col2, linecount = col2) : (b.style.color = 'white', linecount = 'white') )

 
    Array.from(document.getElementsByTagName("button"))
    .map((b,i) => {i < 21 ? null :  (b.style.color = col2, buttont = col2, b.style.backgroundColor = col1, buttonb = col1, col2 === 'red' ? b.style.border = 'none' : b.style.border = "2px solid " + col2)} )

    Array.from(document.getElementsByTagName("input"))
    .map((b,i) => {i < 11 ? null :  (b.style.color = col2, inputt = col2, col1 === 'white' ? (b.style.backgroundColor = 'lightgray', inputb = 'lightgray') : (b.style.backgroundColor = col1, inputb = col1))} )

    Array.from(document.getElementsByTagName("label"))
    .map((b,i) => i < 11 ? null : col2 === 'black' ? (b.style.color = col2, ordert = col2) : (b.style.color = 'white', ordert = 'white') )
}
var count = 1
function createForm(){
    copyCSV('added')
    let insidecount = count
    //Creation of div inside of main div "magic"
    let val_og = document.createElement("div")
    val_og.style.animation = 'fadeIn 1.5s'
    val_og.classList.add("node" + count)
    const element = document.getElementById("magic")
    element.append(val_og)

    let exit = document.createElement("img")
    exit.src = 'close.png'
    exit.style.width = '15px'
    exit.style.marginLeft = '50%';
    exit.style.cursor = 'pointer';
    exit.style.marginBottom = '10px';
    exit.addEventListener('click', function(){
        val_og.remove()
        let x = textBox.indexOf('box' + insidecount)
        textBox.splice(x, 1)
        copyCSV('removed')
    })
    val_og.append(exit)
    //Info div starts here
    let val2 = document.createElement("div")
    val2.classList.add("info")
    val_og.append(val2)

    // val = document.createElement()
    let val = document.createElement("label")
    val.htmlFor = "order" + count
    val2.append(val)
    let node = document.createTextNode("Order Number: ")
    let val3 = document.createElement("b")
    val.style.color = ordert ? ordert : 'white'
    val3.append(node)
    val.append(val3)

    let inputval = document.createElement("input")
    inputval.type = 'text'
    inputval.name = 'order' + count
    inputval.id = 'order' + count
    inputval.placeholder = 'SQ1234'
    val2.append(inputval);
    vegeta ? inputval.style.color = 'white' : inputt ? inputval.style.color = inputt : null
    inputval.style.backgroundColor = inputb ? inputb : null

    val3 = document.createElement("button")
    val3.addEventListener('click', function(){
        if (inputval.value) window.open('https://ims.fello.com/order/edit/' + inputval.value, '_blank')
        else null
    })
    node = document.createTextNode("Edit")
    val3.append(node)
    vegeta ? val3.style.color = 'white' : buttont ? (val3.style.color = buttont, val3.style.border = (buttont === 'red') ? null : '2px solid ' + buttont) : null
    val3.style.backgroundColor = buttonb ? buttonb : null
    vegeta ? val3.style.border = '2px solid white' : null
    val2.append(val3)

    val3 = document.createElement("button")
    val3.addEventListener('click', function(){
        if (inputval.value) window.open('https://ims.fello.com/checking-out/' + inputval.value, '_blank')
        else null
    })
    node = document.createTextNode("Checkout")
    val3.append(node)
    vegeta ? val3.style.color = 'white' : buttont ? (val3.style.color = buttont, val3.style.border = (buttont === 'red') ? null : '2px solid ' + buttont) : null
    val3.style.backgroundColor = buttonb ? buttonb : null
    vegeta ? val3.style.border = '2px solid white' : null
    val2.append(val3)

    val3 = document.createElement("button")
    val3.addEventListener('click', function(){
        val4.select();
        val4.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(val4.value);
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    })
    node = document.createTextNode("CopyCSV")
    val3.append(node)
    vegeta ? val3.style.color = 'white' : buttont ? (val3.style.color = buttont, val3.style.border = (buttont === 'red') ? null : '2px solid ' + buttont) : null
    val3.style.backgroundColor = buttonb ? buttonb : null
    vegeta ? val3.style.border = '2px solid white' : null
    val2.append(val3)


    //Text areas start here
    val = document.createElement("div")
    val.style.display = "flex"


    val3 = document.createElement("textarea")
    val3.id  = "box" + count
    textBox.push(val3.id)
    val3.cols = "20"
    val3.rows = "30"
    val3.placeholder = "Enter (or paste) your column of data here"
    val3.style.width = "160px"
    val3.style.fontSize = "20px";
    val3.style.backgroundColor = boxb ? boxb : "black"
    vegeta ? val3.style.color =  "white" : boxt ? val3.style.color =  boxt : val3.style.color =  "red"
    vegeta && (val3.style.opacity = 0.5, val3.onmouseover = function(){val3.style.opacity = '1'}, val3.onmouseout = function(){val3.style.opacity = '0.5'})
    
    
    val.append(val3)

    let val4 = document.createElement("textarea")
    val4.id  = "boxx" + count
    val4.cols = "20"
    val4.rows = "30"
    val4.placeholder = "Your comma separated list of data will appear here"
    val4.style.width = "300px"
    val4.style.fontSize = "20px";
    val4.style.backgroundColor = vegeta ? "black" : "#ccffcc"
    vegeta && (val4.style.color = 'white', val4.style.opacity = 0.5, val4.onmouseover = function(){val4.style.opacity = '1'}, val4.onmouseout = function(){val4.style.opacity = '0.5'})
    val.append(val4)
    val_og.append(val)

    //End of text area
    val = document.createElement("div")
    val.id = "line"
    val.style.display = "flex"
    val.style.fontSize = "20px"
    val.style.color = linecount ? linecount : "white"
    
    val2 = document.createElement("p")
    node = document.createTextNode("Line Count: ")
    val2.append(node)
    val.append(val2)
    val2 = document.createElement("p")
    val2.id = "count" + count
    val.append(val2)

    val_og.append(val)
    // const value = document.getElementById("count4")
    if (val3) {
        val3.addEventListener("input", updateValue)
        function updateValue(e){
            let temp = e.target.value
            temp = temp.toString().replace(/(?!\s+$)\s+/g, ",")
            val4.value = temp
            let arr = val4.value.split(',')
            val2.innerHTML = arr.length
        }
    }
    count++
}