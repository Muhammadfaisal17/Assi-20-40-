                                                //STRING METHODS
                                               //Assignment # 21-25
 //Q:1 
// var firstName = prompt("Enter your first name")
// var secondName = prompt("Enter your second name")
// var fullName = firstName+" "+secondName
// alert(fullName)                                            

// //Q:2
// var phoneModel = prompt("Enter your favourite mobile phone model")
// var stringLength = phoneModel.length
// document.write("My favorite phone is:"+phoneModel)
// document.write("<br>")
// document.write("Length of string: "+stringLength)

// //Q3:
// var word = "Pakistani"
// var wordIndex = word.indexOf("n")
// document.write("String: "+word)
// document.write("<br>")
// document.write("Index of 'n': "+wordIndex)

//Q:4
// var word1 = "Hello World"
// var lastIndex = word1.lastIndexOf("l")
// document.write("String: "+word1)
// document.write("<br>")
// document.write("Last index of 'l': "+lastIndex)

// //Q5:
// var word3 = "Pakistani"
// var findCharacIndex = word3.charAt(3)
// document.write("String: "+word3)
// document.write("<br>")
// document.write("Character at index 3: "+findCharacIndex)

//Q6: Method not learned

// //Q7:
// var cityName = "Hyderabad"
// var replaceCityName = cityName.replace("Hyder","Islam")
// document.write("City: "+cityName)
// document.write("<br>") 
// document.write("After replacement: "+replaceCityName) 

// //Q8:
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replaceWord = message.replaceAll("and","&")
// document.write("Old message (and): "+message)
// document.write("<br>")
// document.write("New message (&): "+replaceWord)

//Q9:
// var stringNumber = "472"
// var stringToNumber = Number(stringNumber)
// document.write("Value: "+stringNumber)
// document.write("<br>")
// document.write("Type: "+typeof(stringNumber))
// document.write("<br>")
// document.write("value: "+stringToNumber)
// document.write("<br>")
// document.write("Type: "+typeof(stringToNumber))

// //Q10:
// var foodName = prompt("Enter a FOOD name Hint: (peanuts)")
// var nameToUpperCase = foodName.toUpperCase()
// document.write("User input: "+foodName)
// document.write("<br>")
// document.write("Upper case: "+nameToUpperCase)

//Q:11
// var Js = prompt("Write a javascript name (All letters of word  must be in small Letters!)")
// document.write("User input: "+Js)
// document.write("<br>")
// document.write("Title case: "+Js.slice(0,1).toUpperCase()+Js.slice(1).toLowerCase())

//Q12:
// var matchFound = "No"
// var num =  35.36
// var numToString = num.toString()
// for (var i = 0; i<numToString ;i++)
// if(numToString[i]==="."){
//     var numToString1 = numToString.replace(".","")
//     matchFound = "Yes"
// break;
// }
// if (matchFound === "No")
// {
//     document.write("Result is incorrect")
// }
// document.write("Number: "+num)
// document.write("<br>")
// document.write("Result: "+numToString1)

//Q13:
// var matchFound1 = "No"
// var userName = prompt("Enter a username")
// for(var i = 0 ; i<userName.length ; i++ )
// if(userName[i] ==="!" ){
//     alert("please enter a valid password")
//     matchFound1 = "Yes"
//     break
// }
//     else if(userName[i] ==="," ){
//         alert("please enter a valid password")
//     matchFound1 = "Yes"
        
//         break
//     }
        
//         else if(userName[i] ==="." )
//         {
//             alert("please enter a valid password")
//     matchFound1 = "Yes"
            
//             break
//         }
//             else if(userName[i] ==="@" ){
//                 alert("please enter a valid password")
//                 matchFound1 = "Yes"
   
//     break
// }
//     if( matchFound1 === "No"){
//     alert("Correct Username!")
// }

//Q14:
// var matchFound3 = "No"
// var items = ["cake","apple pie","cookie","chips","patties"]
// var checkItems = prompt("Enter a item name").toLowerCase()
// for(var i=0; i<items.length ;i++)
// if(items[i]===checkItems){
//    var itemsf = i
//     document.write(checkItems+" is available at index "+itemsf+" in our backery")
//     matchFound3 = "Yes"
//     break;
// }
// if( matchFound3 === "No"){
//     alert("We are sorry. "+checkItems+" is not available in our backery")
// }


// alert(String.fromCharCode(65));

//Q17:
// var countryName = prompt("Enter your Country Name")
// var findLastCharacter = countryName.charAt(countryName.length-1)
// document.write("User input: "+countryName)
// document.write("<br>")
// document.write("Last character of input: "+findLastCharacter)

                                                      
                                                    //MATH METHODS
                                                     //Assignment # 26-30
//Q1:
// var numberInteger = Number(prompt("Enter a postive integer"))
// document.write("number: "+numberInteger)
// document.write("<br>")
// document.write("round off value: "+Math.round(numberInteger))
// document.write("<br>")
// document.write("floor value: "+Math.floor(numberInteger))
// document.write("<br>")
// document.write("ceil value: "+Math.ceil(numberInteger))

//Q2:
// var numberFloating = Number(prompt("Enter a postive integer"))
// document.write("number: "+numberFloating)
// document.write("<br>")
// document.write("round off value: "+Math.round(numberFloating))
// document.write("<br>")
// document.write("floor value: "+Math.floor(numberFloating))
// document.write("<br>")
// document.write("ceil value: "+Math.ceil(numberFloating))

//Q3:
// var matchFound4 ="No"
// var num = (prompt("Enter a number positive or negative integer"))
// for (var i =0 ; i<num.length ; i++)
// if(num[i] === "-"){
// var absoluteNumber = num.replace("-","")
// document.write("The absolute value of "+num+"is "+Number(absoluteNumber))
// matchFound4 = "yes"
// break
// }
// if(matchFound4 ==="No"){
//     document.write("The absolute value of "+num+"is "+num)
// }

//Q4:
// var randomNumber = Math.random()
// var randomSecretNumber1 = Math.ceil(randomNumber*1)*2+2
// var randomSecretNumber2 = Math.ceil(randomNumber*1)*2+4
// document.write("random dice value: "+randomSecretNumber1)
// document.write("<br>")
// document.write("random dice value: "+randomSecretNumber2)


//Q5:
// var randomNumber = Math.random()
// var ans = Math.ceil(randomNumber*2)
// if(ans === 2){
//     alert(ans+"\n"+"random coin value: Heads")
// }
// else if(ans === 1)
// {
//     alert(ans+"\n"+"random coin value: Tails")

// }

//Q6
// var randomNumber = Math.random()
// var ans = Math.ceil(randomNumber*100)
// document.write("random number between 1 and 100: "+ans)

// //Q7:
// var num = parseInt(prompt("Enter your weight in Kilograms"))
// alert("The weight of user is "+num+" Kilograms")

//Q8:
// var randomNumber = Math.random()
// var randomSecretNumber = Math.ceil(randomNumber*10)
// var inputNumber = Number(prompt("Enter a number b/w 1 and 10"))
// if(randomSecretNumber === inputNumber){
//     alert("Congratulation the user")
// }
// else
// {
//     alert("Try again!")
// }

                                                 //DATE METHODS
                                                 //Assignment # 31-34
                        
// //Q1:
// var currentDateTime = new Date()
// document.write(currentDateTime)                                                 

//Q2:
// var monthName = ["january", "feburary", "march", "april", "may", "june", "july","august","september", "october","november","december"]
// var rightNow = new Date()
// var theMonth = rightNow.getMonth()
// var currentMonth = monthName[theMonth]
// alert("Current month: "+currentMonth)

// //Q3:
// var daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var rightNow = new Date()
// var theDay = rightNow.getDay()
// var TodayDays = daysName[theDay]
// var letter3Day = TodayDays.slice(0,3)
// document.write("Today is "+letter3Day)

//Q4:
//  var daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var rightNow = new Date()
// var theDay1 = rightNow.getDay()
// var TodayDays = daysName[theDay1]
// if(TodayDays === "saturday"|| "sunday")
// {
//     alert("It’s Fun day")
// }

//Q5:
// var dateTime = new Date()
// var currentDate =dateTime.getDate()
// if(currentDate< 16){
//     alert("First fifteen days of the month")
// }
// else
// {
//     alert("Last days of the month")
// }

//Q5:
// var dateTime = new Date()
// var currentDate =dateTime.setDate(15)
// console.log(dateTime)
// if(currentDate< 16){
//     alert("First fifteen days of the month")
// }
// else
// {
//     alert("Last days of the month")
// }

//Q6:
// var date = new Date()
// alert(date)
// var Time = date.getTime()
// alert(Time)

//Q7:
// var d = new Date()
// var hours = d.getUTCHours()
// alert(hours)
// if( hours<12){
//     alert("It's AM")
// }
// else if(hours>12 && hours<=23 )
// {
//     alert("It's PM")
// }

//Q:8
// var a = new Date()
// var n = a.setFullYear(2020, 11, 31)
// alert(a)