function runProgram(input) {
    input = input.trim().split("\n")
    let testCases = Number(input.shift() )


    function predicate( arr,limit,mid ){
        let boats_req = 1;
        let sum = 0;
        let persons = 0;
        for( let i = 0; i < arr.length; i++){
            sum += arr[i]
            if( (sum > limit) || persons >= 2   )
            {
                boats_req += 1;
                sum = arr[i]
                persons = 1           
            }

            else{
                persons += 1

            }

        }

        if( boats_req <= mid ){
            return true
        }

        else{
            return false
        }



    }

    function binary_search(arr, no_of_people, limit){
        let low = 1;
        let high = no_of_people

        let ans = -1;
        while( low <= high )
        {
            let mid = Math.floor( low + (high- low)/2 )
            if( predicate( arr , limit, mid))
            {
                ans = mid;
                high = mid - 1

            }

            else{
                low = mid + 1;
            }


        }

        return ans

    }

    for( let i = 0; i < testCases; i++){
        let  [no_of_people, limit] = input.shift().trim().split(" ").map(Number)
        let peoples_wg = input.shift().trim().split(" ").map(Number).sort( (a,b) => a - b )
        console.log( binary_search(peoples_wg, no_of_people, limit) )
    }
}


if (process.env.USERNAME === "user") {
	runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 1 1 3`);
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