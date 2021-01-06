function runProgram(input) {
    input = input.trim().split("\n");
    let arr_details = input[0].trim().split(" ");
    let arr_len = Number(arr_details[0]);
    let key = Number(arr_details[1]);
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(key,arr,arr_len, " hii")

    let ans = findOccurrences(arr, 0, arr_len-1,key)
    console.log(ans)
}

let c =  0;
function findOccurrences( arr, low, high,key ){
    let mid = Math.floor( low + (high-low)/2 )
    
    
    if(low > high){
        //console.log(c,"hi")
        return c
    }

    if( arr[mid] == key){
       
        c = c + 1;
       // console.log(c,"wher")
        return findOccurrences(arr, low, mid - 1, key) && findOccurrences(arr, mid+1, high, key)
        
    }

    else if( arr[mid] > key ){
        return findOccurrences(arr, low, mid - 1,key)
     }
 
     else{
         return findOccurrences(arr, mid+1, high,key)
     }
    
    
}


if (process.env.USERNAME === "user") {
	runProgram(`6 3
    2 3 3 3 6 9
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