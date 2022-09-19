function minBribe(queue) {
    let bribes = 0, i, j;
    let isText = ''
    for (i = 0; i < queue.length; i++) {
        const pos = queue[i], at = i + 1;
        if (pos - at > 2) { isText = "Too chaotic" } 
        for (j = Math.max(0, pos - 2); j < i; j++) {
            if (queue[j] > pos) { bribes++ }
        }
    } 
    isText ? console.log(isText) : console.log(bribes)
}