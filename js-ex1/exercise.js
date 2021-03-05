arr (["banana", "apple", 5, 6, 7 , "orange" , 9, 8]);
arr (["banana", "apple", 5, 6, 7 , "orange", 5, "kiwi"]);
function arr(array) {
    var countNumbers = 0
    var countLetters= 0
    array.forEach( function(item) {
        if (typeof item === "number"){
        countNumbers = countNumbers +1 ;
        } else {
            countLetters = countLetters + 1;
        }
        });  
console.log(`${array.length} elements in your array.`);
console.log(`${countNumbers}  numbers`);
console.log(`${countLetters} letters`);
};

