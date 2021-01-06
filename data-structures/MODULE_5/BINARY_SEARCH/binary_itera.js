function runProgram(input) {

    input = input.trim().split("\n");
    let arr_details = input[0].trim().split(" ");
    let arr_len = Number(arr_details[0]);
    let key = Number(arr_details[1])
    
    let arr = input[1].trim().split(" ").map(Number);
    

    arr.sort( (a,b) => a-b )
    
    let isFound = binarySearch(arr,0,arr_len-1,key)
    
    if(isFound == -1){
        console.log(-1)
    }
    else{
        console.log(1)
    }
}

function binarySearch(arr,low,high,key){
    

    while(low <= high){
        let mid = Math.floor(low + (high-low)/2)
        if( arr[mid] == key){
            return mid
        }
    
        else if( arr[mid] > key ) {
            high = mid - 1
            
        }
    
        else{
            low = mid + 1
            
        }

    }

    return -1
    

}


if (process.env.USERNAME === "user") {
	runProgram(`5 0
    2 -2 0 3 4`);
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