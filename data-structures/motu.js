function runProgram(input) {

    var n = Number(input);
	
    console.log(input)


    var steps ;
    if(n < 5)
    {
        steps = 1;
    }
    if(n >= 5)
    {
        steps = Math.floor(n/5);
        if(n%5 != 0)
        {
            steps += 1;
        }

    }

    console.log(steps)
}

if (process.env.USERNAME === "user") {
	runProgram(`2`);
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