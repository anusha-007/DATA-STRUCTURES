function runProgram(input) {
    str = input.trim();

    var output = findLength(str);
    console.log(output);
}

function findLength(str) {
    if (str.length == 0) {
        return 0;
    }

    strArr = str.split("");
    strArr.pop();
    str = strArr.join("");

    return 1 + findLength(str);
}

if (process.env.USERNAME === "user") {
    runProgram(`masaischool`);
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
