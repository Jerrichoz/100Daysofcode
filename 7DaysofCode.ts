// In a given string you should reverse every word, but the words should stay in their places.

function backwardStringByWord(text: string): string {
    // my code here
    var arrayString: string[];
    var backwardArray: string[];
    var returnString: string = "";
    const regex = /\s+/gm;

    arrayString = text.split(regex);
    if(text === "")
    {
        return "";
    }
    arrayString.forEach(element => {
        console.log("element " + element);
        if(element === "")
        {
            returnString = returnString.concat(" ")
        }
        else
        {
            returnString = returnString.concat(backwardString(element));
            console.log("returnString " + returnString);
        }
    });

    return returnString;
}

function backwardString(text: string): string 
{
    var result: string = "";
    var counter: number = 0;

    for (let index = text.length-1; index > -1; index--) {
        result = result.concat(text[index]);
    }
    return result;
}

// Your mission here is to find the TOP most expensive goods. 

interface Stock {
    name: string,
    price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // my code here
    var sortedObject: Stock[];
    sortedObject = 
    // var sortedObject: Stock[];
    // //sortedObject = sortObject(data);
    // sortedObject = Object.values(data);
    // sortedObject.forEach(element => {
    //     console.log(element);
    //     console.log("Price " + element.price);
    // });

    return [];
}

function sortObject(objectToSort: object):object
{
    var sortedObject: Stock[];

    objectToSort = Object.values(objectToSort);
    sortedObject.forEach(element => {
        console.log(element);
        console.log("Price " + element.price);
    });
    
    return Object.entries(object).sort((a,b) => b[1]-a[1]).map(el=>el[0]);
    //https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c
}