function runProgram(input) {

    input = input.trim().split("\n");
    
    var n = Number(input[0]);

    var arr = input[1].trim().split(" ");
    arr = arr.map(Number);
    



    var user = {};
    
    for(var i = 0; i < n; i++)
    {
        user[arr[i]] = i;
    }
    
    console.log(user);

    var ind_arr = [];
    for(var i = 0; i < n; i++)
    {
        var  min = i;
        for(var j = i+1; j < n; j++)
        {
            if(arr[min] > arr[j])
            {
                min = j;
            }
        }

        ind_arr.push(user[arr[min]]);

        //var temp = user[i];
        //user[i] = user[min];
        //user[min] = temp;

    }

    console.log(user);

    console.log(ind_arr);

    

    
}


if (process.env.USERNAME === "user") {
    runProgram(`
    5
    4 5 3 7 1`);
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