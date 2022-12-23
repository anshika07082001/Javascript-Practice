// ---------------- Leetcode problem 1 Completed -------------------

// const nums=[4,6,5,3,2,9]
// var target = 9;
// function clickHandler(){
//     for(var i=0;i<=nums.length;i++){
//         for(var j=i+1;j<=nums.length;j++){
//            console.log(nums[i]+nums[j]) 
//             if(nums[i]+nums[j]==target){
//                 console.log([i,i+1])
//             }
//         }
//     }
// }


// ---------------------------- Leetcode Problem 2  -------------------------
// var b='hfgdufgfhfh'

// function clickHandler(){
//     console.log(l1.length,l2.length)
//     if(l1.length>l2.length){
//         for(var i=0;i<=l1.length;i++){

//         }
//     }
//     else{
//         for(var j=0;j<=l2.length;j++){

//         }
//     }
// }



// ------------------------- Leetcode Problem 3 -------------------------


// var b='pwwkew', a='', arr=[]

// function clickHandler(){
//     for(var i=0;i<=b.length;i++){
//         for(var j=i+1;j<=b.length;j++){
//             if(b[i]!==b[j]){
//                 a.concat(b[i],b[j])
//                 arr.push(a)
//             }
//         }
//     }
// }

// ------------------ Leetcode 4. Median of Two Sorted Arrays Completed -------------------

// function clickHandler(){
//     var num1=[3], num2=[-1,-2], median ='',n=''
//     num1=num1.concat(num2)
//     num1.sort((a,b)=>a-b)
//     if(num1.length%2==0){
//         n=num1.length/2
//         median=(num1[n-1]+num1[n])/2
//     }
//     else{
//         n=(num1.length+1)/2
//        median = num1[n-1]
//     }
//     console.log(median)
// }


// function prints the string based on users input length  Completed

// function clickHandler(){
//     var str = 'Anshika chaurasiya 123',arr='',len=10
//     for(var i=0;i<len;i++){
//         arr += str.charAt(i)
//     }
//     console.log(arr)
// }


//  function prints the some part of emailid  Completed

// function clickHandler(){
//     var str='ashasha1212@gdh.sdsd',a='....',string=''
//     var ind = str.search('@')  
//     var last =str.slice(ind) 
//     var Str = str.substring(0,3)
//     string = string.concat(Str,a,last)    
//     console.log(string)
// }


//  ----------- LeetCode 5. Longest Palindromic Substring ---------------

// function clickHandler(){
//     var str='babad',start='',rev='',s='',e='',arr=[],newArr=[]
//     for(var i=0;i<=str.length;i++){
//         for(var j=i+1;j<=str.length;j++){
//             s= str.slice(i,j)
//             start=s;
//             s= s.split('');
//             s=s.reverse();
//             rev=s.join('');
//             if(start==rev){
//                 e=rev
//                 arr.push(e)
//             }
//         }
//     }
//     for(var i=0;i<arr.length;i++){
//         len=arr[i].length;
//         let obj = {char:arr[i],len:len}
//         newArr.push(obj)
//     }
//     arr=newArr.sort((a,b)=>{
//        return b.len-a.len
//     })
//     console.log(arr[0].char)
// }


// ---------- leetcode 9. Palindrome Number ---------------------------

// function clickHandler(){
//     x=128981;
//     x=x.toString()
//     start =x
//     arr = x.split('')
//     x=arr.reverse()
//     x=x.join('')
//     if(start==x){
//         console.log('plaindrome')
//     }
//     else{
//         console.log('not palindrone')
//     }
// }



//  ------------ leetcode 13. Roman to Integer ----------

// function clickHandler(){
//     var obj={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
//     s = 'MMMCMXCIII'.split('');
//     let curr=0;
//     s.map((x,i)=>{
//         if(i!=0){
//             if(obj[s[i-1]]<obj[x]){
//                 curr+=obj[x]-obj[s[i-1]]*2
//             }
//             else{
//                 curr+=obj[x]
//             }
//         }
//         else{
//             curr=curr+obj[x]
//         }
//     })
//     console.log(curr)
// }


// -------------leetcode ----------------

// function clickHandler(){
//     var arr =["allow","all","along"],splitArr=[]
//     for(var i=0;i<arr.length;i++){
//         console.log(arr[i])
//         splitArr.push(arr[i].split(''))
//     }
//     console.log(splitArr)
// }



// function clickHandler(){
//     var str='dfdASjsdsAdajASa';
//     for(var i=0;i<str.length;i++){
//         if(str[i]==str[i].toUpperCase()){
//             str[i].charAt(i).toLowerCase()
//             console.log(str)
//         }
//         else{
//             str[i]
//             console.log('upper',str)
//         }
//     }
//     console.log(str)
// }


function clickHandler(){
    var str = 'jdhsdbdsaeqeasas',splitArr,set,count=0,obj={},countArr=[]
    splitArr = str.split('')
    set = new Set(splitArr)
    console.log(set)
    console.log(set)
    Object.keys(set).map((item,i)=>{
        alert('item')
    })
    // for(var i=0;i<=set.length;i++){
    //     alert()
    //     if(str.includes(splitArr[i])){
    //         count+=1
    //         obj={char:splitArr[i],count:count}
    //     }
    // }
    console.log(countArr)
}