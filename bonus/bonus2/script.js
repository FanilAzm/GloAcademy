let year1 = +prompt('Введите год'),
    year2 = +prompt('Введите год');

let outputYear = function(year1, year2){
    for(year1; year1 < year2; year1++){
        if((year1 % 4 == 0) && (year1 % 100 !== 0) || (year1 % 400 == 0)){
            console.log(year1);
        } 
    }
};

if(year1 > year2){
    outputYear(year2, year1);
} else {
    outputYear(year1, year2);
}
