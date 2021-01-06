function runProgram(input) {

	
    console.log(input)
    let steps = Number(input.trim())
    var ans = findWays(steps);
    console.log(ans);

    function findWays(steps){
        if(steps <= 2)
        {
            return steps
        }

        else if(steps == 3){
            return steps;
        }

        else{
            return findWays(steps-1) + findWays(steps-2) + findWays(steps-3)
        }
    }

    
	
}

if (process.env.USERNAME === "user") {
    runProgram(`
    4`); 
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