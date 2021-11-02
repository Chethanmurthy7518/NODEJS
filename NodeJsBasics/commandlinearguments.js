const args = process.argv
console.log(args);

if(args[2] == 'add'){
    console.log('Adding');
}else if(args[2]==='delete'){
    console.log('delete');
}