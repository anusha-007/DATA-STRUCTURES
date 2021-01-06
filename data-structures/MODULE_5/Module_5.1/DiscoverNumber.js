
function runProgram(input) {

    input = input.trim().split("\n")
    const [arr_len, queries] = input.shift().trim().split(" ").map(Number)
    const arr = input.shift().trim().split(" ").map(Number).sort( (a,b) => a-b)

    for(let i =0 ; i < queries; i++)
    {
        let key = Number( input[i] )
        
        let ans = binarySearch(arr,key)
        if( ans){
            console.log("YES")
        }
        else{
            console.log("NO")
        }
    }

    function binarySearch( arr,key )
    {
        let low = 0;
        let high = arr_len-1;

        while(low <= high)
        {
            let mid = low + Math.floor( (high - low)/2 )
            if( arr[mid] == key )
            {
                return true
            }

            else if( arr[mid] < key )
            {
                low = mid + 1
            }

            else
            {
                high = mid - 1
            }

        }
        return  false
    }

}


if (process.env.USERNAME === "user") {
	runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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