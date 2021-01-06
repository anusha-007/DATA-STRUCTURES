function removeDuplicates() {
    s = "caaabbbc";

    var ans = "";
    var adj = "";
    var idea = false;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            idea = false;
            adj = s[i];
        } else {
            //console.log(adj)
            idea = true;
            if (adj != s[i]) {
                ans = ans + s[i];
            }
        }

        //console.log(idea)
        
    }

    if (idea) {
        ans += s[s.length - 1];
    } else {
        console.log("Empty String");
    }

    console.log(ans);


    
}


removeDuplicates()

// yes you need to pass input and i as 0 and keep on incrementing

// if its undefined you need to stop
