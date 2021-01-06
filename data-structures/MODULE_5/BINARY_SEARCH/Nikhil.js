function runProgram(input) {
    input = input.trim().split("\n");
    let arr_len = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let queries = Number(input[2]);
    pos = 3;
    for (let i = 0; i < queries; i++) {
        let Q_details = input[pos++].trim().split(" ");

        let Q = Number(Q_details[0]);
        let key = Number(Q_details[1]);

        if (Q == 0) {
            let ans = solveQuery0(arr, arr_len, key);
            if (ans == -1) {
                console.log(0);
            } else {
                console.log(arr_len - ans);
            }
        } else {
            let ans = solveQuery1(arr, arr_len, key);
            if (ans == -1) {
                console.log(0);
            } else {
                console.log(arr_len - ans);
            }
           
        }
    }
}

function solveQuery0(arr, n, key) {
    //query0 find >= elements than key
    let low = 0;
    let high = n - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] >= key) {
            if (arr[mid] == key) {
                ans = mid;
            }
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function solveQuery1(arr, n , key) { //find upper bound
    let low = 0;
    let high = n-1;
    let ans = -1;
    while(low <= high){
        let mid = Math.floor( low + (high-low)/2 );

        if(arr[mid] > key){
            ans = mid;
            high = mid - 1
        }

        else{
            low = mid + 1
        }

    }
    return ans

}

if (process.env.USERNAME === "user") {
    runProgram(`4
	1 2 3 4 
	3
	0 5
	1 3
	0 3`);
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