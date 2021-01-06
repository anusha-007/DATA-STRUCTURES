function runProgram(input) {

    input = input.trim().split("\n")
    let str_len = Number(input[0])
   
    let str = input[1].trim()

    let minimum_delete_operations = 0;
    //console.log(str_len,str,"str")
      // aaaaab
    for( let i = 1; i < str_len; i= i + 2){
        console.log(str,"str incom")
        if( str[i] == str[i-1]){
            console.log(i,"i")
            str_arr = str.split("");
            str_arr.splice(i,1)
            str = str_arr.join("")
            console.log(str,"ar")
            for(let j = 1; j < str.length; j = j + 2)

            {

                if( str[i] == str[i-1]){
                    console.log(i,"i")
                    str_arr = str.split("");
                    str_arr.splice(i,1)
                    str = str_arr.join("")
                    console.log(str,"ar")
                }

            }
        }

    }
}

a = ["a",1,3]
console.log(a.splice(0,1))

if (process.env.USERNAME === "user") {
	runProgram(`5
    aaaab`);
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