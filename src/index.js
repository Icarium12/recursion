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
    const sortedArr = []
    if (arr.length === 0 || arr.length === 1) {
        return newArr.push(...sortedArr);
    }

    const midpoint = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, midpoint);
    console.log(leftHalf);

    const rightHalf = arr.slice(midpoint);
    console.log(rightHalf);

    if (leftHalf[0] > rightHalf[0]) {
        sortedArr[0] = rightHalf[0];
    }

    else {
        sortedArr[0] = leftHalf[0];
    }

    return mergeSort(leftHalf, sortedArr);
    
}

const mergeTest = mergeSort([1, 4, 7, 3, 5, 2, 6, 8]);
console.log(mergeTest);
