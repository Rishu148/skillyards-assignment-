//1 find the first repeating word in a string
//2 return index of a duplicate word in a string
//3 make a api to save data in the json server
//4 make a api to take data from the json server







//1 find the first repeating word in a string


const fristRepeatingWord=(str1)=>{
    let newarra=str1.split(' ')
    let obj={}
    for (let i = 0; i < newarra.length; i++) {
    let word=newarra[i]
    if (obj[word]) {
    obj[word]+=1
    }else{
    obj[word]=1
    }
    }
    for (const word in obj) {
    if (obj[word]>1) {
    return word
    }
    }
    }
    let str1="hello i am here hello"
    console.log(fristRepeatingWord(str1)) 














2// return index of a duplicate word in a string


const findIndexDuplicateWord=(str1)=>{
    let newArra=str1.split(' ')
    let obj={}
    for (let i = 0; i < newArra.length; i++) {
    let word=newArra[i]
    if (obj[word]) {
    obj[word].push(i);
    } else {
    obj[word] = [i];
    }
    }
    let tmp=[]
    for (const key in obj) {
        
    if (obj[key]) {
    tmp.push(key,obj[key])
    }
    }
    return tmp
    }
    
    console.log(findIndexDuplicateWord("a b c c c c d d"))



