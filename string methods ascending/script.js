const newArr=[]
function getAscending(){
    var s= '26y7 7r23 89b 23d5';
    var arr = s.split(' ')
    for(var i=0;i<arr.length;i++){
       var ind = arr[i].search(/[a-zA-Z]/)
       var ch = arr[i].charAt(ind)
       var n = arr[i].replace(ch,'')
       newArr.push({[ch]:n})
    }
    newArr.sort(function(a,b){
     if(Object.keys(a)<Object.keys(b)) return -1
     if(Object.keys(a)>Object.keys(b)) return 1
    })
    newArr.map((item)=>{
     Object.values(item).map((i)=>{
         return document.getElementById('display').innerHTML+=i+' '
     })
    })
}