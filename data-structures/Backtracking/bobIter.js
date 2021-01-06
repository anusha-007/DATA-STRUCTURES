function runProgram(input) {
    let boxes = Number(input.trim())

    let resArr = new Array(boxes+1).fill(0)
    console.log(resArr)
    resArr[1] = 1;
    resArr[2] = 1;
    resArr[3] = 2;
    resArr[4] = 3;
    resArr[5] = 5;
    for(let i = 6; i < boxes + 1; i++){
        resArr[i] = resArr[i-1] + resArr[i-3] + resArr[i-5]
    }
    console.log(resArr[boxes])
    console.log(resArr)

}


if (process.env.USERNAME === "user") {
    runProgram(`7
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