function runProgram(input) {
    input = input.trim().split("\n");

    let arr_len = Number(input[0]);
    
    let arr = input[1].trim().split(" ").map(Number);
    let key = Number( input[2] )
    let ans = lowerBound(arr,key)
    //console.log(ans)
    let ans2 = upperBound(arr,key)
    //console.log(ans2)
    //counts of key;
    let count; 
    if(ans == -1 && ans2 == -1){
        count = 0
    }
    else{
        count = (ans2-ans) +1
    }


    console.log( ans,ans2,count )

}

function lowerBound( arr,key){
    var low = 0;
    var high = arr.length-1;

    let lower = -1;
    while( low <= high){
        let mid = low + Math.floor( (high-low)/2 )
        if(arr[mid] == key){
            lower = mid;
            high = mid - 1;
        }

        else if(arr[mid] > key){
            high = mid - 1;
        }

        else{
            low = mid + 1;
        }

    }
    return lower
}

function upperBound(arr,key){
    let upper = -1;
    let low = 0;
     let high = arr.length-1;
     while( low <= high){
        let mid = low + Math.floor( (high-low)/2 )
        if(arr[mid] == key){
            upper = mid;
            low = mid + 1;
        }

        else if(arr[mid] > key){
            high = mid - 1;
        }

        else{
            low = mid + 1;
        }

    }
    return upper
     
}




if (process.env.USERNAME === "user") {
	runProgram(`6
    1 1 1 2 2 2	
    1`);
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