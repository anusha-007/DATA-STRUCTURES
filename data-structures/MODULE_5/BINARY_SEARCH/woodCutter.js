function runProgram(input) {

    input = input.trim().split("\n");
    let arr_details = input[0].trim().split(" ");
    let arr_len = Number(arr_details[0]);
    let wood_required = Number(arr_details[1]);

    let arr = input[1].trim().split(" ").map(Number)
   
    arr.sort( (a,b) => a-b)
    
    let out = woodCutter(arr, 0, arr_len-1,wood_required)
    console.log(arr[out])
}

function woodCutter(arr,low,high,wood_required){
    //console.log(low,"low")
    let ans = 0;
    while(low < high){
        let mid = Math.floor( low + (high-low-1)/2);
        console.log(mid,"mid")

        if( predicate( arr,arr[mid],wood_required) )
        {
            // console.log(arr[mid])
            //ans = mid;
            low = mid 
        }

        else{
            high = mid - 1
        }

    }
    return low
}

function predicate(arr,choosed_height,wood_required){
    let ans = 0;
    //console.log(x,"in pre")
    for(let i = 0; i < arr.length; i++){
        if( arr[i] > choosed_height ){
            ans += arr[i] - choosed_height
        }
    }

    if(ans >= wood_required){
        
        return true
    }

    else{
        return false
    }
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