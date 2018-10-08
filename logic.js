
let row1 = [1,2,3,4,5,6,7,8,9];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];
let row9 = [];





const checkIsNine = (arrayToSearch) => {
    const comparedArray = [9,8,7,6,5,4,3,2,1];

    for(var i = 0; i < arrayToSearch.length; i++) {
        if(comparedArray.indexOf(arrayToSearch[i]) !== -1) {
            console.log('all good');
        }
        else {
            console.log('this is wrong');
        }
    }
}