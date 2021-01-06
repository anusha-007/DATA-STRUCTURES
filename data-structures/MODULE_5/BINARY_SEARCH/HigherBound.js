function runProgram(input) {
    input = input.trim().split("\n");
    let arr_details = input[0].trim().split(" ");
    let arr_len = Number(arr_details[0]);
    let key = Number(arr_details[1]);
    let arr = input[1].trim().split(" ").map(Number);

    console.log(arr_len, arr, key);

    let output = findHigherBound(arr, 0, arr_len - 1, key);
    console.log(output,"out");
}

function findHigherBound(arr, low, high, key) {
    let ans = -1;
    let c = 0;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
         
        if (arr[mid] > key) {
            ans = mid;
            high = mid - 1;
        } 
        
        else {
            low = mid + 1;
        }
    }

    return ans;
}

// function showName (firstName, lastName) {
//     var nameIntro = "Your name is ";
//     // this inner function has access to the outer function's     //variables, including the parameter
//     function makeFullName () {     
//     return nameIntro + firstName + " " + lastName;   
//     }
//     return makeFullName;
//     }

// let a = showName ("Michael", "Jackson");
// console.log(a(),"he"); 


if (process.env.USERNAME === "user") {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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
