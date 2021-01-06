function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input,"inp")
    let [problems, days] = input[0].trim().split(" ").map(Number)
    // console.log(problems,days,"dys")

    let arr = input[1].trim().split(" ").map(Number).sort( (a,b) => a-b);
    // console.log(arr);
    practiceTime(arr,problems,days)
}

function practiceTime( arr, n ,days){
    // console.log(arr)
    console.log(arr[n-1])
}


if (process.env.USERNAME === "user") {
	runProgram(`5 3
    1 2 2 1 3`);
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