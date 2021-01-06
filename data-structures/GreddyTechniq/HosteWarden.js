function runProgram(input) {

   input = input.trim().split("\n");
   let arr_len = Number(input[0])
   let studentsArr = input[1].trim().split(" ").map(Number);
   let rooms = input[2].trim().split(" ").map(Number);
  let a = [0,100,2,4,5]
   a.sort( (a,b) => a-b)
   console.log(a,"before")
   console.log(a.sort(),"hii");

    function compare(a,b){
        if(a < b){
            return -1
        }
        else{
            return 1
        }
    }

    studentsArr.sort(compare);
    console.log(studentsArr,"how");
    rooms.sort(compare);

    let max = 0;
    let check ;
    for(let i = 0; i < arr_len; i++)
    {
        check = Math.abs(studentsArr[i] - rooms[i]);
        if(check > max){
            max = check
        }    

    }
    //console.log(studentsArr,rooms);
    console.log(max)
    
}


if (process.env.USERNAME === "user") {
    runProgram(`
    3
    4 -4 2
    4 0 5
`); 
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