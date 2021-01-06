
function runProgram(input) {
    input = input.trim().split("\n")
    let testCases = Number(input.shift() )
    for( let i = 0; i < testCases; i++){
        let  [no_of_people, limit] = input.shift().trim().split(" ").map(Number)
        let peoples_wg = input.shift().trim().split(" ").map(Number).sort( (a,b) => a-b )
        console.log( lifeBoats(peoples_wg, no_of_people, limit) )
    }


    function lifeBoats(arr,arr_len, limit){
        let i = 0;
        let j = arr_len-1

        boats_count = 0;
        while( i <= j )
        {
            if( i == j){
                boats_count += 1
                break
            }
            else if ( (arr[i] + arr[j]) <= limit )
            {
                boats_count += 1;
                i = i + 1;
                j = j - 1
            } 

            // else if( (arr[i] + arr[j]) < limit ){
            //     boats_count += 1
            //     i = i + 1
            // }
            else{
                boats_count += 1
                j = j - 1
            }

        }
        return boats_count
    }
}


if (process.env.USERNAME === "user") {
	runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 1 1 2`);
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