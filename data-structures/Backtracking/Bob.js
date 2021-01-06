function runProgram(input) {
    let boxes = Number(input.trim());

    let out = recursive(boxes);
    console.log(out);
}

function recursive(boxes) {
    if (boxes <= 2) {
        return 1;
    } else if (boxes === 3) {
        return 2;
    } else if (boxes === 4) {
        return 3;
    } else if (boxes === 5) {
        return 5;
    } else {
        return (
            recursive(boxes - 1) + recursive(boxes - 3) + recursive(boxes - 5)
        );
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`7`);
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
