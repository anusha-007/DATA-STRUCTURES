function runProgram(input) {

    input = input.trim().split("\n");

    var N = Number(input[0]);

    var stack = [];
    var min_stack = [];
	
    console.log(input)
    
    for(var i = 1; i <= N; i++)
    {
       
        var arr = input[i].trim().split(" ");   // ['push','5']
        //console.log(arr);

        if(arr[0] == 'PUSH')
        {
            arr[1] = Number(arr[1]);
            stack.push(arr[1]);

            if(min_stack.length == 0)
            {
                min_stack.push(arr[1]);
            }

            else
            {
                if( (min_stack[min_stack.length-1]) < arr[1])
                {
                   
                    min_stack.push(min_stack[min_stack.length-1])
                }

                else
                {
                    min_stack.push(arr[1]);
                   
                }
            }

        }

        if(arr[0] == 'POP')
        {
            if(stack.length == 0)
            {
               console.log('EMPTY'); 
            }

            else
            {
                stack.pop();
               
                if(min_stack.length == 0)
                {
                  console.log('MIN');
                  }
              
               else
                   {
                  min_stack.pop();
                  }
            }
            

        }

        if(arr[0] == 'MIN')
        {
            console.log(min_stack[min_stack.length-1])
        }

        

        console.log(min_stack)





        
    }
	
}

if (process.env.USERNAME === "user") {
    runProgram(`
    11
    PUSH 5
    PUSH 7
    PUSH 3
    PUSH 8
    PUSH 10
    MIN
    POP
    POP
    MIN
    POP
    MIN`);
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