function runProgram(input) {
    input = input.trim().split("\n").map(Number);
    console.log(input,"inpu")

    let arr = input.slice( 1, input[0]+1)
    let rounds = input.slice(input[0] + 2)
    console.log(arr, rounds)

    const Search = (arr,q) => {
        var low = 0;
        var high = arr.length-1;

        while( low <= high ){
            let mid = low + Math.floor( (high - low)/2 )
            if( arr[mid] > q ){
                high = mid - 1;
            }

            else{
                low = mid + 1
            }

            
        }
        return low

    }


    for(let i = 0; i < rounds.length; i++){
        var count = Search(arr,rounds[i]);
        var power = 0;

        for(let j = 0; j < count; j++){
            power += arr[j]

        }
        console.log( count, power )
    }

}


if (process.env.USERNAME === "user") {
	runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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