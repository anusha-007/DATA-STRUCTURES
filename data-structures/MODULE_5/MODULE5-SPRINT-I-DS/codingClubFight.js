function runProgram(input) {
    input = input.trim().split("\n");

    let no_of_soldiers = Number(input[0]);

    let soldiers_power = [];
    let pos = no_of_soldiers + 1;
    for (let i = 1; i <= no_of_soldiers; i++) {
        soldiers_power.push(Number(input[i]));
    }

    let rounds = Number(input[pos++]);

    for (let j = 0; j < rounds; j++) {
        let key = input[pos++];

        let p = 0;
        let k = 0;
        let ans = Fight(soldiers_power, 0, no_of_soldiers - 1, key);

        console.log(ans, "output");
    }
}

let k = 0;
let p = 0;

function Fight(arr, low, high, key) {
    //console.log(power,killed,"o")
    let mid = Math.floor(low + (high - low) / 2);

    if (low > high) {
        console.log(k, p, "pls come");
        // let killed = k;
        // let power = p

        return [k, p];
    }

    if (arr[mid] <= key) {
        k = k + 1;
        p = p + arr[mid];
        //console.log(Fight(arr, low, mid - 1,key) && Fight(arr, mid+1, high,key)  ,"uff")
        return Fight(arr, low, mid - 1, key) && Fight(arr, mid + 1, high, key);
    } else {
        return Fight(arr, low, mid - 1, key);
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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
