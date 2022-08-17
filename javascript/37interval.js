/// interval > run after certain interval
/// timeout  run only once after specific time

setInterval(function(){},time)

let myinterval = setInterval(function(){
    console.log(Math.random())
},3000)

0.020238919069885508
VM227:2 0.24945267430182483
VM227:2 0.9290979910492825
VM227:2 0.005036690881754513
VM227:2 0.10083662963611784
VM227:2 0.8167445406077118
VM227:2 0.6255627166879305
clearInterval(myinterval)

/////////
setTimeout(function(){
    console.log(Math.random())
},3000)
0.2730645187357197