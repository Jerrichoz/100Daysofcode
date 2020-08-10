function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // my code here
    var sortedObject: Stock[];
    console.log("data 0");
    console.log(data[0].price);
    data.sort((a,b) => b.price - a.price);
    data.splice(limit);

    console.log("data sorted");
    console.log(data)
    // console.log(data[0].price);
    return data;
}