function runProgram(input) {

    input = input.trim().split("\n");

    let arrLen = Number(input.shift() );
   let arr = input.shift().trim().split(" ").map(Number);
   arr.sort( (a,b) => a-b )
   console.log(arr[0])

}


if (process.env.USERNAME === "user") {
	runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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