function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = Number(input[0]);

    for (let i = 1; i <= testCases; i++) {
        let Arr = input[i].trim().split(" ").map(Number);
        
        let A = [];
        A[0] = Arr[0];
        A[1] = Arr[1];
        let n = Arr[2];
        let mod = Arr[3];
        // console.log(A);
        // console.log(A[0],A[1],n,mod);

        for (let i = 2; i < n; i++) {
            A[i] = (A[i - 1] + A[i - 2]) % mod;
        }

        A.sort();
        let user = {};
        for (let j = 0; j < A.length; j++) {
            if (!user[A[j]]) {
                user[A[j]] = 1;
            } else {
                user[A[j]] = user[A[j]] + 1;
            }
        }

       

        let ans = 0;
        for (key in user) {
            ans += user[key] ** 2;
        }
        //console.log(A);
        console.log(ans);
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`
    2
0 1 6 4
1 1 4 2
    `);
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
