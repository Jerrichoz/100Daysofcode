function multTwo(a: number, b: number): number {
    // my code here
    let result: number;
    return result = a * b;
 
}

function easyUnpack(values: any[]): any[] {
    // my code here
    let resultArray: number[];
    resultArray = [0,0,0];
    let vlength = values.length;
    console.log(values);
    resultArray[0] = values[0];
    resultArray[1] = values[2];
    resultArray[2] = values[vlength-2];


    return resultArray;
}

function firstWord(text: string): string {
    // my code here
    let result: string;
    console.log(text.indexOf(' '));
    if(text.indexOf(' ') === -1)
        {
            return text;
        }
    result = text.substr(0,text.indexOf(' '));
    return result;
}

function isAcceptablePassword(password: string): boolean {
    // my code here
    let length: number;
    length = password.length;
    if(length > 6){
        return true;
    }
    return false;
}