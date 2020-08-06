function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // my code here
    var sortedObject: Stock[];
    sortedObject = Object.entries(data).sort((a,b) => b[3]-a[3]).map(el=>el[0]);
    console.log(sortedObject)
    return [];
}

function sortObject(objectToSort: Stock[]):Stock[]
{
    var sortedObject: Stock[];

    // objectToSort = Object.values(objectToSort);
    // sortedObject.forEach(element => {
    //     console.log(element);
    //     console.log("Price " + element.price);
    // });
    
    return Object.values(objectToSort).sort((a,b) => b[1]-a[1]).map(el=>el[0]);
    //https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c
}


interface Stock {
    name: string,
    price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // my code here
    var sortedObject: string[];
    sortedObject = Object.entries(data).sort((a,b) => b[1]-a[1]).map(el=>el[0]);
    console.log(sortedObject)
    return [];
}

console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))