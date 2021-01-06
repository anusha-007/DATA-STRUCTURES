function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input)
    let no_of_soaps = Number(input[0]);

    let soaps_arr = input[1].trim().split(" ").map(Number).sort( (a,b) => a-b);
    console.log(soaps_arr)

    let Queries = Number(input[2])

    let pos = 3
    for(let i = 0; i < Queries; i++){
        let key = Number(input[pos++])
        console.log(key)
        let ans = find_less_price(soaps_arr,no_of_soaps,key)
        console.log(ans+1,"ans")

    }

 
}

function find_less_price(arr,n,key) {
    let low = 0;
    let high = n-1
    
   let ans = -1;
    while( low <= high ){
        let mid = Math.floor(low + (high-low)/2)
        
        if( arr[mid] < key ){
            ans = mid;
            break
        }

        else if( arr[mid] == key){
            high = mid - 1;
        }

        else{
            high = mid - 1
        }
    }
    return ans

}


if (process.env.USERNAME === "user") {
	runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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