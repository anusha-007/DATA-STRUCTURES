function runProgram(input) {

    input = input.trim().split("\n");
    
    var arr = input[1].trim().split(" ");
	console.log(input)
    //console.log(arr.join(""));
    

    for(var i = 0; i < arr.length; i++)
    {
        for(var j = i; j < arr.length; j++)
        {
            var str = arr.join("");
            var substr = str.slice(i,j) 
            checkAdj(substr)
        }
    }


    
    
}

function checkAdj(str)
{
    console.log(str)
}


if (process.env.USERNAME === "user") {
	runProgram(`6
    1 2 2 3 1 2`);
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