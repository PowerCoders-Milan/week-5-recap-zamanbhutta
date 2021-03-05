var Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
var Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]

    var score = {};
    var number = 0;
    Array1.forEach( function(item) {
        if (typeof item === "number") {
            score[Array2[number]] = Array1[number]; 
            number = number +1; 
        } else {
            score[Array1[number]] = Array2[number];
            number = number +1; 
        }
    });
    
console.log(score);