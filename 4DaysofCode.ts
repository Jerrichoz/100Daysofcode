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