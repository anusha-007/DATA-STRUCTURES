function runProgram(input) {
    // console.log(input,"inp")
    // const [testCases, arr] = input.trim().split("\n");
    input = input.trim().split("\n");
    const testCases = Number(input[0]);

    let pos = 1;
    for (let i = 0; i < testCases; i++) {
        const arr = input[pos++].trim().split(" ").map(Number);
        //console.log(arr)
        let ans = optimiseCurve(arr);
       console.log(ans)
    }
}

function optimiseCurve(arr) {
    let k = arr[arr.length - 1];
    let low = 0;
    let c = arr[2];
    let high = k - c;
    const A = arr[0];
    const B = arr[1];
    const C = arr[2];

    let ans = -1;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        //  let calculated_eq_ans = find_eqn_ans(arr,mid)

        if ( (A * mid ** 2 + B * mid + (C - k)) > 0) {
            ans = mid;

            high = mid - 1;
        } else if( (A * mid ** 2 + B * mid + (C - k)) < 0 ) {
            low = mid + 1;
        }
        else{
            return mid
        }
    }
    return ans;
}

function find_eqn_ans(arr, mid) {
    let k = arr[arr.length - 1];
    let ans = 0;
    const A = arr[0];
    const B = arr[1];
    const C = arr[2];

    ans = A * mid ** 2 + B * mid + (k - C);
    //console.log(ans)

    return ans;
}

if (process.env.USERNAME === "user") {
    runProgram(`4
    9 79 36 16
52 92 37 24
24 32 51 75
39 26 58 43`);
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
