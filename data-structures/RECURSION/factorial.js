function runProgram(input) {

	input = Number(input);
    console.log(input)

    
    var fact = [1];
    
    for(var i = 1; i <=input; i++)
    {
        fact[i] = fact[i-1]*i;
    }


    
    
    console.log(fact[fact.length-1]);
}

if (process.env.USERNAME === "user") {
	runProgram(`5`);
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