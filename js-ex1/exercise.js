arr (["banana", "apple", 5, 6, 7 , "orange" , 9, 8]);
arr (["banana", "apple", 5, 6, 7 , "orange", 5, "kiwi"]);
function arr(array) {
    var countNumbers = 0;
    var countWords= 0;
    array.forEach( function(item) {
        if (typeof item === "number"){
        countNumbers = countNumbers +1;
        } else {
            countWords = countWords + 1;
        }
        });  
console.log(`${array.length} elements in your array.`);
console.log(`${countNumbers}  numbers`);
console.log(`${countWords} words`);
};

