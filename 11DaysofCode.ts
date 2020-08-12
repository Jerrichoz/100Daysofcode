function betweenMarkers(text: string, begin: string, end: string): string {
    // my code here
    var beginSubStringMarker: number;
    var endSubStringMarker: number;
    var resultString: string;


    beginSubStringMarker = text.indexOf(begin) ;
    endSubStringMarker = text.indexOf(end);
    if(beginSubStringMarker === -1)
    {
        beginSubStringMarker = 0
    }
    else
    {
        beginSubStringMarker =+ begin.length;
    }
    if(endSubStringMarker === -1){endSubStringMarker = text.length -1}
    console.log("Vorendtext " + text);
    console.log("beginSubStringMarker " + beginSubStringMarker );
    console.log("endSubStringMarker " + endSubStringMarker );
    resultString = text.slice(beginSubStringMarker, endSubStringMarker);
    console.log("Endtext " + resultString);

    return resultString;
}

function nonUniqueElements(data: number[]): number[] {
    // my code here
    var forArray: number[];
    var resultArray: number[] = [];

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let indexOf: number;
        let whileCounter: number;
        whileCounter = index;

        while(data.indexOf(element, whileCounter) !== -1)
        {
            console.log("in while, element " + element);
            indexOf = data.indexOf(element, whileCounter);
            resultArray.push(data[indexOf]);
            console.log("resultArray " + resultArray);
            whileCounter = indexOf;
        }
        console.log("new array " + data);
        console.log("resultArray " + resultArray);
        
    }
    return resultArray;
}