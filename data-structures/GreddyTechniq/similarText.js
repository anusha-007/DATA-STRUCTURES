function runProgram(input) {

   
    input = input.trim().split("\n");
    
    let s1 = input[0].trim();
    let s2 = input[1].trim();
   
    //console.log(s1,s2);
    
    let c = 0;
   for(let i = 0; i < s1.length; i++){
       if(s2.indexOf(s1[i]) !== -1){
          let index = s2.indexOf(s1[i]);
          let arr = s2.split("")
          arr.splice(index,1);
          s2 = arr.join("")
           c = c + 1;

       }
   }
   console.log(c);

    // st = "an";
    // st2 = "ausnha";
    // console.log(st2.indexOf(st));
}

if (process.env.USERNAME === "user") {
    runProgram(`eziowiomkvrrdzx
    orugiebaolddavd
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