console.log('js file is connected')



function getInputFieldValue(id){
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value ;
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
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="bg-sky-600 text-white font-bold py-1 px-2 rounded">Convert to m<sup>2</sup></button>`;

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

