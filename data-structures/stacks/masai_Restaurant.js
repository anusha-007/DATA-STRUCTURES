function runProgram(input) {
    input = input.trim().split("\n");
    console.log(input);

    var testcases = Number(input[0]);

    var stack = [];

    var pos = 1;
    for(var i = 0; i < testcases; i++){
        
        var arr = input[pos].trim().split(" ");
        
        console.log(arr);

        arr = arr.map(function(ele){
            return Number(ele);
        })

        if(arr[0] == 1)
        {
            if(stack.length == 0)
            {
                console.log("No Food");
            }

            else
            {
                var price = stack.pop();
                console.log(price);
            }
        }

        if(arr[0] == 2)
        {
            stack.push(arr[1]);
        }

        pos = pos+1;

    }
    console.log(stack);
}

if (process.env.USERNAME === "user") {
    runProgram(`
    6
    1
    2 5
    2 7
    2 9
    1
    1`);
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