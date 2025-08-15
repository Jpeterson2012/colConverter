
let buttonb = null;let buttont = null;let boxb = null;let boxt = null;let popupb = null;let popupt = null;let linecount = null;let inputb = null;let inputt = null;let ordert = null

function duplicate(a){
    const alreadySeen = {}
    let set = new Set()
    let x = document.getElementById("snackbar2")
    let closeOut = document.getElementById("snackButton")
    let boxText = document.getElementById("boxxxx")
    
    a.forEach(str => alreadySeen[str] ? set.add(str) : alreadySeen[str] = true)
    let setArray = [...set]
    
    set.size == 0 ? console.log("No duplicates found") : (
        boxText.value = setArray.join('\n'),

        x.className = "show",
        closeOut.addEventListener("click", (() => {
            x.className = x.className.replace("show", "");
        }))
    )
    if (setArray.join('\n') == "") x.className = x.className.replace("show", "");
}
function loadSaved(){
    //Localstorage retrieval in case page closed by accident
    const input = document.getElementById("box")
    let localVals = JSON.parse(localStorage.getItem("items"))    
    //Set theme on page open if exists
    let theme = localStorage.getItem('theme')    
    if (theme !== undefined && theme !== null){
        let themeButton = document.getElementById(theme)
        themeButton.click()
        document.body.style.display = 'inline'        

    }
    else{
        document.body.style.display = 'inline'        
    }

    let addButton = document.getElementById("createFormButton")        
    if (localVals !== null){

        if (localVals.length === 1){
            input.value = localVals[0].data
            document.getElementById('order').value = localVals[0].orderNum
            document.getElementById('boxx').value = localVals[0].data.replace(/(?!\s+$)\s+/g, ",")
            // console.log(localVals[0].data.split('\n'))
            if (localVals[0].data !== '') document.getElementById('count1').innerHTML = localVals[0].data.split('\n').length
        }
        else{            
            localVals.map((a,i) => {
                // console.log(a)
                if (i === 0){
                    input.value = a.data
                    document.getElementById('order').value = a.orderNum
                    document.getElementById('boxx').value = a.data.replace(/(?!\s+$)\s+/g, ",")
                    // console.log(a.data.split('\n').length)
                    if (a.data !== '') document.getElementById('count1').innerHTML = a.data.split('\n').length                    
                }
                else{
                    addButton.click()
                    
                    let name = "order" + i
                    let name2 = "box" + i
                    let name3 = "boxx" + i
                    let name4 = "count" + (i + 1)
                    document.getElementById(name).value = a.orderNum
                    document.getElementById(name2).value = a.data
                    document.getElementById(name3).value = a.data.replace(/(?!\s+$)\s+/g, ",")         
                    if (a.data !== '') document.getElementById(name4).innerHTML = a.data.split('\n').length                                                    
                    // console.log(a.data.split('\n').length)      
                }          
            })
        }
        
    }
}

function addOrders(){
    const text = document.getElementById("boxxx")
    // let temp = text.value.replaceAll('\n','')
    let temp = text.value.split('\n').filter(a => a !== '')
         
    // console.log(temp2)
    if(temp.length > 0){
        if (orderBox.length - 2 >= temp.length){                  
            let temp2 = [...orderBox]
            temp2.splice(1,2)  
            for (let i = 0; i < temp.length; i++){            
                document.getElementById(temp2[i]).value = temp[i]
            }
        }
        else{
            let temp3 = temp.length - (orderBox.length - 2)
            let addButton = document.getElementById("createFormButton")
            for (let i = 0; i < temp3; i++) addButton.click()        
            temp3 = [...orderBox]
            temp3.splice(1,2)
            for (let i = 0; i < temp.length; i++)  document.getElementById(temp3[i]).value = temp[i]        
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {    
    loadSaved()

    const log = document.getElementById("boxx")
    const count = document.getElementById("count1")
    const input = document.getElementById("box")    
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
    const text = document.getElementById("boxxx")
    const count2 = document.getElementById("count0")
    if (text) {
        text.addEventListener("input", updateValue)
        function updateValue(e){
            let temp = e.target.value
            let temp2 = temp.toString().replace(/,/g, "\n")
            text.value = temp2
            let arr2 = text.value.split('\n')
            //allows the count to only utilize actual text, instead of black spaces from newline chars
            arr2 = arr2.filter(a => a != '')
            count2.innerHTML = arr2.length
            setTimeout(()=>{
                duplicate(arr2)
            },500)            
        }
    }    
    //Clear out data on page load after use
    localStorage.removeItem('items')    
})

function hideRemoval(){
    var text = document.getElementById("removal")
    var buttonsrc = document.getElementById("removebutton")
    console.log(buttonsrc.src)
    if (text.hidden === false){
    buttonsrc.src = 'show.png'
    text.hidden = true
    }
    else{
        buttonsrc.src = 'hide.png'
        text.hidden = false
    }
}

var vegeta = false
function DBZ(url, theme){
    localStorage.setItem('theme', theme)
    vegeta = true
    // closeForm()
    //Remove bottom buttons
    // remove()    
    //Remove main image
    // var temp2 = document.getElementById("main")
    // temp2.remove()
    //Remove theme dropdown
    // temp2 = document.getElementById("dropdown")
    // temp2.remove()
    let temp3 = document.querySelector(".node0 .info #order")
    temp3.style.color = 'white';
    //Popup
    let temp2 = document.getElementById("snackbar")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'

    temp2 = document.getElementById("snackbar2")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'
    
    temp2 = document.getElementById("added")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'
    temp2 = document.getElementById("removed")
    temp2.style.backgroundColor = 'black'
    temp2.style.color = 'white'

    //Change background theme    
    if (url == 'vegeta.jpg'){
        document.body.style.backgroundImage = "url('vegeta.jpg')"
        document.body.style.backgroundSize = "contain"
        let temp = document.getElementById("leaves")
        temp.style.display = 'none'
        temp = document.getElementById("christmas")
        temp.style.display = 'none'
        
        temp = document.getElementById("ravens")
        temp.style.display = ''
    }
    else if (url == 'coffee.gif' || url == 'winter.webp'){
        let temp = document.getElementById("leaves")
        temp.style.display = 'none'
        temp = document.getElementById("ravens")
        temp.style.display = 'none'
        temp = document.getElementById("christmas")
        temp.style.display = ''
        
    }
    else{    
        let temp = document.getElementById("leaves")
        temp.style.display = ''
        temp = document.getElementById("ravens")
        temp.style.display = 'none'
        temp = document.getElementById("christmas")
        temp.style.display = 'none'
    }

    document.body.style.backgroundImage = `url(${url})`
    document.body.style.backgroundSize = "cover"
    if (url == 'autumn.gif'){
        Array.from(document.getElementsByTagName("iframe"))
            .map(i => i.style.display = '' )
    }
    else{
        Array.from(document.getElementsByTagName("iframe"))
            .map(i => i.style.display = 'none' )
    }                        
        
    document.body.style.backgroundColor = 'black'
    // document.body.style.backgroundSize = "contain"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundPosition = "center center"
    // document.body.style.width = "100%"
    let newPic = document.getElementById('newButtonCont2')
    newPic.style.opacity = '0.7';
    newPic.onmouseover = function(){newPic.style.opacity = '1'}, newPic.onmouseout = function(){newPic.style.opacity = '0.7'}
    newPic.style.maxWidth = 'fit-content'
    
    Array.from(document.getElementsByClassName('newButtonCont')) 
    .map(b => {b.style.opacity = '0.7',b.onmouseover = function(){b.style.opacity = '1'}, b.onmouseout = function(){b.style.opacity = '0.7'}})
    // Array.from(document.getElementsByClassName("textButton"))
    // .map(b => {b.style.opacity = '0.5'})

    Array.from(document.getElementsByTagName("input"))
    .map(b => {b.style.color = 'white', b.style.backgroundColor = 'black'})

    // Array.from(document.getElementsByTagName("button"))
    // .map(b => {b.style.color = 'white', b.style.backgroundColor = 'black', b.style.border = '2px solid white'})
    
    Array.from(document.getElementsByTagName("textarea"))
    .map(b => {b.style.background = 'black',b.style.color = 'white',b.style.opacity = '0.5', b.onmouseover = function(){b.style.opacity = '1'}, b.onmouseout = function(){b.style.opacity = '0.5'}})

    Array.from(document.getElementsByTagName("label"))
    .map(b => {b.style.color = 'black',b.style.color = 'white'} )

    Array.from(document.getElementsByTagName("p"))
    .map(b =>  b.style.color = 'white' )

    buttonb = null
    buttont = null
    boxb = null
    boxt = null
    popupb = null
    popupt = null
    linecount = null
    inputb = null
    inputt = null
    ordert = null
}

function eraseText(param1, param2, param3){
    if (param1.id == 'boxxx'){
        document.getElementById(param1.id).value = "";
        document.getElementById("count0").innerHTML = "";
        let x = document.getElementById("snackbar2")
        x.className = x.className.replace("show", "")
    }
    else{
        document.getElementById(param1.id).value = "";
        document.getElementById(param2.id).value = "";
        document.getElementById(param3.id).value = "";
        if (param1.id === 'box'){
            document.getElementById("count1").innerHTML = "";
        }
    }
}

function copyCSV(param) {
    if (param === 'removed' || param === 'added'){
        var x = document.getElementById(param);
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
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

function openMdm(param){
    var temp = document.getElementById(param.id).value
    if (temp) window.open('https://a.simplemdm.com/admin/v2/devices?group=&order=name&orderD=desc&page=0&per=100&saveQuery=true&search=' + temp, '_blank')
    else null
}

//Push original three textboxes into stack
var textBox = []
textBox.push("box", "boxxx", "boxxxx")        

var orderBox = []
//Push original order field with 2 dummy vals to line up w/ above when using localstorage
orderBox.push("order", "orderrr", "orderrr")

function changeCol(col1,col2){
    localStorage.removeItem('theme')
    //Change back to leaves and original color schemes
    vegeta = false
    let theme = document.getElementById("leaves")
    theme.style.display = ''
    theme = document.getElementById("ravens")
    theme.style.display = 'none'
    theme = document.getElementById("christmas")
    theme.style.display = 'none'
    //Remove charlie brown gifs from autumn theme
    Array.from(document.getElementsByTagName("iframe"))
        .map(i => i.style.display = 'none' )

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

    temp = document.getElementById("snackbar2")
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

    Array.from(document.getElementsByTagName("input"))
    .map((b,i) => {(b.style.color = col2, inputt = col2, col1 === 'white' ? (b.style.backgroundColor = 'lightgray', inputb = 'lightgray') : (b.style.backgroundColor = col1, inputb = col1))} )

    Array.from(document.getElementsByTagName("label"))
    .map((b,i) => col2 === 'black' ? (b.style.color = col2, ordert = col2) : (b.style.color = 'white', ordert = 'white') )

    Array.from(document.getElementsByTagName("textarea"))
    .map((b,i) => {b.style.opacity = '1', b.onmouseover = '', b.onmouseout = '', ((i % 2 === 0 && i > 2) || i === 1 || i === 3) ? (b.style.background = col1, b.style.color = col2) : (b.style.background = '#ccffcc',b.style.color = 'black')})

    Array.from(document.getElementsByClassName('newButtonCont')) 
    .map(b => {b.style.opacity = '1',b.onmouseover = '', b.onmouseout = ''})   

    temp = document.getElementById('newButtonCont2') 
    temp.style.opacity = '1'
    temp.onmouseover = ''
    temp.onmouseout = ''
}

var count = 1
function createForm(){    
    copyCSV('added')
    let insidecount = count

    //Creation of div inside of main div "magic"
    let containerDiv = document.createElement("div")
    containerDiv.style.animation = 'fadeIn 1.5s'
    containerDiv.classList.add("node" + count)

    //Main project container
    const magic = document.getElementById("magic")
    magic.append(containerDiv)

    //Creation of close button element
    let deleteForm = document.createElement("img")
    deleteForm.src = 'close.png'
    deleteForm.style.width = '22px'
    deleteForm.style.marginLeft = '50%';
    deleteForm.style.cursor = 'pointer';
    deleteForm.style.marginBottom = '10px';
    deleteForm.style.background = 'white';
    deleteForm.style.borderRadius = '16px';
    deleteForm.onmouseover = function(){deleteForm.classList.add('hovered')}
    deleteForm.onmouseout = function(){deleteForm.classList.remove('hovered')}
    deleteForm.addEventListener('click', function(){
        containerDiv.remove()
        let x = textBox.indexOf('box' + insidecount)
        //Removes orderbox in same place as text box to ensure local storage functions properly
        textBox.splice(x, 1)
        orderBox.splice(x, 1)            
        copyCSV('removed')
    })
    containerDiv.append(deleteForm)

    //Creation of info div
    let infoDiv = document.createElement("div")
    infoDiv.classList.add("info")
    containerDiv.append(infoDiv)

    //Creation of label element
    let label = document.createElement("label")
    label.htmlFor = "order" + count
    infoDiv.append(label)
    let node = document.createTextNode("Order# ")
    //Creation of bold element
    let boldElement = document.createElement("b")
    label.style.color = ordert ? ordert : 'white'
    boldElement.append(node)
    label.append(boldElement)

    //Creation of input element
    let inputElement = document.createElement("input")
    inputElement.type = 'text'
    inputElement.name = 'order' + count
    inputElement.id = 'order' + count
    orderBox.push(inputElement.id)
    inputElement.placeholder = 'SQ1234'
    infoDiv.append(inputElement);
    vegeta ? inputElement.style.color = 'white' : inputt ? inputElement.style.color = inputt : null
    inputElement.style.backgroundColor = inputb ? inputb : null
   
    let topButtonContainer = document.createElement("div")
    topButtonContainer.classList.add('newButtonCont')
    // vegeta ? topButtonContainer.style.opacity = '0.7' : '1'
    vegeta && (topButtonContainer.style.opacity = '0.7', topButtonContainer.onmouseover = function(){topButtonContainer.style.opacity = '1'}, topButtonContainer.onmouseout = function(){topButtonContainer.style.opacity = '0.7'})
    topButtonContainer.style.display = "flex"
    topButtonContainer.style.background = "white"
    topButtonContainer.style.width = "296px"
    topButtonContainer.style.justifyContent = "space-between"
    topButtonContainer.style.borderRadius = "16px"
    //Clear Img
    let clearButton = document.createElement("img")
    clearButton.addEventListener('click', function(){
        eraseText(boldElement,textArea2,inputElement)
    })
    
    clearButton.src = 'clear.png'
    clearButton.classList.add('textButton')
    topButtonContainer.append(clearButton)
    
    //Edit Image
    let imgButton = document.createElement("img")
    imgButton.addEventListener('click', function(){
        if (inputElement.value) window.open('https://ims.fello.com/order/edit/' + inputElement.value, '_blank')
        else null
    })    
    imgButton.src = 'edit.png'
    imgButton.classList.add('textButton')
    topButtonContainer.append(imgButton)
    
    //Checkout Image
    imgButton = document.createElement("img")
    imgButton.addEventListener('click', function(){
        if (inputElement.value) window.open('https://ims.fello.com/checking-out/' + inputElement.value, '_blank')
        else null
    })    
    imgButton.src = 'checkout.png'
    imgButton.classList.add('textButton')
    topButtonContainer.append(imgButton)

    //Copy CSV Img
    imgButton = document.createElement("img")
    imgButton.addEventListener('click', function(){
        textArea2.select();
        textArea2.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textArea2.value);
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    })    
    imgButton.src = 'copy.png'
    imgButton.classList.add('textButton')
    topButtonContainer.append(imgButton)

    imgButton = document.createElement("img")
    imgButton.addEventListener('click', function(){
        if (inputElement.value) window.open('https://a.simplemdm.com/admin/v2/devices?group=&order=name&orderD=desc&page=0&per=100&saveQuery=true&search=' + inputElement.value, '_blank')            
        else null
    })    
    imgButton.src = 'mdm.png'
    imgButton.classList.add('textButton')
    topButtonContainer.append(imgButton)

    infoDiv.append(topButtonContainer)

    //Text areas start here
    let textAreaDiv = document.createElement("div")
    textAreaDiv.style.display = "flex"

    let textArea1 = document.createElement("textarea")
    textArea1.id  = "box" + count
    textBox.push(textArea1.id)    
    textArea1.cols = "20"
    textArea1.rows = "30"
    textArea1.placeholder = "Enter (or paste) your column of data here"
    textArea1.style.width = "160px"
    textArea1.style.fontSize = "20px";
    textArea1.style.backgroundColor = boxb ? boxb : "black"
    vegeta ? textArea1.style.color =  "white" : boxt ? textArea1.style.color =  boxt : textArea1.style.color =  "red"
    vegeta && (textArea1.style.opacity = 0.5, textArea1.onmouseover = function(){textArea1.style.opacity = '1'}, textArea1.onmouseout = function(){textArea1.style.opacity = '0.5'})    
    
    textAreaDiv.append(textArea1)

    let textArea2 = document.createElement("textarea")
    textArea2.id  = "boxx" + count
    textArea2.cols = "20"
    textArea2.rows = "30"
    textArea2.placeholder = "Your comma separated list of data will appear here"
    textArea2.style.width = "300px"
    textArea2.style.fontSize = "20px";
    textArea2.style.backgroundColor = vegeta ? "black" : "#ccffcc"
    vegeta && (textArea2.style.color = 'white', textArea2.style.opacity = 0.5, textArea2.onmouseover = function(){textArea2.style.opacity = '1'}, textArea2.onmouseout = function(){textArea2.style.opacity = '0.5'})
    textAreaDiv.append(textArea2)
    containerDiv.append(textAreaDiv)

    //End of text area/creation of line div
    let lineDiv = document.createElement("div")
    lineDiv.id = "line"
    lineDiv.style.display = "flex"
    lineDiv.style.fontSize = "20px"
    lineDiv.style.color = linecount ? linecount : "white"
    
    //Creation of p element inside line div
    let pElement = document.createElement("p")
    node = document.createTextNode("Line Count: ")
    pElement.append(node)
    lineDiv.append(pElement)
    pElement = document.createElement("p")    
    pElement.id = "count" + (count + 1)
    
    lineDiv.append(pElement)

    containerDiv.append(lineDiv)
    // const value = document.getElementById("count4")
    if (textArea1) {
        textArea1.addEventListener("input", updateValue)
        function updateValue(e){
            let textArea1Content = e.target.value
            textArea1Content = textArea1Content.toString().replace(/(?!\s+$)\s+/g, ",")
            textArea2.value = textArea1Content
            let textArea2Content = textArea2.value.split(',')
            pElement.innerHTML = textArea2Content.length
        }
    }
    clearButton.addEventListener('click', function(){
        eraseText(textArea1,textArea2,inputElement)
        pElement.innerHTML = "";
    })
    count++               
}

window.addEventListener("beforeunload", () => {    
    let arr = []    
    for(let i = 0; i < textBox.length; i++){
        if (textBox[i] === 'boxxx' || textBox[i] === 'boxxxx') null
        else{
            let temp = document.getElementById(textBox[i])                         
            let val = document.getElementById(orderBox[i])
            
            arr.push({ data: temp.value, orderNum: val.value })            
        }        
    }
    localStorage.setItem("items", JSON.stringify(arr))        
        
    return ''
})

