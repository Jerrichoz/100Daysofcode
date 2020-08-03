// Let's teach the Robots to distinguish words and numbers.
// You are given a string with words and numbers separated by whitespaces (one space)

function threeWords(text: string): boolean {

    var stringArray: string[];
    var countStrings: number = 0;
    var isSuccess: boolean = false;

    stringArray = text.split(" ");
    console.log("splitArr " + stringArray);
    stringArray.forEach(element => {
        if(isString(element))
        {
            countStrings++;
            console.log("countStrings " + countStrings);
            if(countStrings>=3)
            {
                isSuccess = true;
            }
        }
        else
        {
            countStrings = 0;
        }
    });

    console.log("countStringsEnd " + countStrings);
    return isSuccess;
}

function isString(text: string): boolean{
    const regex = /[a-zA-Z]+/g;
    if(text[0] && text[0].match(regex) )
    {
        console.log("regex " + text[0].match(regex));
        return true;
    }
    return false;
}

// You are given a string where you have to find its first word.

function firstWord(text: string): string {
    // my code here
    var stringArray: string[];
    stringArray = text.split(/[^\w']+/);
    var returnString: string = "";

    console.log("splitArr " + stringArray);
    stringArray.forEach(element => {
        if(isString(element) && element !== "")
        {
            returnString = element;
        }
    });

    console.log("countStringsEnd " + returnString);
    return returnString;
}

// You need to count the number of digits in a given string.

function countDigits(text: string): number {
    // your code here
    var stringArray: string[];
    stringArray = text.split("");
    var counter: number = 0;

    console.log("splitArr " + stringArray);
    stringArray.forEach(element => {
        if(isNumber(element))
        {
            console.log("counter " + counter);
            counter++;
        }
    });

    console.log("countStringsEnd " + counter);

    return counter;
}

function isNumber(text: string): boolean{
    const regex = /\d/gm;
    if(text[0] && text[0].match(regex) )
    {
        console.log("regex " + text[0].match(regex));
        return true;
    }
    return false;
}