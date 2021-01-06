function runProgram(input) {
    input = input.trim().split("\n");

    let [arr_len, sum] = input.shift().split(" ").map(Number);
    let arr = input.shift().trim().split(" ").map(Number).sort( (a,b) => a - b);
    // console.log(arr, "arr",arr_len , sum, "sum");

    var i = 0;
    var  j = arr_len-1;
    
    var found = false

    while( i < j ){
        
        if( ( arr[i] + arr[j] ) == sum  ){
            found = true
            //console.log(1)
            break
    
        }
    
        else if( arr[i] + arr[j] > sum ){
            j = j - 1
        }

        else {
             i = i+1
        }

    }

    if( found){
        console.log(1)
    }

    else{
        console.log(-1)
    }
    
}


if (process.env.USERNAME === "user") {
	runProgram(`5 8
    3 5 0 2 7`);
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