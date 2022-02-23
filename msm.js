let sap = 0;
let bucketOSap = 0;
let syrup = 0;
let workers = 0;
let workersProd = workers * 0.1;
let cash = 0;
let clickPower = 1;

//Button Control
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        btnClicked(button.id);
    });
});

function btnClicked(idClicked){
    switch (idClicked) {
        
        case 'sapBtn':
            sap += clickPower;
            console.log("gained 1 sap");
            break;
        case 'sellBtn':
            cash += syrup;
            syrup = 0;
            break;
        case 'betterToolsBtn':
            cash -= 10;
            clickPower += 1;
            console.log("Bought better tools")
            break;
        case 'hireWorkersBtn':
            workers += 1;
            workersProd = workers * 0.1;
            cash -= 10;
            console.log("Hired a worker");
            break;
    }
}

function conversion() {
    if (sap >= 2) {
        bucketOSap += 1;
        sap -= 2;
    }
    if (bucketOSap >= 2) {
        syrup += 1;
        bucketOSap -= 2;
    }
}

function autoProduction() {
    sap += workersProd;
}

function updateButtons() {
    syrup <= 0 ? document.getElementById('sellBtn').disabled = true 
            : document.getElementById('sellBtn').disabled = false;
    
    cash < 10 ? document.getElementById('hireWorkersBtn').disabled = true 
            : document.getElementById('hireWorkersBtn').disabled = false;
    
    cash < 10 ? document.getElementById('betterToolsBtn').disabled = true 
            : document.getElementById('betterToolsBtn').disabled = false;
}

//Displays
const outputs = {};
document.querySelectorAll(".output").forEach(el => outputs[el.id] = el);


function updateDisplays() {
    outputs["sapOutput"].textContent = `${Math.round(sap * 100) / 100}`;
    outputs["bucketsOutput"].textContent = `${bucketOSap}`;
    outputs["syrupOutput"].textContent = `${syrup}`;
    outputs["workersOutput"].textContent = `${workers}`;
    outputs["workersProdOutput"].textContent = `(+${workersProd}/s)`;
    outputs["cashOutput"].textContent = `${cash}`;
    outputs["clickPowerOutput"].textContent = `${clickPower}`;
}

setInterval(updateDisplays, .1);
setInterval(conversion, .1);
setInterval(updateButtons, .1);
setInterval(autoProduction, 1000);