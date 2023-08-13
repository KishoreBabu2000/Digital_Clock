function clock24Hours()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mon=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    if(mon==0)
    {
        mon="JAN"
    }
    else if(mon==1)
    {
        mon="FEB"
    }
    else if(mon==2)
    {
        mon="MAR"
    }
    else if(mon==3)
    {
        mon="APR"
    }
    else if(mon==4)
    {
        mon="MAY"
    }
    else if(mon==5)
    {
        mon="JUN"
    }
    else if(mon==6)
    {
        mon="JUL"
    }
    else if(mon==7)
    {
        mon="AUG"
    }
    else if(mon==8)
    {
        mon="SEP"
    }
    else if(mon==9)
    {
        mon="OCT"
    }
    else if(mon==10)
    {
        mon="NOV"
    }
    else
    {
        mon="DEC"
    }
    switch(day)
    {
        case 0:day="SUNDAY";
        break;
        case 1:day="MONDAY";
        break;
        case 2:day="TUESDAY";
        break;
        case 3:day="WEDNESDAY";
        break;
        case 4:day="THURSDAY";
        break;
        case 5:day="FRIDAY";
        break;
        case 6:day="SATURDAY";
        break;
    }
    document.getElementById("Time1").innerHTML=`${hh}:${mm}`
    document.getElementById("Date1").innerHTML=`${dd}/${mon}/${yy}`
    document.getElementById("Day1").innerHTML=`${day}`
    document.getElementById("Seconds1").innerHTML=`${ss}`
    var SetTime=setTimeout(clock24Hours,1000);
}
clock24Hours()



function clock12Hours()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mon=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    if(mon==0)
    {
        mon="JAN"
    }
    else if(mon==1)
    {
        mon="FEB"
    }
    else if(mon==2)
    {
        mon="MAR"
    }
    else if(mon==3)
    {
        mon="APR"
    }
    else if(mon==4)
    {
        mon="MAY"
    }
    else if(mon==5)
    {
        mon="JUN"
    }
    else if(mon==6)
    {
        mon="JUL"
    }
    else if(mon==7)
    {
        mon="AUG"
    }
    else if(mon==8)
    {
        mon="SEP"
    }
    else if(mon==9)
    {
        mon="OCT"
    }
    else if(mon==10)
    {
        mon="NOV"
    }
    else
    {
        mon="DEC"
    }
    switch(day)
    {
        case 0:day="SUNDAY";
        break;
        case 1:day="MONDAY";
        break;
        case 2:day="TUESDAY";
        break;
        case 3:day="WEDNESDAY";
        break;
        case 4:day="THURSDAY";
        break;
        case 5:day="FRIDAY";
        break;
        case 6:day="SATURDAY";
        break;
    }
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM";
        if(hh>=13)
        {
            hh-=12;
        }
    }
    document.getElementById("Time2").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("Date2").innerHTML=`${dd}/${mon}/${yy}`
    document.getElementById("Day2").innerHTML=`${day}`
    document.getElementById("Seconds2").innerHTML=`${ss}`
    var SetTime=setTimeout(clock12Hours,1000);
}




function changeFormat(status)
{
    if(status=="12 Hours Format")
    {
    document.getElementById("But").value="24 Hours Format";
    document.getElementById("Container24").style.display="none";
    document.getElementById("Container12").style.display="flex";
    clock12Hours()
    }
    else
    {
    document.getElementById("But").value="12 Hours Format";
    document.getElementById("Container24").style.display="flex";
    document.getElementById("Container12").style.display="none";
    clock24Hours()
    }
}