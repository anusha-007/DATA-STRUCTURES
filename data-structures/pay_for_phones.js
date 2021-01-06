function runProgram(input) {

    input = input.trim().split("\n")
    console.log(input)
    var mobile_price = input[0].trim().split(" ");
    var quantity = input[1].trim().split(" ");
    mobile_price = mobile_price.map(Number);
    quantity = quantity.map(Number);
    console.log(mobile_price,quantity)
    
    var sum = 0
    for(var i = 0; i < mobile_price.length; i++)
    {
        sum += quantity[i]*mobile_price[i];
    }

    if(sum >= 150000)
        {
            console.log("Not Possible")
        }

        else
        {
            console.log("Possible") 
        }
}

if (process.env.USERNAME === "user") {
    runProgram(`
    10000 20000 15000 5000
    2 3 4 3`);
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