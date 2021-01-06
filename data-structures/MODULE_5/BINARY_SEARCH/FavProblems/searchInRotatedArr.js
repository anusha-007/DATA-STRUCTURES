function runProgram(input) {
    input = input.trim().split("\n");
    let [arrLen, key] = input.shift().split(" ").map(Number);

    let rotatedArr = input.shift().trim().split(" ").map(Number);

    function rotatedArrSearch(arr) {
        let low = 0;
        let high = arr.length - 1;

        
        let ans = -1;
        while (low <= high) {
            // console.log(low, high, "low", "high")
            let mid = low + Math.floor((high - low) / 2);
            if (arr[mid] <= arr[high]) {
                
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    function binarySearch(arr, low, high, key) {

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (arr[mid] == key) {
                return mid;
            } else if (arr[mid] > key) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }

    let pivotEle = rotatedArrSearch(rotatedArr);
    console.log(pivotEle, rotatedArr[pivotEle], "pivot")

    if( rotatedArr[pivotEle] == key ){
        console.log(pivotEle)
    }
    else if ( key > rotatedArr[arrLen - 1] ) {
        var ans = binarySearch( rotatedArr, 0, pivotEle - 1, key )
        console.log(ans)
    }

    else{
        var ans = binarySearch( rotatedArr, pivotEle, arrLen - 1, key)
        console.log( ans )



    }

    // console.log(ans);
}

if (process.env.USERNAME === "user") {
    runProgram(`20 -9
    18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}


// 20 12
// 18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12




// 30 -9
//     3 6 7 8 9 10 11 13 14 15 16 17 20 22 23 24 25 26 27 28 -9 -8 -7 -6 -5 -4 -3 -1 1 2
    //    0 1 2 3 4  5 6   7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29

    //    low = 15 high = 29
    //    m = 22
    //    m[22] = -7

    //    high = 21
    //    m[21] = -8
    //    36/2 = 18

    //    high = 17