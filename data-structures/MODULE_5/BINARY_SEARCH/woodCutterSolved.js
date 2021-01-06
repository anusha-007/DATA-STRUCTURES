function runProgram(input) {

    input = input.trim().split("\n");
    let arr_details = input[0].trim().split(" ");
    let arr_len = Number(arr_details[0]);
    let wood_required = Number(arr_details[1]);

    let arr = input[1].trim().split(" ").map(Number)
   
    // console.log(arr, wood_required);
    console.log( woodCutter(arr,wood_required) )
    
   
}

function woodCutter(arr, wood_required){
    var low = 0;
    var high = Math.max(...arr)

    let ans = -1

    while( low <= high ){
        var mid = low + Math.floor( (high - low)/2 )

        var wood_collected = calculate_wood_collected(arr, mid)
        if( wood_collected >= wood_required )
        {
            ans = mid;
            low = mid + 1;
        }

        else{
            high = mid - 1
        }

    }
    return ans;
}

function calculate_wood_collected(arr,mid){
    var total_wood_collected = 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] > mid ){
            total_wood_collected += (arr[i] - mid)
        }

    }

    return total_wood_collected;
}


if (process.env.USERNAME === "user") {
    runProgram(`
    4 7
20 15 10 17`);
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