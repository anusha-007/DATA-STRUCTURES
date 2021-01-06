function runProgram(input) {
    let a = [4, 2, 1, 3];
    input = input.trim().split("\n");
    
    let testCases = Number(input[0]);

    let pos = 1;
    for (let i = 0; i < testCases; i++) {
        let arr_len = Number(input[pos++]);
        let arr = input[pos++].trim().split(" ").map(Number);
        if((arr_len) == 1){
          console.log(0)
        }
        else{
          let res = calTime(arr);
           console.log(res.toString());
        }
        
    }
}

function calTime(arr) {
    arr.sort((a, b) => b - a); //sorting in ascending order to find max time

    let sum = BigInt((arr[0]) + (arr[1])); //   BigInt is a built-in object that represents a whole number larger than (2**53 - 1) --js represents numbers b/w -(2**53 - 1) and 2**53 - 1
    let ans = sum;
    for (let i = 2; i < arr.length; i++) {
         
        sum = sum + BigInt((arr[i]));
        ans = ans + sum;
    }

    return (ans);
}



if (process.env.USERNAME === "user") {
    runProgram(`
    2
    4
    4 2 1 3
    5
    2 3 9 8 4`);
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
