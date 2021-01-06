function runProgram(input) {

    input = input.trim().split("\n")
    
    let testCases = Number(input.shift())



    function liftingFingers(str){
        let count = 0;
        for( let i = 0; i < str.length; i++)
        {
            if( str[i] !== str[i+1] )
            {
                count += 1;
            }




        }
        return count

    }
    for(let i = 0; i < testCases; i++)
    {
        let str = input.shift().trim()
        // console.log(str,"Str")
        console.log( liftingFingers(str) )


    }

}


if (process.env.USERNAME === "user") {
	runProgram(`2
    aaaaa
    abbbaaz`);
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