// Split the string into pairs of two characters. 
// If the string contains an odd number of characters, 
// then the missing second character of the final pair should be replaced with an underscore ('_').
function splitPairs(text: string): string[] {
    // my code here
    var resultArray: string[] = [""];
    var index: number;
    if(isOdd(text.length))
    {
        resultArray.unshift(text[text.length-1]+"_");
        index = text.length-3;
    }
    else
    {
        index = text.length-2;
    }

   for (index; index > -1; index=index-2) {
        console.log("index " + index);
        const element = text[index];
        const secondElement = text[index+1];
        console.log("element1 " + element + "  " + "element2 " + secondElement);
        resultArray.unshift(element + secondElement);
   } 
    resultArray.pop();
    return resultArray;
}
function isOdd(value: number): boolean{
    if(value % 2 != 0){
        console.log("is odd!")
        return true;
    }
    console.log("is even!")
    return false;

}

// You have a string that consist only of digits. 
// You need to find how many zero digits ("0") are at the beginning of the given string.
function beginningZeros(text: string): number {
    // my code here
    var zeroCounter = 0;
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if(element === "0")
        {
            zeroCounter++;
        }
        else
        {
            return zeroCounter;
        }
        
    }
    return zeroCounter;
}

// Find the nearest value to the given one.
// You are given a list of values as Array form and a value for which you need to find the nearest one.
// For example, we have the following set of numbers: 4, 7, 10, 11, 12, 17, 
// and we need to find the nearest value to the number 9. If we sort this set in the ascending order, 
// then to the left of number 9 will be number 7 and to the right - will be number 10. But 10 is closer than 7, 
// which means that the correct answer is 10.

function nearestValue(values: number[], search: number): number {
    // my code here
    sortArrayInt(values);
    var lowestNumber: number = values[0];
    values.forEach(element => {
        if(Math.abs(element-search) < Math.abs(lowestNumber-search))
        {
            lowestNumber = element;

        }
    });
    return lowestNumber;
}

function sortArrayInt(values: number[]): number[]
{
    return values.sort(function(a, b){
        return a - b;
    });
}