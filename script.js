let names = prompt('ismingizni kiriting')
let currentYear = +prompt ('hozirgi yilni kiriting')
let birthYear  = +prompt ('tugilgan yilingizni kiriting')

function name(){
        return currentYear - birthYear
}
console.log(names, 'yosh: ', name())





let num = +prompt('son kiriting')
let line = ""

for(let i = 0; i < num; i++){
 let line = " "

        for (let j = 0; j <num; j++ ){
             if( i == 0 || i == num - 1 || j == 0 || j == num - 1 || i == j){
               line += "🎱"
             
             }else{
               line += "🏐"
             }
            
                } 
console.log(line);

}

while(isNaN(num) ){
    num = +prompt('son kiriting')
}


while( num == 0 ){
    num = +prompt('son kiriting')
}