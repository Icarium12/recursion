function fibs(n) {
    const arr = [];
    let t1 = 0;
    let t2 = 1;
    let nextTerm;

    for (let i = 0; i < n; i++) {
        arr[i] = t1;
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    return arr;
}

// const test = fibs(10);
// console.log(test);

function fibsRec(n, t1 = 0, t2 = 1, nextTerm, arr = []) {
    if (arr.length >= n) {
        return arr;
    }
    else {
        arr.push(t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
        return fibsRec(n, t1, t2, nextTerm, arr);
    }
}

// const test2 = fibsRec(10);
// console.log(test2);


function mergeSort(arr, newArr = []) {
    if (arr.length === 0 || arr.length === 1) {
        return newArr;
    }

    const midpoint = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, midpoint);
    console.log(leftHalf);
    

    const rightHalf = arr.slice(midpoint);
    console.log(rightHalf);

    if (leftHalf.length === 1 && rightHalf.length === 1) {
        const newSort = [];
        const tempArr = [];
        if (leftHalf[0] > rightHalf[0]) {
            tempArr[0] = rightHalf[0];
            tempArr[1] = leftHalf[0]
        }
        else {
            tempArr[0] = leftHalf[0];
            tempArr[1] = rightHalf[0];           
        }
        newSort.push(...tempArr);
        console.log(newSort);
        newArr.push(...tempArr);
    }

    return mergeSort(leftHalf, rightHalf);
    
}

const mergeTest = mergeSort([1, 4, 7, 3, 5, 2, 6, 8]);
console.log(mergeTest);

const twoArray = [2, 1, 3, 5, 4];


function mergeSort(
    arr,
    lsplits = [],
    rsplits = [],
    midpoint = Math.ceil(arr.length / 2),
    leftHalf = arr.slice(0, midpoint),
    rightHalf = arr.slice(midpoint)
) {
    if (arr.length === 0 || arr.length === 1) {
        let sorted;
        rsplits.forEach(split => {
            if (split.length > 1) {
                split = mergeSort(split);
            }
            sorted = mergeSplit(leftHalf, split);
            leftHalf = sorted;
        });

        return leftHalf;
    }

    lsplits.unshift(leftHalf);
    rsplits.unshift(rightHalf);

    return mergeSort(leftHalf, lsplits, rsplits);

}

function mergeSplit(lsplit, rsplit, sortedArr = []) {
    const lowestLeft = Math.min(...lsplit);
    const lowestRight = Math.min(...rsplit);

    if (lowestLeft < lowestRight) {
        sortedArr.push(lowestLeft);
        const index = lsplit.indexOf(lowestLeft);
        if (index > -1) {
            lsplit.splice(index, 1);
        }
        if (lsplit.length === 0) {
            sortedArr.push(...rsplit);
            return sortedArr
        }
        else {
            return mergeSplit(lsplit, rsplit, sortedArr);
        }
    }
    else {
        sortedArr.push(lowestRight);
        const index = rsplit.indexOf(lowestRight);
        if (index > -1) {
            rsplit.splice(index, 1);
        }
        if (rsplit.length === 0) {
            sortedArr.push(...lsplit);
            return sortedArr;
        }
        else {
            return mergeSplit(lsplit, rsplit, sortedArr);
        }
    }
}



console.log("*********************");
console.log(mergeSort([105, 79, 100, 110]));
console.log("*********************");



