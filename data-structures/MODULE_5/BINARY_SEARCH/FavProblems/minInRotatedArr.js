function runProgram(input) {
    input = input.trim().split("\n");
    let [arrLen, key] = input.shift().split(" ").map(Number);

    let rotatedArr = input.shift().trim().split(" ").map(Number);

}


if (process.env.USERNAME === "user") {
	runProgram(`20 12
     18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12
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