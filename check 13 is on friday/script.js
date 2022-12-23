
const months =['January','February','March','April','May','June','July','August','September','October','November','December'];
var date='',day=''

function get(){
    var start = document.getElementById('startMonth').value;
    var end = document.getElementById('endMonth').value;
    if(start.match('^((?!(0))[0-9]{4})$') && end.match('^((?!(0))[0-9]{4})$')){
        for(var j=start;j<=end;j++){
            for(var i=0;i<=months.length;i++){
                if(months[i]){
                    date=new Date(`${j}-${(months[i])}-13`)
                    day= date.getDay();
                    if(day==5){
                        document.getElementById('display').innerHTML+=date+"<br/><br/>"
                    }
                }
            }
        }
    }
}