function runProgram(input) {

    input = input.trim().split("\n");
    let arr_len = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);

    // console.log(input,arr,arr_len)
    
    function compare(a,b){
        if(a<b){
            return -1
        }
         return 1
    }

    arr = arr.sort(compare);
    console.log(arr);
    let n = arr_len;
    let h = 0;
    for(let i = 1; i <= arr_len; i++){
        n = n - i;
        h = h+1;
        if( n < i)
        {
            break;
           
        }
    }

    console.log(h);
}

if (process.env.USERNAME === "user") {
    runProgram(`4
    40 100 20 30`); 
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