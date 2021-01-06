function runProgram(input) {
    input = input.trim().split("\n");

    let [arr_len, sum] = input.shift().split(" ").map(Number);
    let arr = input.shift().trim().split(" ").map(Number).sort( (a,b) => a - b);


    function suchPair( arr, arr_len ,key ){
        let low = 0;
        let high = arr_len - 1

        let ans = -1
        while( low <= high ){
            let mid = low + Math.floor( (high - low)/2 )
            
            let sum = arr[mid] + arr[mid-1];
            if( sum == key ){
                ans = 1
                return ans
            }

            else if( sum > key ){
                high = mid - 1;
            }

            else{
                low = mid + 1;
            }
        }

        return ans
    }
    
   let ans = suchPair(arr, arr_len,sum)
   console.log(ans,"ans")
//    if( ans >= 2){
//        console.log(1)
//    }
//    else{
//     console.log(-1)
//    }
   

}


if (process.env.USERNAME === "user") {
	runProgram(`5 8
    3 4 1 2 7
	`);
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