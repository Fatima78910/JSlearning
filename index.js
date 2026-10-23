let name = 'Fatima';
let size = 0;
for(let count of name){
    
    console.log(count,size);
    
    size++;

}

let book = {
    name : 'Biology',
    pages : 100
}
for(let i in book){
    console.log(i, book[i]);
}