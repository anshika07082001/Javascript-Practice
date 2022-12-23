let str='Hellohsds Worldds123 56sewewderferere7,dghdsdsd'
var len='',obj={},lenArr=[]
function longestLength(){
    let a = str.split(' ')
    for(var i=0;i<a.length;i++){
        len=a[i].length;
        obj ={str:a[i],length:len};
        lenArr.push(obj)
    }
    let sort = lenArr.sort((a,b)=>{
        return b.length-a.length
    })
    document.getElementById('display').innerHTML=sort[0].str;
}