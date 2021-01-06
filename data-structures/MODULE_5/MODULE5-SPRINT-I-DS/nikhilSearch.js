function runProgram(input) {

    input = input.trim().split("\n");
    let arr_len = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number)
    let queries = Number(input[2]);
    pos = 3
    for(let i = 0 ; i < queries; i++){
        let Q_details = input[pos++].trim().split(" ")
       
        let Q = Number(Q_details[0])
        let key = Number(Q_details[1])
        
        if(Q == 0){
           let ans =  solveQuery0(arr,0,arr_len-1, key)
           console.log(ans,"ans")
        }

        else{
            let ans = solveQuery1(arr,0,arr_len-1, key)
            console.log(ans,"ans");
        }

    }
}
let c = 0;

function solveQuery0(arr,low,high,key){
    
    let mid = Math.floor( low + (high-low)/2);

    if( low > high){
        console.log(c)
        c = 0;
        return c
    }

    if(arr[mid] >= key){
        c = c + 1;
        return solveQuery0(arr,mid+1, high, key) && solveQuery0(arr,low, mid - 1, key)
    }

    else{
        return solveQuery0(arr, mid+1, high,key)
    }
}

let count1 = 0;
function solveQuery1(arr, low, high, key){
    let mid = Math.floor( low + (high-low)/2);

    if(low > high){
        return count1
    }

    if(arr[mid] > key){
        count1 = count1 + 1;
        return solveQuery1(arr,mid+1, high, key) && solveQuery1(arr,low, mid - 1, key)
    }

    else{
        return solveQuery1(arr, mid+1, high,key)
    }
    
}



if (process.env.USERNAME === "user") {
	runProgram(`4
	1 2 3 4 
	3
	0 5
	1 3
	0 3`);
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