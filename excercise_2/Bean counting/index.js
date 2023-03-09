        // Bean Counting Program
/*
const countBs = (str) =>{
    let charOccurance = 0;
    for(let i = 0; i <= str.length-1; i++){
        // console.log(i)
        // console.log(str[i]);
        if(str[i] === 'B'){
            charOccurance +=1;
        }
    }
    return charOccurance;
    
}
console.log(countBs('Bing Bang'));
*/


const countChar = (str, ch) => {
    charCount = 0
    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].includes(ch)){
            charCount++;
        }
    }
    return charCount;
}
console.log(countChar('pap straw Berry pi', 'p'));

    //   REWRITING countBs
    const countBs = (str, char) =>{
        let charOccurance = 0;
        for(let i = 0; i <= str.length-1; i++){
            // console.log(i)
            // console.log(str[i]);
            if(str[i] === char){
                charOccurance +=1;
            }
        }
        return charOccurance;
        
    }
    console.log(countBs('Bing Bang', 'g'));
