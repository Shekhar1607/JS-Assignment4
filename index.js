/*Q1. Count Characters
You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of 
character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S
*/

function countCharacters() {
    let Alpha1 = 0;
    let Alpha2 = 0;
    let str = "AbaDd"
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            Alpha1++;
        }
        else if (str[i] === "D") {
            Alpha2++;
        }
    }
    return [Alpha1, Alpha2]
}

let countAlphabets = countCharacters();
console.log(countAlphabets);

/*Q2. Count the Heads
Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how 
many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds 
out the count of characters that occur more than once in the string.
*/

function countHead(str) {
    const arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        const currentChar = arr[i];
        let count = 0;
        let counted = false;

        for (let k = 0; k < i; k++) {
            if (arr[k] === currentChar) {
                counted = true;
                break;
            }
        }
        if (counted) continue;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === currentChar) {
                count++;
            }
        }
        if (count > 1) {
            console.log(`${currentChar}: ${count}`);
        }
    }
    return 
}
countHead("prepbytes");

/*Q3. Count the Vowels
You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
given string
*/

function countvowels(){
  let str= 'prepbytes';
  let arr=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  count =0;

  for(items in str){
    let letter= str[items];

    for(things in arr){
        let vowels=arr[things];

        if (letter=== vowels){
            count++;
        }
    }
  }
  return count;
 
}

console.log(countvowels());

/*Q4. Concatenate the Strings
You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
concatenation of both the given strings. 
*/

function concate(){
    let str= 'Shekhar '
    let str1= 'Sharma'

    let result= str.concat(str1);
    return result;
}
console.log(concate());


/*Q5. Find Length
You are given a string S, and your task is to return the length of the string S.
*/

function findlength(str) {
    return str.length;
}
console.log(findlength("Welcome in JS"));

/*Q6. Find the Winner
You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
player wins the maximum number of games or there is a draw between them.
*/

function findWinner() {
    let str = "ADDDAADDAADDAAADDAAA"
    let count = 0
    let count2 = 0
    for (win in str) {
        if (str[win] === "A") {
            count++;
        }
        else if (str[win] === "D") {
            count2++;
        }
    }
    if (count > count2) {
        console.log("Aditya is winner!")
    }
    else if (count < count2) {
        console.log("Danish is winner!")
    }
    else {
        console.log("Match Draw!")
    }
    return
}
findWinner();

/*Q7. Join Strings
You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
*/

function joinStrings(str,str1) {
    let result= str.concat(str1)
    return result;
}

console.log(joinStrings("PrepBytes", "Technologies"))

/*Q8. Plaindrome Check
You are given a string S, Your task is to check wether the given string is a Palindrome or not.
A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
both upppercase lowercase letters
*/

function Plaindrome(){
   
        let str = "naman"
        let reverse = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }
        if (str === reverse)
            console.log("String is palindrome");
        else
            console.log("String is not palindrome");
    
        return
    }
    Plaindrome();

/*Q9. Reverse the String
You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters.
*/

function reversestr(){
    let str= "i like JavaScript"
    let reverse = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str.charAt(i);
    }
    return reverse;
}
console.log(reversestr())

/*Q10. Match the Strings
You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO
*/

function String_Match(){
    str1= "hello world"
    str2= "hello world"

    if(str1===str2){
        console.log("Yes")
    }
    else{
        console.log("No");
        
    }
    return
}
String_Match();


/* Q.11 You are given a string S, along with a pattern string and a text string.
You need to repalce the pattern string in S to the text string. */

function replaceStr() {
    let str = "Hey! I am You."
    let pattern = "I am You."
    let text = "You Prepbytes"
    str.replace(pattern, text)
    return str.replace(pattern, text)
}
console.log(replaceStr());


/* Q.12 You are given a string S, Your task is to split the string with 
respect to spaces. */

function Split_the_String() {
    let str = "I am utkarsh raj"
    
    return str.split(" ")
}
console.log(Split_the_String());


/* Q.13 You are given a string S containing both uppercase and lowercase 
letters. You need to find out the number of vowels and the number of consonants 
in the given string. */

function vowelsConsonents_count() {
    let str = "Prepbytes"
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowels = 0
    let constant = 0
    for (let item of str) {
        if (arr.includes(item)) {
            vowels++;
        }
        else if (item.toLowerCase() >= 'a' && item.toLowerCase() <= 'z') {
            constant++;
        }
    }
    return [vowels, constant];
}
console.log(vowelsConsonents_count());