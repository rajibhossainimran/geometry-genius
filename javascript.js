console.log('js file is connected')



function getInputFieldValue(id){
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value ;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}

function getElementValue(id){
    const inputField = document.getElementById(id);
    const inputValueString = inputField.innerText;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function TriangleRhombusPentagon(value1,value2){
    const base = value1;
    const height =value2;
    const area = 0.5 *base*height;
    return area;
    
}

function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('container-field');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. <span id="getValue">${areaType}</span> ${area} cm<sup>2</sup> <button id="convertMeter" class="bg-sky-600 text-white font-bold py-1 px-2 rounded">Convert to m<sup>2</sup></button>`;

    calculationEntry.appendChild(p);
}

// Triangle area part start 
document.getElementById('btn-triangle').addEventListener('click',function(){
    const base =getInputFieldValue('triangle-base');
    const height =getInputFieldValue('triangle-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const triangleArea = TriangleRhombusPentagon(base,height);
    addToCalculationEntry('Triangle',triangleArea);

    
})

// Rhombus area part start 
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const width = getInputFieldValue('rhombus-d1');
    const height = getInputFieldValue('rhombus-d2');
    if(isNaN(width) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const rectangleArea = TriangleRhombusPentagon(width,height);
    addToCalculationEntry('Rhombus',rectangleArea);
})

// Pentagon area part start 
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const width = getInputFieldValue('pentagon-field-1');
    const height = getInputFieldValue('pentagon-field-2');
    if(isNaN(width) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const rectangleArea = TriangleRhombusPentagon(width,height);
    addToCalculationEntry('Pentagon',rectangleArea);
})

// Rectangle area part start 
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const width = getInputFieldValue('rectangle-width');
    const height = getInputFieldValue('rectangle-height');
    if(isNaN(width) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const rectangleArea = width*height;
    addToCalculationEntry('Rectangle',rectangleArea);
})

// Parallelogram area part start 
document.getElementById('Parallelogram-btn').addEventListener('click',function(){
    const base = getInputFieldValue('Parallelogram-base');
    const height = getInputFieldValue('Parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please input a number');
        return;
    }
    const parallelogramArea = base * height;
    addToCalculationEntry('Parallelogram',parallelogramArea);
})

// Ellipse area part start 
document.getElementById('Ellipse-btn').addEventListener('click',function(){
    const oneArea = getInputFieldValue('Ellipse-1');
    const twoArea = getInputFieldValue('Ellipse-2');
    const EllipseArea = 3.1416 * oneArea *twoArea;
    addToCalculationEntry('Ellipse',EllipseArea);
})



