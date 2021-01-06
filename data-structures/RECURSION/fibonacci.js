function runProgram(input) {

    var n = Number(input);
	
    console.log(input);
    
   
    function fibbonacci(n)
    {
        if(n<=1)
        {
            return n
            
		}
		
        return fibbonacci(n-1) + fibbonacci(n-2);

	}
	
	console.log(fibbonacci(n))
	
}

if (process.env.USERNAME === "user") {
	runProgram(`4`);
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