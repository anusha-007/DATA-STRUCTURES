function runProgram(input) {

    input = input.trim().split("\n");
    
    var n = Number(input[0]);

    var arr = input[1].trim().split(" ");

    arr = arr.map(Number);

    console.log(arr)

    var new_arr = [];
    var new_a = [];

    for(var i = 0; i < n; i++)
    {
        var rem = 0;
        var num = arr[i];

        while(num > 0)
        {
            rem += num%10;
            num = Math.floor(num/10);
            console.log(num + "hii");
        }

        if(rem % 4 == 0)
        {
            new_arr.push(arr[i]);
        }

        else{
            new_a.push(arr[i]);
        }
    }

    console.log(new_arr,new_a);


    function sort(arr)
    {
        var n = arr.length;
        for(var i = 0; i < n-1; i++)
        {
            for(var j = 0; j < n-i-1; j++)
            {
                if(arr[j] > arr[j+1])
                {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }


        }

        return arr;
    }

    var a = sort(new_arr);
    var b = sort(new_a);

    var out = [];
    
    for(var i=0; i < b.length;i++)
    {
        a.push(b[i]);
    }

    console.log(a.join(" "));


}

if (process.env.USERNAME === "user") {
    runProgram(`
    5
    88 24 20 4 23`);
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