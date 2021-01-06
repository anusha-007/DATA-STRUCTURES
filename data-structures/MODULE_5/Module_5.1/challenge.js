function runProgram(input) 
{

    input = input.trim().split("\n")
    const n = Number( input.shift() )
    let arr1 = input.shift().trim().split(" ").map(Number).sort( (a,b) => a - b)
   // console.log(arr1, "arr")
    const m = Number( input.shift() )
    let arr2 = input.shift().trim().split(" ").map(Number).sort( (a,b) => a- b)
    //console.log(arr2)

    let max = arr2[m-1]

    let dollars = 0
    for( let i = 0; i < n; i++)
    {
        let ans = max - arr1[i]
        if( ans >= 0){
            dollars += ( ans +  1 )
        }
    
    }

    console.log(dollars)



}


if (process.env.USERNAME === "user") {
	runProgram(`3
    1 3 10
    2
    3 4`);
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