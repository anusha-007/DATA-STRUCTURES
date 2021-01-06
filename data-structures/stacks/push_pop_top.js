function runProgram(input) {
    input = input.trim().split("\n");
    

    var testcases = Number(input[0]);

    var stack = [];

    var pos = 1;
    for(var i = 0; i < testcases; i++){
        
        var arr = input[pos].trim().split(" ");
        
        
        arr = arr.map(function(ele){
            return Number(ele);
        })

        if(arr[0] == 1)
        {
            stack.push(arr[1]);
        }

        if(arr[0] == 2)
        {
            stack.pop();
        }

        if(arr[0] == 3)
        {
            if(stack.length == 0)
            {
                console.log("Empty!")
            }

            else{
                console.log(stack[(stack.length-1)]);
            }
        }

        pos = pos+1;
        
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`
    6
    1 15
    1 20
    2
    3
    2
    3`);
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