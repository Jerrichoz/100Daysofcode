function isAllUpper(text: string): boolean {
    // my code here
    var lowerCases = /[a-z]/g;
    var result = text.match(lowerCases);
    if(result === null)
    {
        return true;
    }
    return false;
}

// In a given array the first element should become the last one. 
// An empty array or array with only one element should stay the same.
function replaceFirst(values: number[]): number[] {
    // my code here
    if(values.length < 2)
    {    
        return values;
    }
    let switchedNumber: number = values[0];
    values.shift();
    values.push(switchedNumber);
    return values;
}

// You have a number and you need to determine which digit in this number is the biggest.
function maxDigit(value: number): number {
    // my code here
    let notFound = true;
    var biggestNumber: number = 9;
    var stringValue: string = value.toString();
    while(notFound)
    {
        if(stringValue.indexOf(biggestNumber.toString()) != -1)
        {
            console.log("success!!");
            notFound = false;
            return biggestNumber;
        }
        biggestNumber--;

    }
}
