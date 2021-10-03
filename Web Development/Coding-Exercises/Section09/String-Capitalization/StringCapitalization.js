var name  = 'dAvId';

function capitalize(stringToFix){
    stringLenth = stringToFix.length;
    var tempFirstLetter = stringToFix.slice(0,1);
    var tempRestOfName = stringToFix.slice(1,stringLenth);
    restOfName = tempRestOfName.toLowerCase();
    firstLetter = tempFirstLetter.toUpperCase();

    fixedName = firstLetter + restOfName
    return fixedName;
}

console.log(capitalize(name))