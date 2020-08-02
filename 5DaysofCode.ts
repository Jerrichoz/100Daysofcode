// You are given a string and two markers (the initial one and final). 
// You have to find a substring enclosed between these two markers. But there are a few important conditions.

function betweenMarkers(line: string, left: string, right: string): string {
    // my code here

    var markerLeft: number;
    var markerRight: number;
    var result: string = "";

    markerLeft = line.indexOf(left);
    markerRight = line.indexOf(right);
    console.log("mleft " + markerLeft + " mRight " + markerRight);
   
    for (let index = markerLeft+1; index < markerRight; index++) {
        result = result.concat(line[index]);
    }
    console.log("Result " + result);
    return result;
}

// For the input of your function, you will be given one sentence. 
// You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

function correctSentence(text: string): string {
    // my code here

    text = capitalizeFirstLetter(text);
    console.log("text " + text);
    if(text[text.length-1] != ".")
    {
        text = text.concat(".");
    }
    return text;
}

function capitalizeFirstLetter(toCap: string): string {
    var stringTest: string = toCap.charAt(0).toUpperCase();
    toCap = toCap.slice(1);
    toCap = stringTest.concat(toCap);
    console.log("stest " + stringTest + "string " + toCap);
    return toCap;
}
  
function isEven(num: number): boolean {
    // your code here
    if(isOdd(num))
    {
        return false;
    }
    return true;
}

function isOdd(value: number): boolean{
    if(value % 2 != 0){
        console.log("is odd!")
        return true;
    }
    console.log("is even!")
    return false;
}
