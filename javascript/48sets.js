let set1 = new Set([10,20,30,40])

set1
Set(4) {10, 20, 30, 40}

let getEntry = set1.entries()
getEntry.next().value
(2) [10, 10]
getEntry.next().value
(2) [20, 20]
getEntry.next().value
(2) [30, 30]
getEntry.next().value
(2) [40, 40]
getEntry.next().value
