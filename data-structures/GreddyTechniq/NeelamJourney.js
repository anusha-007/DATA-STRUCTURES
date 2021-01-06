function runProgram(input) {

    input = input.trim().split("\n");
    let arr_len = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
	//console.log(input)
    
    let fare = arr[0];
    let ans = 0 ;
    for( let i = 0; i < arr_len; i++)
    {
        if(  arr[i] < fare)
        {

            fare = arr[i];
            ans = ans + fare;
            
        }

        else
        {
            ans += fare;
        }
    }
    console.log(ans);
}

if (process.env.USERNAME === "user") {
    runProgram(`
    5
4 7 8 3 4`); 
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