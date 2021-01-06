function runProgram(input) {

    function predicate(cardsArr, noOfCards, decks, deck_size, mid) {
        let temp_deck_size = 0;
        let decks_req = 0;

        for (let i = 0; i < noOfCards; i++) 
        {
            if (cardsArr[i] <= mid) {
                temp_deck_size += 1;
            } 
            else {
                temp_deck_size = 0;
            }

            if (temp_deck_size === deck_size) {
                decks_req += 1;
                temp_deck_size = 0;
            }
        }

        if( decks_req >= decks )
        {
            return true
        }
        else{
            return false
        }
    }

    function buildDecks(cardsArr, noOfCards, decks, deck_size) {
        let low = 1;
        let high = Math.max(...cardsArr);
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            if (predicate(cardsArr, noOfCards, decks, deck_size, mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    input = input.trim().split("\n");
    let testCases = Number(input.shift().trim());


    for (let i = 0; i < testCases; i++) {
        let [noOfCards, decks, deck_size] = input
            .shift()
            .trim()
            .split(" ")
            .map(Number);
        // console.log(deck_size,"sixe")

        let cardsArr = input.shift().trim().split(" ").map(Number);

        let min_time = buildDecks(cardsArr, noOfCards, decks, deck_size);
        console.log(min_time);
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`2
    5 3 1
    1 10 3 10 2
    5 3 2
    1 10 3 10 2`);
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
