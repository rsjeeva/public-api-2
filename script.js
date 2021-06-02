
function holiday(event){

    event.preventDefault();
    var c_name = document.getElementById('cntry');
    var country_name = c_name.value.toUpperCase();
    console.log(country_name);
    get_holiday(country_name);
    
}


async function get_holiday(country_name){

    var rest_country_url = 'https://restcountries.eu/rest/v2/all';
    // var holiday_api ='fad995d0-6c44-477b-8393-a7d04f85ca98';
    var holiday_url ='https://holidayapi.com/v1/holidays?pretty&key=fad995d0-6c44-477b-8393-a7d04f85ca98&year=2020&country=';

    var res = await fetch(rest_country_url);
    var data = await res.json();
    // console.log(data);

    var alpha_code ='';

    var i=0;
    for(i=0;i<250;i++)
    {
        if(data[i].name.toUpperCase() === country_name)
        {
            alpha_code = data[i].alpha2Code;
        }
    }

    console.log(alpha_code);

    var dummy_url = holiday_url+alpha_code;
    holiday_url = dummy_url;
    var res1 = await fetch(holiday_url);
    console.log(res1);
    var data1 = await res1.json();
    console.log(data1);

    display_result(data1);
}


var table_body = document.getElementById('t_body');
var tbl  = document.getElementById('tbl');
var i=0;
var tr1=[], td1=[], td2=[];

createele();

function createele(){
    for(i=0;i<15;i++)
    {
        tr1[i]=document.createElement('tr');
        td1[i] = document.createElement('td');
        td2[i] = document.createElement('td');
    }
}

function display_result(data)
{

    for(i=0;i<15;i++)
    {
        td1[i].innerHTML=data.holidays[i].name;
        td2[i].innerHTML=data.holidays[i].date;
        tr1[i].append(td1[i],td2[i]);
        table_body.append(tr1[i]);
    }

     tbl.append(table_body);
    }




//AIzaSyBKTf20Wbp_J7cZr8lAGXN6wZUK2N-WUC8

//fad995d0-6c44-477b-8393-a7d04f85ca98 - calendar api