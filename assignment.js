
// kiloMeterToMeter Convarte
function kiloMeterToMeter(n) {
    if(n <= 0){
        return "Plase giv number";
    }
    else{
        var meter = n * 1000;
    return meter;
    }
}


kiloMeterToMeter(10);
//console.log(kiloMeterToMeter(10));

//end off meter convart



// start budgetcalculatro 

function budgetCalculator(watch, phone, laptop) {
  
    function watch1(params) {
        if (watch<=0){ return "this not a number "} 
        else{ var watchrate= watch*50; };
        return watchrate;
    }

    function phone1(params) {
         if (phone<=0) { return " this not a number "} else{var phonerate = phone*100;};
         return phonerate;
     }

     function laptop1(params) {
        if (laptop<=0) { return " this not a number"} else{var laptoprate = laptop*500;};
        return laptoprate;
    }

var addwatch= watch1();
var addphone = phone1();
var addlaptop = laptop1();
return totalprice =addwatch + addphone + addlaptop;

}
 
budgetCalculator(10,5,1);
//console.log(budgetCalculator(10,5,1));


// End of budgetCalculator


// start hotelCost

function hotelCost(day) {

        if(day<=0){
            return 0;
        }
        else if (day <=10) {

            var first = day;
            var fristCost = first * 100;
            return fristCost;
            }
    
        else if(day<=20) {
    
                var second= day-10 ;
                var secondCost =second*80 + 1000;
    
                return secondCost;
                } 
    
        else{   
                var thard= day-20 ;
                var thaerdCost =thard*50 + 1800;
                return thaerdCost;
            }              
 
            
    }

hotelCost(40);
//console.log(hotelCost(40));
// hotelcost end



//big megafrind

function megaFriend(word){
    
    var longStr = word[0].length;

    for(var i = 0; i < word.length; i++){
        var element = word[i].length;
    if (element > longStr) {
    longStr = word[i];
    }
    }
    return longStr;
    }

    //end mega friend
    var str =['hello', 'bangladesh', 'this','etc']
    megaFriend(str);
    //console.log(megaFriend(str));
