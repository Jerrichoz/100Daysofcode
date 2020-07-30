function numberLength(value: number): number {
    // my code here     
    return value.toString().length;
}

function endZeros(value: number): number {
    // my code here  
    let counter: number = 0;
    let stringValue: String;
    
    stringValue = value.toString();
    
    for (let index = stringValue.length - 1; index > -1; index--) {
        console.log("Index " + index);
        if(stringValue[index] === "0")
        {
            counter++;
        }
        else
        {
            return counter;
        }
    }
    return counter;
}

function backwardString(value: string): string {
    // my code here
    let reversedString: string = '';

    for (let index = value.length - 1; index > -1; index--) 
    {
        reversedString += value[index];
        console.log("Reversed String " + reversedString);
    }

    return reversedString;
}

function removeAllBefore(values: number[], b: number){
    // my code here
    var resultArray: number[] = [];
    var arrayCounter: number = 0;

    for (let index = values.indexOf(b); index < values.length; index++) {
        if(index === -1)
        {
            return values;
        }
        console.log("Index " + index);
        console.log("Values " + values[index] );      
        resultArray[arrayCounter] = values[index];
        arrayCounter++;
        
    }
    console.log(resultArray);
    return resultArray;
}
