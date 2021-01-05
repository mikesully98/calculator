
let valueA = 0;
let valueB = 0;
let change = false;
let operator;
let finalResults;

let display = document.querySelector('#screen');
let node = document.createElement('p');

function clearScreen() {
    valueA = '';
    valueB = '';
    node.textContent = '';
    finalResults = 0;
    display.removeChild(results);
}

function addOperator(op) {
    addToDisplay(op);
    change = true;
    operator = op;
}

function addToDisplay(num) {
    
    node.textContent += num;
    
    if(change == false && (num != 'x') && (num!='-') && (num!='+') && (num!='/') && (num!='.')&&(num!='()')) {
        if(valueA == 0) {
            valueA += num;
        } else {
            valueA = valueA.toString() + num.toString();;
            
        }
        console.log(valueA);
        
        
    } else if(change){
        if(valueB == 0) {
            valueB += num;
        } else {
            valueB = valueB.toString() + num.toString()
        }
        
        console.log(valueB);
    }

    display.appendChild(node);
}

function operate() {
    
    

    let results = document.createElement('p');
    
    if(operator == '+') {
        finalResults = add(Number(valueA),Number(valueB));
        
    }
    else if(operator == '-') {
        finalResults = subtract(Number(valueA),Number(valueB));
    }
    else if(operator == '/') {
        finalResults = divide(Number(valueA),Number(valueB));
    }
    else if(operator == 'x') {
        finalResults = multiply(Number(valueA),Number(valueB));
    }

    results.textContent = finalResults;
    display.removeChild(node);
    display.appendChild(results);

    console.log(finalResults)

}

function add(numA,numB) {
    return numA + numB;
}

function subtract(numA,numB) {
    return numA - numB;
}
function divide(numA,numB) {
    if(numB == 0) {
        node.textContent = 'Well that wont work!';
    } else
    {return numA / numB};
}
function multiply(numA,numB) {
    return numA * numB;
}
