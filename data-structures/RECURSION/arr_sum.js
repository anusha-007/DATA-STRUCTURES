function runProgram(input) {

    input = input.trim().split("\n");
    var testCases = Number(input[0]);

    var pos = 1;
    for(var i = 0; i < testCases; i++)
    {
        var arr_len = Number(input[pos++]);
        
        var arr = input[pos++].trim().split(" ");
        arr = arr.map(Number);
        
        function sumArr(arr,low,high)
        {
            var mid = Math.floor((low+high)/2);
            //console.log(mid);
            console.log(low,high);
            // if(low == high)
            // {
            //     return arr[low];
            // }

            var sum_left = sumArr(arr,low,mid);
            var sum_right = sumArr(arr,mid+1,high)
            return sum_left + sum_right;
        }


        console.log(sumArr(arr,0,arr_len-1))
        //console.log(ans);
    }

    
	
}

if (process.env.USERNAME === "user") {
	runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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