const themes = [
    {id: "original", label: "Original", action: () => changeCol("black", "red", "original")},
    {id: "dark", label: "Dark", action: () => changeCol("black", "white", "dark")},
    {id: "theme1", label: "Jay", image: "vegeta.jpg", mode: "ravens", contain: true},
    {id: "theme2", label: "fw", image: "fw.png"},
    {id: "theme3", label: "japan", image: "japan.gif"},
    {id: "theme4", label: "fall", image: "autumn.gif"},
    {id: "theme5", label: "vw", image: "vaporwave.gif"},
    {id: "theme6", label: "dusk", image: "dusk.gif"},
    {id: "theme7", label: "winter1", image: "coffee.gif", mode: "christmas"},
    {id: "theme8", label: "winter2", image: "winter.webp", mode: "christmas"},
    {id: "theme9", label: "8bit", image: "8bit.gif"},
    {id: "theme10", label: "trees", image: "trees.png"},
    {id: "theme11", label: "future", image: "future.jpg"},
    {id: "theme12", label: "island", image: "island.png"},
    {id: "theme13", label: "forest", image: "forest.jpg"},
    {id: "theme14", label: "halo3", image: "halo3.jpg"},
    {id: "theme15", label: "celeste", image: "celeste.avif"},
    {id: "theme16", label: "sunset", image: "vwsunset.gif"},
    {id: "theme17", label: "sunset2", image: "vwsunset2.jpg"},
    {id: "theme18", label: "spring", image: "spring.jpg"},
    {id: "theme19", label: "spring2", image: "spring2.jpg"},
    {id: "theme20", label: "bridge", image: "bridge.jpg"},
    {id: "theme21", label: "splash", image: "watersplash.png"},
    {id: "theme22", label: "beach", image: "beach.gif"},
    {id: "theme23", label: "pier", image: "sunset.jpg"},
    {id: "theme24", label: "fall2", image: "autumn.jpg"},
    {id: "theme25", label: "summer1", image: "summer1.jpg"},
    {id: "theme26", label: "summer2", image: "summer2.jpg"},
    {id: "theme27", label: "xbox", image: "xboxGreen.jpg"},
    {id: "theme28", label: "pstation", image: "playstation.png"},
    {id: "theme29", label: "nintendo", image: "nintendo.jpg"},
    {id: "theme30", label: "blackops", image: "blackops.jpg"},
];

const initialColorState = {
    boxBg: null,
    boxText: null,
    popupBg: null,
    popupText: null,
    lineText: null,
    inputBg: null,
    inputText: null,
    orderText: null,
};

const colors = {...initialColorState};

const state = {
    textBox: ["box", "boxxx", "boxxxx"],
    orderBox: ["order", "orderrr", "orderrr"],
    count: 1,
    vegeta: false,
};

const links = {
    'checkout': 'https://ims.fello.com/checking-out/',
    'edit': 'https://ims.fello.com/order/edit/',
    'mdm': 'https://a.simplemdm.com/admin/v2/devices?group=&order=name&orderD=desc&page=0&per=100&saveQuery=true&search=',
};

const $ = id => document.getElementById(id);

const $$ = selector => document.querySelectorAll(selector);

const setColors = (el, bg, color) => {
    if (bg != null) el.style.backgroundColor = bg;

    if (color != null) el.style.color = color;
};

const setMouseOpacity = (el, over, out) => {
    el.onmouseover = () => el.style.opacity = over;
        
    el.onmouseout = () => el.style.opacity = out;
};

const resetOpacity = (el) => {
    el.style.opacity = '1';

    el.onmouseover = '';
        
    el.onmouseout = '';
};

const duplicate = (array) => {
    const alreadySeen = {};

    const set = new Set();

    const snack = $("snackbar2");

    const closeOut = $("snackButton");

    const boxText = $("boxxxx");
    
    array.forEach(str => alreadySeen[str] ? set.add(str) : alreadySeen[str] = true);

    const setArray = [...set];

    if (!set.size) {
        console.log("No duplicates found");
    } else {
        boxText.value = setArray.join('\n');

        snack.className = "show";
        
        closeOut.onclick = () => {
            snack.className = snack.className.replace("show", "");
        };
    }

    if (!setArray.length) snack.className = snack.className.replace("show", "");
};

const loadSaved = () => {
    //Localstorage retrieval in case page closed by accident
    const input = $("box");

    let localVals = JSON.parse(localStorage.getItem("items"));      
    //Set theme on page open if exists
    const theme = localStorage.getItem('theme') ?? themes[0].id;

    const themeButton = $(theme);

    themeButton.click();

    document.body.style.display = 'inline';

    const addButton = $("createFormButton");

    const isValid = localVals && localVals.some(val => val.data || val.orderNum);

    if (isValid) {
        localVals.forEach((val, index, arr) => {                
            index && addButton.click();
            
            const indexVal = index || "";            
            
            $(`order${indexVal}`).value = val.orderNum;

            $(`box${indexVal}`).value = val.data;

            $(`boxx${indexVal}`).value = val.data.replace(/(?!\s+$)\s+/g, ",");

            if (val.data !== '') {
                const countId = arr.length === 1 ? 1 : index + 1;

                $(`count${countId}`).innerHTML = val.data.split('\n').length;
            }          
        });
    }    
};

const addOrders = () => {
    const text = $("boxxx");
    // let temp = text.value.replaceAll('\n','')
    let textValue = text.value.split('\n').filter(a => a !== '');
         
    // console.log(temp2)
    if(textValue.length) {
        if (state.orderBox.length - 2 >= textValue.length) {                  
            const orderBoxCopy = [...state.orderBox];

            orderBoxCopy.splice(1,2);

            for (let i = 0; i < textValue.length; i++) {            
                $(orderBoxCopy[i]).value = textValue[i];
            }
        } else {
            const newLength = textValue.length - (state.orderBox.length - 2);

            const addButton = $("createFormButton");

            for (let i = 0; i < newLength; i++) addButton.click();

            const orderBoxCopy = [...state.orderBox];

            orderBoxCopy.splice(1,2);

            for (let i = 0; i < textValue.length; i++)  $(orderBoxCopy[i]).value = textValue[i];        
        }
    }
};

window.addEventListener("DOMContentLoaded", () => {    
    renderThemes();
    renderLeaves();
    renderRavensLogos();
    renderChristmasicons();
    loadSaved();

    const log = $("boxx");

    const count = $("count1");

    const input = $("box");

    if (input) {
        const updateValue = (e) => {
            const value = e.target.value.toString().replace(/(?!\s+$)\s+/g, ",");
            
            log.value = value;
            
            count.innerHTML = log.value.split(',').length;                        
        };

        input.addEventListener("input", updateValue);    
    }

    const text = $("boxxx");

    const count2 = $("count0");

    if (text) {        
        const updateValue = (e) => {
            const value = e.target.value.toString().replace(/,/g, "\n");
            
            text.value = value;            
            //allows the count to only utilize actual text, instead of black spaces from newline chars
            const arr = text.value.split('\n').filter(a => a != '');
            count2.innerHTML = arr.length;

            setTimeout(() => {
                duplicate(arr);
            },500);            
        };

        text.addEventListener("input", updateValue);
    }    
    //Clear out data on page load after use
    localStorage.removeItem('items');
    
    const dropdown = $("dropdown");

    const button = dropdown.querySelector(".dropbtn");

    button.addEventListener("click", (e) => {
        e.stopPropagation();

        dropdown.classList.toggle("open");
    });
    
    document.addEventListener("click", () => {
        dropdown.classList.remove("open");
    });
    
    dropdown.querySelector(".dropdown-content").addEventListener("click", (e) => {
        e.stopPropagation();
    });

    const email = $("emailh");

    email.addEventListener("click", () => {
        email.classList.toggle("show");
    });
});

const hideRemoval = () => {
    const text = $("removal");

    const buttonsrc = $("removebutton");    

    buttonsrc.src = `images/${text.hidden ? 'hide.png' : 'show.png'}`;

    text.hidden = !text.hidden;
};

const DBZ = (theme) => {
    const {id, image, mode, contain} = theme;

    localStorage.setItem('theme', id);

    state.vegeta = true;

    const orderNumberText = document.querySelector(".node0 .info #order");

    orderNumberText.style.color = 'white';
    //Popup
    ["snackbar", "snackbar2", "added", "removed"].forEach(val => {
        setColors($(val), "black", "white");
    });    

    //Change background theme        
    $("leaves").style.display = mode ? "none" : "";
    $("ravens").style.display = mode === "ravens" ? "" : "none";
    $("christmas").style.display = mode === "christmas" ? "" : "none";

    Object.assign(document.body.style, {
        backgroundImage: `url(images/${image})`,
        backgroundSize: contain ? "contain" : "cover",
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    });

    const isAutumnGif = (image === 'autumn.gif');

    $$("iframe").forEach(frame => {
        frame.style.display = isAutumnGif ? '' : 'none';
    });
    
    const newPic = $('newButtonCont2');

    setMouseOpacity(newPic, '1', '0.7');

    Object.assign(newPic.style, {
        opacity: '0.7',
        maxWidth: 'fit-content',
    });

    $$(".newButtonCont").forEach(btn => {
        btn.style.opacity = '0.7';

        setMouseOpacity(btn, '1', '0.7');
    });

    $$("input").forEach(input => {
        setColors(input, "black", "white");
    });

    $$("textarea").forEach(area => {
        setColors(area, "black", "white");

        area.style.opacity = '0.5';

        setMouseOpacity(area, '1', '0.5');
    });

    ["label", "p"].forEach(selector =>
        $$(selector).forEach(el => {
            el.style.color = "white";
        })
    );

    Object.assign(colors, initialColorState);
};

const eraseText = (param1, param2, param3) => {    
    $(param1.id).value = "";

    if (param1.id == 'boxxx') {        
        $("count0").innerHTML = "";

        const snack = $("snackbar2");

        snack.className = snack.className.replace("show", "");
    } else {        
        $(param2.id).value = "";

        $(param3.id).value = "";

        if (param1.id === 'box') {
            $("count1").innerHTML = "";
        }
    }
};

const copyCSV = (param) => {
    if (["removed", "added"].includes(param)) {
        const snack = $(param);

        snack.className = "show";

        setTimeout(() => {
            snack.className = snack.className.replace("show", "");
        }, 1500);
    } else {
        const copyText = $(param.id);

        copyText.select();

        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);
        
        const snack = $("snackbar");

        snack.className = "show";

        setTimeout(() => {
            snack.className = snack.className.replace("show", "");
        }, 3000);
    }
};

const openLink = (el, type) => {
    const elValue = $(el.id).value;    

    if (elValue) {
        const url = links[type];

        window.open(`${url}${elValue}`, '_blank');
    }
};

const changeCol = (col1, col2, id) => {
    localStorage.setItem('theme', id);
    
    state.vegeta = false;

    ["leaves", "ravens", "christmas"].forEach((theme, index) => {
        const el = $(theme);

        el.style.display = index ? 'none' : '';
    });

    $$("iframe").forEach(frame => {
        frame.style.display = 'none';
    });

    state.textBox.forEach(box => {
        const el = $(box);

        setColors(el, col1, col2);
    });

    const col2Black = (col2 === 'black');
    const col1White = (col1 === 'white');

    Object.assign(colors, {        
        boxBg: col1,
        boxText: col2,
        popupBg: col1,
        popupText: col2,
        inputText: col2,
        inputBg: col1White ? 'lightgray' : col1,
        orderText: col2Black ? col2 : 'white',
        lineText: col2Black ? col2 : 'white',
    });

    const body = document.body;
    
    if (col2 === 'red') {
        body.style.background = "linear-gradient(95deg, #972c2c, black)";
    } else if (col1 === 'white') {
        body.style.background = "rgb(250, 249, 246)";
    } else {
        body.style.background = col1;
    }

    ["snackbar", "snackbar2", "added", "removed"].forEach(val => {
        setColors($(val), col1, col2);
    });

    $$("p").forEach(paragraph => {
        paragraph.style.color = col2Black ? col2 : 'white';
    });

    $$("input").forEach(input => {
        setColors(input, col1White ? 'lightgray' : col1, col2);        
    });

    $$("label").forEach(label => {
        label.style.color = col2Black ? col2 : 'white';
    });

    $$("textarea").forEach((area, index) => {
        resetOpacity(area);

        //the duplicate textarea is actually first element selected
        if ((index % 2 === 0 && index > 2) || index === 1 || index === 3) {
            setColors(area, col1, col2);
        } else {
            setColors(area, '#ccffcc', 'black');
        }
    });

    $$(".newButtonCont").forEach(btn => {
        resetOpacity(btn);
    });

    const btn = $('newButtonCont2');

    resetOpacity(btn);
};

const createForm = () => {    
    copyCSV('added');

    let insidecount = state.count;

    //Creation of div inside of main div "magic"
    const containerDiv = document.createElement("div");

    containerDiv.style.animation = 'fadeIn 1.5s';

    containerDiv.classList.add("node" + state.count);

    //Main project container
    const magic = document.getElementById("magic");

    magic.append(containerDiv);

    //Creation of close button element
    const deleteForm = document.createElement("img");

    deleteForm.src = 'images/close.png';
    deleteForm.classList.add("deleteButton");

    Object.assign(deleteForm.style, {
        width: '22px',
        marginLeft: '50%',
        cursor: 'pointer',
        marginBottom :'10px',
        background: 'white',
        borderRadius: '16px',
    });

    deleteForm.onmouseover = () => {deleteForm.classList.add('hovered')};

    deleteForm.onmouseout = () => {deleteForm.classList.remove('hovered')};

    deleteForm.addEventListener('click', () => {
        containerDiv.remove();

        const index = state.textBox.indexOf(`box${insidecount}`);
        //Removes orderbox in same place as text box to ensure local storage functions properly
        state.textBox.splice(index, 1);
        
        state.orderBox.splice(index, 1);

        copyCSV('removed');
    })

    containerDiv.append(deleteForm);

    //Creation of info div
    const infoDiv = document.createElement("div");

    infoDiv.classList.add("info");

    containerDiv.append(infoDiv);

    //Creation of label element
    const label = document.createElement("label");

    label.htmlFor = "order" + state.count;

    infoDiv.append(label);

    const node = document.createTextNode("Order# ");
    //Creation of bold element
    const boldElement = document.createElement("b");

    label.style.color = colors.orderText ? colors.orderText : 'white';

    boldElement.append(node);

    label.append(boldElement);

    //Creation of input element
    const inputElement = document.createElement("input");

    Object.assign(inputElement, {
        type: 'text',
        name: 'order' + state.count,
        id: 'order' + state.count,
        placeholder: 'SQ1234',
    });

    state.orderBox.push(inputElement.id);
    
    infoDiv.append(inputElement);

    setColors(inputElement, colors.inputBg, state.vegeta ? 'white' : colors.inputText);
   
    const topButtonContainer = document.createElement("div");

    topButtonContainer.classList.add('newButtonCont');

    if (state.vegeta) {
        setMouseOpacity(topButtonContainer, '1', '0.7');
    }

    Object.assign(topButtonContainer.style, {
        display: "flex",
        background: "white",
        width: "296px",
        justifyContent: "space-between",
        borderRadius: "16px",
        ...(state.vegeta ? {opacity: '0.7'} : {}),
    });

    //Clear Img
    const clearButton = document.createElement("img");
    
    clearButton.src = 'images/clear.png';

    clearButton.classList.add('textButton');

    topButtonContainer.append(clearButton);
    
    //Edit Image
    const editButton = document.createElement("img");

    editButton.addEventListener('click', () => {
        if (inputElement.value) window.open(links['edit'] + inputElement.value, '_blank');        
    });

    editButton.src = 'images/edit.png';

    editButton.classList.add('textButton');

    topButtonContainer.append(editButton);
    
    //Checkout Image
    const checkoutButton = document.createElement("img");

    checkoutButton.addEventListener('click', () => {
        if (inputElement.value) window.open(links['checkout'] + inputElement.value, '_blank');        
    });

    checkoutButton.src = 'images/checkout.png';

    checkoutButton.classList.add('textButton');

    topButtonContainer.append(checkoutButton);

    //Copy CSV Img
    const copyButton = document.createElement("img");

    copyButton.addEventListener('click', () => {
        textArea2.select();

        textArea2.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(textArea2.value);

        const snack = document.getElementById("snackbar");

        snack.className = "show";

        setTimeout(() => {
            snack.className = snack.className.replace("show", "");
        }, 3000);
    });

    copyButton.src = 'images/copy.png';

    copyButton.classList.add('textButton');

    topButtonContainer.append(copyButton);
    
    const mdmButton = document.createElement("img");

    mdmButton.addEventListener('click', () => {
        if (inputElement.value) window.open(links['mdm'] + inputElement.value, '_blank');        
    });

    mdmButton.src = 'images/mdm.png';

    mdmButton.classList.add('textButton');

    topButtonContainer.append(mdmButton);

    infoDiv.append(topButtonContainer);

    //Text areas start here
    const textAreaDiv = document.createElement("div");

    textAreaDiv.style.display = "flex";

    const textArea1 = document.createElement("textarea");

    Object.assign(textArea1, {
        id: `box${state.count}`,
        cols: "20",
        rows: "30",
        placeholder: "Enter (or paste) your column of data here",
    });    

    state.textBox.push(textArea1.id);

    Object.assign(textArea1.style, {
        width: "160px",
        fontSize: "20px",
        backgroundColor: colors.boxBg ?? "black",
        color: state.vegeta ? "white" : colors.boxText ?? "red",
    });

    if (state.vegeta) {
        textArea1.style.opacity = 0.5;

        setMouseOpacity(textArea1, '1', '0.5');
    }   
    
    textAreaDiv.append(textArea1);

    const textArea2 = document.createElement("textarea");

    Object.assign(textArea2, {
        id: `boxx${state.count}`,
        cols: "20",
        rows: "30",
        placeholder: "Your comma separated list of data will appear here",
    });

    Object.assign(textArea2.style, {
        width: "300px",
        fontSize: "20px",
        backgroundColor:  state.vegeta ? "black" : "#ccffcc",
        ...(state.vegeta ? {color: 'white'} : {}),        
    });

    if (state.vegeta) {
        Object.assign(textArea2.style, {
            color: 'white',
            opacity: 0.5,
        });

        setMouseOpacity(textArea2, '1', '0.5');
    }

    textAreaDiv.append(textArea2);

    containerDiv.append(textAreaDiv);

    //End of text area/creation of line div
    const lineDiv = document.createElement("div");

    lineDiv.id = "line";

    Object.assign(lineDiv.style, {
        display: "flex",
        fontSize :"20px",
        color: colors.lineText ?? "white",
    });
    
    //Creation of p element inside line div
    const pElement = document.createElement("p");

    const pNode = document.createTextNode("Line Count: ");

    pElement.append(pNode);

    lineDiv.append(pElement);

    const pCountElement = document.createElement("p") ;

    pCountElement.id = "count" + (state.count + 1);

    lineDiv.append(pCountElement);

    containerDiv.append(lineDiv);
    // const value = document.getElementById("count4")
    const updateValue = (e) => {
        const textArea1Content = e.target.value.toString().replace(/(?!\s+$)\s+/g, ",");
        
        textArea2.value = textArea1Content;
        
        pCountElement.innerHTML = textArea2.value.split(',').length;
    };

    textArea1.addEventListener("input", updateValue); 

    clearButton.addEventListener('click', () => {
        eraseText(textArea1, textArea2, inputElement);

        pCountElement.innerHTML = "";
    });

    state.count++;               
};

window.addEventListener("beforeunload", () => {    
    const arr = [];
    
    for (let i = 0; i < state.textBox.length; i++) {
        if (!["boxxx", "boxxxx"].includes(state.textBox[i])) {
            const textbox = document.getElementById(state.textBox[i]);

            const order = document.getElementById(state.orderBox[i]);
            
            arr.push({data: textbox.value, orderNum: order.value});
        }        
    }    

    localStorage.setItem("items", JSON.stringify(arr));        
        
    return '';
});

const renderThemes = () => {
    const container = document.querySelector(".dropdown-content");

    container.innerHTML = "";

    themes.forEach((theme) => {
        const btn = document.createElement("button");

        Object.assign(btn, {
            className: "theme",
            id: theme.id,
            textContent: theme.label,            
        });

        btn.onclick = () => {
            if (theme.action) {
                theme.action();
            } else {
                DBZ(theme);
            }

            //$("dropdown").classList.remove("open");
        };

        container.appendChild(btn);
    });
};

const renderLeaves = () => {
    const baseLeaves = ["redleaf.png", "orangeleaf.png", "yellowleaf.png", "greenleaf.png"];

    const leaves = [...baseLeaves, ...baseLeaves];

    document.getElementById("leaves").innerHTML = leaves.map(img => `<img src="images/${img}">`).join("");
};

const renderRavensLogos = () => {
    const baseLogos = ["ravens.jpg", "ravens2.png"];

    const logos = Array(4).fill(baseLogos).flat();

    document.getElementById("ravens").innerHTML = logos.map(img => `<img style="width: 40px;" src="images/${img}">`).join("");
};

const renderChristmasicons = () => {
    const baseIcons = ["candy-canes.png", "gift-box.png"];

    const icons = Array(4).fill(baseIcons).flat();

    document.getElementById("christmas").innerHTML = icons.map(img => `<img style="width: 40px;" src="images/${img}">`).join("");
};