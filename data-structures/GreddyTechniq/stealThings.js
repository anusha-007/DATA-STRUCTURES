function runProgram(input) {
    input = input.trim().split("\n");
    let capacity = Number(input[0]);
    let arr_len = Number(input[1]);
    let values = input[2].trim().split(" ").map(Number);
    let weights = input[3].trim().split(" ").map(Number);

    //console.log(capacity,arr_len,weights,values);
    let a = [];
    for (let i = 0; i < arr_len; i++) {
        let ratio = values[i] / weights[i];

        a.push([i, ratio]);
    }
    // console.log(a);
    function compare(a, b) {
        //sorting ratios in descending rder
        if (a[1] < b[1]) {
            return 1;
        }
        return -1;
    }
    a.sort(compare);
    let val = 0;
    let remWg = capacity;
    for (let k = 0; k < a.length; k++) {
        let w = a[k][0];
        // console.log(wg,"my wieght")
        let wg = weights[w];
        // let val = values[w];
        //console.log(wg,val,"now fine")
        if (a[k][1] > 0) {
            if (remWg < wg) {
                let v = Math.round((values[w] * remWg) / wg);
                val = val + v;
                break;
            } else {
                remWg = remWg - wg;
                val = val + values[w];
            } }
    }
    console.log(val);
    let s = "2589";
    console.log(s.slice(0,-1),"learn slice");

    // console.log(values["0"])
}

if (process.env.USERNAME === "user") {
    runProgram(`201
    8
    96 23 12 7 58 100 32 2
    90 51 20 23 4 100 21 58
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
