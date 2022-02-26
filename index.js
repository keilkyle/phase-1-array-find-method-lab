// code your solution here
function isWin(element) {
    return (element.result === "W");
}

function superbowlWin(array) {    
    if (array.find(isWin) !== undefined) {
        return array.find(isWin).year
    } else {return undefined}
}