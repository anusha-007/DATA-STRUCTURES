function runProgram(input) {

    input = input.trim().split("\n");
    
    var n = Number(input[0]);

    var queue = [];

    for(var i = 1; i <= n; i++)
    {
        var shift_arr = [];
        var arr = input[i].trim().split(" ");
        

        if(arr[0] == 'E')
        {
            queue.push(arr[1]);
            shift_arr.push(queue.length);
        }

        if(arr[0] == 'D')
        {
            if(queue.length == 0)
            {
                shift_arr.push(-1);
                shift_arr.push(0);

                
            }

            else
            {
                var ans = queue.shift();
                shift_arr.push(ans,queue.length);


            }
            
        }

        console.log(shift_arr.join(" "));


    }
	//console.log(input)
	
}

if (process.env.USERNAME === "user") {
    runProgram(`
    5
    E 2
    D
    D
    E 3
    D`);
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