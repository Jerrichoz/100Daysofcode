function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // my code here
    var sortedObject: Stock[];
    console.log(data[0].price);
    sortedObject = Object.entries(data).sort((a,b) => b[3]-a[3]).map(el=>el[0]);
    console.log(sortedObject)
    return [];
}

function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // my code here
    var sortedObject: Stock[];
    console.log("data 0");
    console.log(data[0].price);
    data.sort((a,b) => b.price - a.price);
    data.filter(element => element[limit]);

    console.log("data sorted");
    console.log(data)
    // console.log(data[0].price);
    return [];
}


console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))


[ { name: 'wine', price: 138 }, { name: 'bread', price: 100 } ]

[ { name: 'wine', price: 138 }, { name: 'bread', price: 100 } ]