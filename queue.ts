function check(str:string) {
    let stack =[];
    let queue =[];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        stack.push(char.toLowerCase())
        queue.push(char.toLowerCase())
    }
    while (stack.length>0){
        if (stack.pop()===queue.shift()){
            return true
        }
    }
    return false
}

console.log(check('abc '))