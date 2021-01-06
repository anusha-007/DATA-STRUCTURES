function runProgram(input) {

    input = input.trim().split("\n");
    let arr_len = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
	//console.log(input,arr);
    
    function compare(a,b){
        if( a < b){
            return -1;
        }
        else{
            return 1
        }
    }

    arr.sort(compare)

    let ans = 0;
    for(let i = 0; i < arr_len; i++)
    {
        ans += arr[i]*i

    }
    console.log(ans);
}

if (process.env.USERNAME === "user") {
    runProgram(`
    4
    2 5 1 6`); 
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