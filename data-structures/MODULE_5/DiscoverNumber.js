function runProgram(input) {
    // let a = [50,40,30,20,10];
    input = input.trim().split("\n");
    let query_details = input[0].trim().split(" ");
    let arr_len = Number(query_details[0]);
    let query_len = Number(query_details[1]);
   
    let arr = input[1].trim().split(" ").map(Number);
    

    let found = 0;
    for(let i = 2; i <= query_len+1; i++){
        let query = Number(input[i]);

        
        if(arr.includes(query)){
            found++;
            console.log("YES")

        }
        else{
            console.log("NO")
        }
        
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