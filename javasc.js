// // var firstName=prompt("whats your first age");
// // var lastName=prompt("whats your last name");
// // var age=prompt("your age ");
// // console.log("your name is " + firstName   +  lastName );
// // console.log(" your age is " + age)
// // var age =prompt("how old are you");
// // var day =age * 365;
// // alert(day + " days your age")
// // console.log(day);
// // var age =Number(prompt("whats your age"))
// // // if(age<0){
// // 	console.log("not allowd")
// // }else if(age=="21"){
// // 	console.log("happy 21 per")
// // }else if(age%2 !==0){
// // 	console.log("odd")
// // }if ( age %Math.sqrt(age)===0) {
// // 	console.log("your ageuis perfict
// // var num=-10;
// // while(num<19){
// // 	console.log(num);
// // 	num++;
// // }
// // var num=10;
// // while( num<40){
// // 	if(num%2==0){
// // 		console.log(num)
// // 	}
	
// // 	num++;
// // // }
// // var num=300;
// // while(num<333){
// // 	if(num%2!==0){
// // 		console.log(num)
// // 	}
// // 	num++;
// // 
// // var answer=prompt("are we there yet");
// // while(answer.indexOf("yes")===-1){
// // 	answer=prompt("are we there yet")
// // }
// // 	alert("yas you anser")


//  // function sayHello(num){
//  // 	console.log(num * num)
//  // }
//  // sayHello(9);


//  // function sayH(name){
//  // 	console.log("hello "  + name)
//  // }
//  // sayH("ahmed")


//  // function stren(num){
//  // 	return num * num ;
//  // };

//  // stren(9)


// // function isEven(mum){
// // 	if(mum%2===0){
// // 		return true
// // 	}else{
// // 		return false
// // 	}
// // }
// // isEven(4)

// // function fctorial(num){
// // 	var result =1;
// // 	for(var i=1 ;i<=num ;i++){
// // 		result=result * i; 
// // 	}
// // 	return result
// // }
// // fctorial(20)


// // function ktosnack(str){
// // var newStr = str.replace(/-/g ,"_")
// // return newStr

// // }
// // ktosnack("hello-world-again")


// // function fizzBuzz(i){
// // 	var result=[];
// // 	for(i=1;i<=100;1++){
// // 		if(i%3===0){
// // 			result.push("fizz")
// // 		}else if(i%5===0){
// // 			result.push("buzz")
// // 		}else if(i%3===0&&i%5===0){
// // 			result.push("fizzbuzz")
// // 		}else{
// // 			result.push(i)
// // 		}
// // }return result;

// // function fizzBuzz(n) {
// //   if (n <= 0) {
// //     return [];
// //   }
// //   var results = fizzBuzz(n - 1);
// //   if (n % 3 === 0 && n % 5 === 0) {
// //     results.push('FizzBuzz');
// //   } else if (n % 3 === 0) {
// //     results.push('Fizz')
// //   } else if (n % 5 === 0) {
// //     results.push('Buzz')
// //   } else {
// //     results.push(n);
// //   }
// //   return results;
// // }
// // for(let int = 1; int <= 100; int++){
// //    if ((int%3 === 0) && (int%5 === 0)){
// //     console.log('Fizz'+' Buzz');
// //   }
  
// //   else if(int%5 === 0){
// //     console.log('Buzz');
// //   }
// //   else if (int%3===0){

// //   	console.log('Fizz')
// //   }
//   /*if ((int%3 == 0) && (int%5 == 0)){
//     console.log('Fizz'+'Buzz');
//   }
//   else if(int%3 == 0){
//     console.log('Fizz');
//   }
//   else if(int%5 == 0){
//     console.log('Buzz');
//   }*/

// //   else{    
// //     console.log(int);
// //   }
// // }




// // for(let i = 1; i <= 100; i++){
// //    if ((i%3 === 0) && (i%5 === 0)){
// //     console.log('Fizz'+' Buzz');
// //   }
// //   
// //   else if(i%5 === 0){
// //     console.log('Buzz');
// //   }
// //   else if (i%3===0){

// //   	console.log('Fizz')
// //   }
// // else{    
// //     console.log(i);
// //   }
// // }



// // var todo=["buy new coat"];

// // var input=prompt("what you would like to do?");
// // while(input!=="quit"){
// // 	if(input==="list"){
// // 		console.log("==============")
// // 		todo.forEach(function(todos,i){
// // 			console.log(i + ": " + todos);
// // 		})
// // 		console.log("=============")
// // 	}else if(input==="new"){
// // 		var newtodo=prompt("enter new to do");
// // 		todo.push(newtodo);
// // 	}else if(input==="delete"){
// // 		var index=prompt("enter index to delete");
// // 		todo.splice(index,1);
// // 		console.log("deleted toto")
// // 	}
// // 	input=prompt("what you would like to do")
// // }console.log("ok you quit the list");




// // colors=["red","blue","black","white"]
// // function printcolor(color){
// // 	console.log("================")
// // 	console.log(color)
// // 	console.log("===================")
// // }
// // printcolor("red")
// // colors.forEach(printcolor);
// // function printRevverse(arr){
// // 	for(var i=arr.length-1;i>=0;i--){
// // 		console.log(arr[i])
// // 	}
// // }
// // printRevverse([3,6,5,2])

// // function isuniform(arr){
// // 	var first=arr[0];
// // 	for(var i=0;i<arr.length;i++){
// // 		if(arr[i]!==first){
// // 			return false;
// // 		}
		
// // 	}	
// // return true
// // }
// // function sumArray(arr){
// // 	var total=0;
// // 	arr.forEach(function(element){
// // 		total+=element;
// // 	});
// // 	return total;
// // }
// // for (let n = 1; n <=100; n++) {
// //   let output = "";
// //   if (n % 3 == 0) output += "Fizz";
// //   if (n % 5 == 0) output += "Buzz";
// //   if(n%7==0) output +="pop";
// // 			 console.log(n)
// // console.log(output +"!")
// // }
// // }
// // for(var i=1 ;i<=100;i++)
// // var output=""
// // if(i % 3===0){
// // 	output="fizz"
// // 	console.log(output)
// // }else if(i % 5===0){
// // 	output ="bizz"
// // 	console.log(output)
// // }else if(i % 5===0&& i%3===0){
// // 	output="fizzbizz"
// // 	console.log(output)
// // }else if(i %7===0){
// // 	output="pop"
// // 	console.log(output)
// // }else{
// // 	console.log(i) 
// // }
// // function fizzbuzz(value1,value2){
// // 	let output="";
// // 	for(var i=1;i<=100;i++){
// // 		if(i%value1==0&&i%value2==0){
// // 			output="FizzBuzz"
// // 			console.log(output + "!")
// // 		}else if(i%7==0){
// // 			output="pop"
// // 			console.log(output)
// // 		}else if(i%value1==0){
// // 			output="Buzz"
// // 			console.log(output)
// // 		}else if(i%value2==0){
// // 			output="Fizz"
// // 			console.log(output)
// // 		}else{
// // 		console.log(i)		}
// // 	}
// // }

// // fizzbuzz(3,5)




// // output+=((i%value1==0 ? "Fizz" : "") + (i%value2==0 ? "Buzz" : "") || i)}

// // return output}
// // fizzbuzz(3,5)
// //////----------------fizzbuzz by switch and function----//////
// // for (var i=1;i<=100;i++){
// // 	var output="";

// // 	 switch(true){
// // 	 	case (i%3===0&&i%5===0):
// // 	 	output+="fizzbuzz";
// // 	 	break;
// // 	 	case (i%7===0):
// // 	 	output+="pup";
// // 	 	break;
// // 	 	case (i%3===0):
// // 	 	output+="buzz";
// // 	 	break;
// // 	 	case (i%5===0):
// // 	 	output+="fizz";
// // 	 	break;

// // 	 	default:
// // 	 	output=i;
// // 	 }
// // 	 console.log(output)
// // 	}


			
// // function multi(num,mod){
// // 	return num % mod===0;

// // }
// // function main(){
// // 	var outout="";
// // 	for(var i=1;i<=100;i++){
// // 		switch(true){
// // 			case multi(i,15):
// // 			output="fizzpuzz";
// // 			break;
// // 			case multi(i,3):
// // 			output="buzz";
// // 			break;
// // 			case multi(i,5):
// // 			output="fizz";
// // 			break;


// // 			default: 
// // 			output=i;
// // 		}
// // 		console.log(output)
// // 	}
// // }

// // function main(val1,val2){
// // 	var output="";


// // 	for (var i=1;i<=100;i++){
// // 		switch (true){
// // 		case (i%val1===0&&i%val2===0):
// // 		output="fizzbuzz";
// // 		break;
// // 		case (i%val1===0):
// // 		output="buzz"
// // 		break;
// // 		case (i%val2===0):
// // 		output="fizz";
// // 		break;
// // 		default:
// // 		output=i;
// // 		break;
// // 			}
// // 			console.log(output)

// // 		}
// // }
// // 	main(21,7)		
// // console.log([...Array(100)].map((_,i)=>{i++;return(i%15?'':'Spider')||(i%5?'':'Ghost')||(i%3?'':'Rat')||i;}).join('\n'));
// // console.log([...Array(200)].map((_,i)=>{i++;return(i%15?'':'fizz')||(i%5?'':'buzz')||(i%3?'':'fizzbuzz')||i;}).join('\n'))
// // function isMultiple (num, mod) {
// //   return num % mod === 0;

// // }

// // function FizzBuzz (num) {
// //    for(var num=1;num<=100;num++)
// //   switch (true) {
// //     case isMultiple(num, 15): return "FizzBuzz";
// //     case isMultiple(num, 3) : return "Fizz";
// //     case isMultiple(num, 5) : return "Buzz";
// //     default:                  return num;
// //   }
// // }

// // for(let i = 0; i < 5; i++){
// //   for(let i = 0; i < 3; i++){
// //     console.log(1)
// //   }
// // }







// // function multi(num, mod){
// // 	return num%mod===0;
// // }     

// // function main(){
// // 	var output="";
// // 	for (i=1;i<=100;i++){
// // 		switch(true){
// // 			case multi(i, 15):
// // 			output="fizzbuzz";
// // 			break;

// // 			case multi(i, 5):
// // 			output="buzz"
// // 			break;
// // 			case multi(i, 3):
// // 			output="aasdm/n.6
// // }
// // for(var i = 0; i < 5; i++){
// //   for(var i = 0; i < 5; i++){ 
// //     console.log(1)
// //   }
// // }
// // function() {
// //    var a = b = 5;
// // }();
// // console.log(b);

// // function main() {
// // 	var a = "value2";
// //   alert(a); 
  
// // }var a = "value";

// // main ();

// // var evennumber=[];
// // var finevennumber =function(i){

// // 	if (i%2===0){
// // 		console.log(i, `is an even number adding to the Array`)
// // 		evennumber.push(i);
// // 	}
// // }
// // for (var i=0 ;i<=10;i++){
// // 		finevennumber(i)
// // 	}
	
	
// // console.log(evennumber)
// // var seq=function (number){
// // 	var result =number * number
// // 	return result;
// // }
// // result =seq(4);
// // result2 =seq(2);
// // differ=result-result2;
// // console.log(differ)
// // let username="john"
// // let maddi=username||'good'
// // console.log(`hi there  ` + maddi)


// // function fizzBuzz(){
// // 	for(var i=1;i<=100;i++){
// // 		if(i%3 === 0){
// // 			console.log('Fizz');
// // 		} 
// // 		if(i%5 === 0){
// // 			console.log('Buzz');
// // 		} 
// // 		if(i%3 !== 0 && i%5 !== 0) {
// // 			console.log(i);
// // 		}
// // 	}
// // }fizzBuzz()


// // /////////////////good solusion- and best------------------/////////////
// // function fizzBuzz( fizzNumber, buzzNumber,bub,hah){
// // 	// var output;
// // 	for(var i=1;i<=100;i++){
// // 		var output = '';
// // 		if(i%fizzNumber === 0){
// // 			output+='Fizzbuzz';
// // 		} 
// // 		if(i%buzzNumber === 0){
// // 			output+='Buzz'+ '!';
// // 		} 
// // 		if(i%bub===0){
// // 			output+='bub'
// // 		}
// // 		if(i%hah===0){
// // 			output+='haha'
// // 		}
// // 	 if(  
// // 		output .length===0) {
// // 			output+=i;
// // 		}
// // 		console.log(output);
// // 	}
// // }
// // fizzBuzz(15,5,7,3)


// //////////////////////////////first good solution with case------------////////////

// // function fizzbuzz(val1,val2,val3,val4){
// // 	for (i=1;i<101;i++){
// // 		output='';
// // 		switch (true){
// // 			case(i%val4===0):
// // 			output+='buo'
// // 			break;
// // 			case (i%val1===0):
// // 			output+='fizzbuzz'
// // 			break;
			
// // 			case (i%val2===0):
// // 			output+='fizz'
// // 			break;
// // 			case(i%val3===0):
// // 			output+='buzz'
// // 			break;
			
// // 			default:output+=i
// // 		}
// // console.log(output)	}
// // }fizzbuzz(15,5,3,7)




// //////////////////////another xexrcises----------///////////////////////
// // const firstMessage = 'I will print!';
// // const secondMessage = 'I will not print!'; 

// // // A do while with a stopping condition that evaluates to false
// // do {
// //  console.log(firstMessage)
// // } while (true === false);

// // // A while loop with a stopping condition that evaluates to false
// // while (true === false){
// //   console.log(secondMessage)
// // };
// // const timeFuncRuntime = funcParameter => {
// //    let t1 = Date.now();
// //    funcParameter();
// //    let t2 = Date.now();
// //    return t2 - t1;
// // }

// // const addOneToOne = () => 1 + 1;

// // timeFuncRuntime(addOneToOne);



// ///----------------------------------------------------//
//  // function iseven(num){
//  // 	return num%2===0
 
//  // }
		
// // function fectorial(num){
// // 	let result =1;
// // 	for(let i=2;i<=num;i++){
// // 		result =result *i;
// // 	}
// // 	return result
// // }

// // console.log(fectorial(4))



// // function kebab(str){
// // 	let nenw= str.replace(/_/g, " i see you")
// // return nenw
// // }kebab('hello_ there ')
// // console.log(kebab('hello_ there '))


// // function num(){

// // 	console.log('hello')
// // }
// // setInterval(num,50)
// // num()


// var todos=[];
// var input=prompt('what yot want tosay')
// while(input!=='quit'){
//   if(input==='list'){
//     listTodo()
//   }else if(input==='new'){
//     newTodo()
//   }else if( input==='delete'){
//     deleteTodo()
//   }
//   input=prompt('what yot want tosay')
 
// }
// console.log('you quit the list')


// function listTodo(){
//   console.log('------------')
//   todos.forEach(function (todo,i){
//     console.log(i+ ': ' +todo)
//   })
// }

// function newTodo(){
//   var todosnew=prompt('what your new')
//   todos.push(todosnew)
//   console.log('add new to the list')
// }
//  function deleteTodo(){
//    var index =prompt('ENTER THE INDEX YOU WANT TO DELETE')
//     todos.splice(index,2)
//     console.log('delet ethe index')
//   }
// ////////////////////todo list which is important////////////
// // var todos =[]
// // var input =prompt('what you want todo')

// // while(input!=='quit'){

// // 	if(input==='list'){
// // 	listTodo()
// // }
// // else if(input==='new'){
// // 	newTodo()
// // }
// // else if(input==='delete'){
// // 	deleteTodo()
// // }
// // var input =prompt('what you want todo')

// // }
// // console.log('you quit');

// // function listTodo(){
	
// // console.log("***************")

// // todos.forEach(function(todo,i){
// // 	console.log( i +": " +todo )
// // })
// // 	console.log("***************")

// // }

// //  function newTodo(){
// //  	var newtodo=prompt('enter new you want')
// // 	todos.push(newtodo)
// // 	console.log('added new to the list')
// //  }
// //  function deleteTodo(){
// //  	var index=prompt('enter index to delete')
// // 	todos.splice(index,1)
// // 	console.log('delete the index you don\'t want')
// //  }
// //////-------------------reverse-------------------------/////////////////////
// // function print(arr){
// // 	for(var i=arr.length-1;i>=0;i--){
// // 		console.log(arr[i])
// // 	}
// // }print([1,8,9,5])

// ///////////////////isuniform-------------------------------//////////////////////
// // function uniform(isuniform){
// // 		let first=isuniform[0]
// // 	for(let i=0;i<isuniform.length;i++){
// // 		if(isuniform[i]!==first){
// // 				return false
// // 		}
// // 	}return true
// // }
// // 			uniform([1,1,1,1])


// ///--------------------summm----------////////////////////////

// // function sumarray(arra){
// // 	let total=0
// // arra.forEach(function(element){
// // 		total+=element;

// // 	});
// // return total
// // }
// // sumarray([2,4,6,9])




// ////////////////max number--------//////////////////
// // function max(arr){
// // 	let maxima=arr[0];
// // 	for(let i=1;i<arr.length;i++){
// // 		if(arr[i]>maxima){
// // 			maxima=arr[i]
// // 		}
// // 	}return maxima
// // }
// // max([2,9,1])

// //////////////////////////////////

// // array.prototype.myForEach=function (func){
// // 	for(let i=0;i<this.length;i++){
// // 		func(this[i])
// // 	}
// // }
// // function (func){
// // 	for (let i=0;i<this.length;i++){
// // 		func(this[i])
// // 	}
// // }
// // var friends =['hoo','hgf','fdf','ddwd']
// // friends.myForEach(alert)

// // function mainmulti(val1,val2,val3){
	
 
// //  	let output
// //  	for (let i=1;i<=101;i++){
// //  		let output=''
// //  		if(i%val1===0){
// //  			output+='zzbuss'

// //  		}
// //  		if(i%val2===0){
// //  			output+='buszs'+''
// //  		}
// //  		if(i%val3===0)
// //  		{
// //  			output+='hoo'
// //  		}
// //  		if(output.length===0){
// // 			output+=i
// //  		}

// //  			console.log(output)
// // 		}

// // } 

// //  mainmulti(2,15,7)
// ///////////////////more method invoking from codecademe//////////////////////-----------------
// // const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// // const nums = [1, 50, 75, 200, 350, 525, 1000];

// // //  Choose a method that will return undefined
// // cities.forEach(city => console.log('Have you visited ' + city + '?'));

// // // Choose a method that will return a new array
// // const longCities = cities.filter(city => city.length > 7);

// // // Choose a method that will return a single value
// // const word = cities.reduce((acc, currVal) => {
// //   return acc + currVal[0]
// // }, "C");

// // console.log(word)

// // // Choose a method that will return a new array
// // const smallerNums = nums.map(num => num - 5);

// // // Choose a method that will return a boolean value
// // nums.some(num => num < 0);


// // let movies=[
// //   {title:'frozen',
// //   watched:true,
// //   rating:5
// // },
// // {
// //   title:'Moode',
// //   watched:false,
// //   rating:4.5,
// // },
// //   {
// //     title:'miami',
// //     watched:true,
// //     rating:3.5
// //   }

// // ]
// // movies.forEach((array)=>{
// // var result="you had "
// // if(array.watched){
// //   result+= " watch "
// // }else{
// //   result+= " no watch ";

// // }
// // result+= "\"" + array.title + "\""  +"-";
// // result+=array.rating +" stars"
// // console.log(result)
// // })

// // var movies=[
// //   { title:'frozen',
// //     hasWatched:true,
// //     rating:5,                
// // },
// //   { 
// //     title:'dood father',
// //     hasWatched:false,
// //     rating:4.5
// //   }
// // ]

// //  let printstring=movie=>{
// //   var result='you had ' 
// //   if(movie.hasWatched){
// //     result+='watch '
// //   }else{
// //     result+='no watch '
// //   }
// //   result+= '\'' +movie.title +'\'' + '\-' +movie.rating + ' stars'
// //  return result
// //  }
// //  movies.forEach(movie=>{
 
// //   console.log(printstring(movie))
// // })

// var movies=[
//   {name:"frozen",
//   hasWatched:true,
//   rating:5

// },{
//   name:"le mezrabel",
//   hasWatched:true,
//   rating:4.5
// },{
//   name:"hello",
// //   hasWatched:false,
//   rating:5
// }
// ] 
// movies.forEach(function (movie){
//   var result="you had "
//   if(movie.hasWatched){

//    result +=" watched "
//   }else{
//     result+=" no watched "
//   }


//  result += movie.name + " and i give it " +movie.rating  + " stars"
// })


// var p=document.querySelector("p");
// let isBlue=false;
// setInterval(
//   function () {
    
//     if(isBlue){
//       p.style.color="blue"
//     }else{
//       p.style.color="pink"
//     }
//     isBlue=!isBlue;
    
//   }
// ,1000)

// var tagp=document.getElementById("first")
// tagp.style.color="red";
// tagp.style.border="10px solid grey"
// tagp.style.background="yellow"
// tagp.style.marginTop="100px"
// tagp.style.fontSize="70px"
// tagp.style.textAlign="center"
// var buutton=document.querySelector("button")
// var isPurple=false;
// buutton.addEventListener("click",function(){
//     if(isPurple){
//         document.body.style.background="white"
      
//     }else{
//         document.body.style.background="purple"
//     }
//     isPurple=! isPurple;

// })
// buutton.addEventListener("click",function(){
//     document.body.classList.toggle("purple")
// })
var p1=document.querySelector("#p1")
var p2=document.getElementById("p2")
var resetButtn=document.querySelector("#reset")
var p1player=document.querySelector("#p1player")
var p2player=document.querySelector("#p2player")
var winningScore=document.querySelector("p span")
var numInput=document.querySelector("input")

var p1score=0;
var p2score=0;
var gameover=false;
var winningPlayer=5;


p1player.addEventListener("click",function(){
    if(!gameover){
        p1score++
        if(p1score===winningPlayer){
            p1.classList.add("winer");
           gameover=true;
        }
        p1.textContent=p1score;
    }
   
})
p2player.addEventListener("click",function(){
    if(!gameover){
        p2score++
        if(p2score===winningPlayer){
            p2.classList.add("winer");
            gameover=true;
        }
        p2.textContent=p2score;
    }
   
})
resetButtn.addEventListener("click",function(){
   reset();
})

function reset(){
    p1score=0;
    p2score=0;
    p1.textContent=0;
    p2.textContent=0;
    p1.classList.remove("winer")
    p2.classList.remove("winer");
    gameover=false;
}
numInput.addEventListener("change",function(){
    winningScore.textContent=numInput.value;
    winningPlayer=Number(numInput.value)
    reset()
})