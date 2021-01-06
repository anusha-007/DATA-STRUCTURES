function runProgram(input) {
   input = input.trim().split("\n");

   let testCases = Number(input[0]);
   
   let pos = 1
   for(let i = 0; i < testCases; i++)
   {
    let emp_details = input[pos++].trim().split(" ");
    let seats = Number(emp_details[0]);
    let employees = Number(emp_details[1])

    let arr= [];
    for(let j = 0; j < seats; j++)
    {
        arr.push(Number(input[pos++]) ) 


    }
    
    arr.sort( (a,b) => a-b);
    //console.log(arr);
    let min = arr[1] - arr[0];
    // let max = arr[arr.length-1] - arr[0]
    console.log(min,"min")
    let out = angryEmployess(arr,arr[0], arr[arr.length-1],employees)
    console.log(out);

   }
   
}

function angryEmployess(arr,min,max,noOfEmp)
{
    
    let ans = -1;
    while(min<=max){
        
        let mid = Math.floor( min + (max-min)/2)
        if( predicate(arr,mid,noOfEmp) )
        {
            
            ans = mid;
            min = mid + 1
        }

        else
        {
           
            max = mid - 1
           
        }
    }
    return ans

}

function predicate( arr,mid, noOfEmp){

    let count = 1;
   
    let cur = arr[0]
    for(let i = 1; i <= arr.length; i++){ 
          //console.log(i)
            let min_distance = arr[i] -  cur;
            if(min_distance >= mid){
                // console.log("cmg in",count)
                count += 1;
                cur = arr[i]
                
             }

        
       

    }
    
    if(count >= noOfEmp){
        return true
    }
    
    else{
        return false

    }

    
}

if (process.env.USERNAME === "user") {
	runProgram(` 1
    5 3
    1
    2
    8
    4
    9`);
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