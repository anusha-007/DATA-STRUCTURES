function runProgram(input) {
    input = input.trim().split("\n");

    var arr_size = Number(input[0]);

    var arr = input[1].trim().split(" ");

    arr = arr.map(Number);

    var sorted_arr = bubblesort(arr, arr_size);
    console.log(...sorted_arr);
}

function bubblesort(arr, n) {
    
    if (n == 1) {
        
        return arr;
    }

    for (var i = 0; i < n - 1; i++) {
        
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    return bubblesort(arr, n - 1);
}

var n = 5;
var ar = [3, 5, 0, 9, 8];

//console.log(res);

if (process.env.USERNAME === "user") {
    runProgram(`5
    3 5 0 9 8`);
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

// function formatUserData(user){
//     return `Username : ${user.name}
//     Age : ${user.age}
//     Birthday : ${user.dob}`;
//   }

//   var user = {
//       name:"anu",
//       age:"23",
//       dob:"1998"
//   }

//   var res = formatUserData(user)
//   console.log(res);
