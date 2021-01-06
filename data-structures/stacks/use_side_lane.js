function runProgram(input) {
    var input = input.trim().split("\n");
    var n = Number(input[0]);
    var x = 1;
    while (n) {
        var arr = input[x++].trim().split(" ");
        arr = arr.map(Number);

        var sort = true;
        var side_lane = [];
        var expected = 1;

        for (var i = 0; i < n; i++) {
            var cur_ele = arr[i];

            if (expected == cur_ele) {
                //checking current value with expected value,
                expected++;
            } 

            else if (side_lane.length != 0) {
                console.log(side_lane,"hi")
                if (side_lane[side_lane.length - 1] == expected) {
                    console.log("hiiiheloo")
                    while(side_lane[side_lane.length-1] == expected)
                      {
                        var pop_ele = side_lane.pop();
                        console.log(pop_ele,"joo");
                        expected = expected +1;

                    }
                    
                }

                if (cur_ele > side_lane[side_lane.length - 1]) {
                    sort = false;
                    
                    
                }

                
                side_lane.push(cur_ele);
            } 
            
            else{

                
                side_lane.push(cur_ele);
                //console.log('yes');
            }
        }

        console.log(side_lane);
        if (sort) {
            console.log("yes");
        } else {
            console.log("no");
        }
        n = Number(input[x++]);
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`
    7
    1 2 5 4 3 6 7`);
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
