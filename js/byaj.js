
  $(document).ready(function(){
   $("input").click(function(){
    $("#interest,#total,#year,#month,#day").css("border","");
    $("#submit").attr('value','CALCULATE');
   });
   $("#year1").keyup(function(){
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    if (year1>3000 || year1<2050) {
      $("#year1").addClass("is-invalid");
    }
    else{
      $("#year1").removeClass("is-invalid");
    }
   });
   $("#month1").keyup(function(){
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    if (month1>12 || month1<1) {
      $("#month1").addClass("is-invalid");
    }
    else{
      $("#month1").removeClass("is-invalid");
    }
   });
   $("#day1").keyup(function(){
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    if (day1>32 || day1<1) {
      $("#day1").addClass("is-invalid");
    }
    else{
      $("#day1").removeClass("is-invalid");
    }
   });
   $("#year2").keyup(function(){
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    if (year2>3000 || year2<2050) {
      $("#year2").addClass("is-invalid");
    }
    else{
      $("#year2").removeClass("is-invalid");
    }
   });
   $("#month2").keyup(function(){
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    if (month2>12 || month2<1) {
      $("#month2").addClass("is-invalid");
    }
    else{
      $("#month2").removeClass("is-invalid");
    }
   });
   $("#day2").keyup(function(){
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    if (day2>32 || day2<1) {
      $("#day2").addClass("is-invalid");
    }
    else{
      $("#day2").removeClass("is-invalid");
    }
   });
  $("#submit").click(function (){
    if ($("#year1,#month1,#day1,#year2,#month2,#day2").hasClass("is-invalid")) {
     
    }
    else{
     $("#year,#month,#day,#total,#interest").css("border","2px solid green");
    var principle=$("#principle").val();
    var rate=$("#rate").val();
    var year1=$("#year1").val();
    var month1=$("#month1").val();
    var day1=$("#day1").val();
    var year2=$("#year2").val();
    var month2=$("#month2").val();
    var day2=$("#day2").val();
    var t1=(year1*360)+month1*30+day1*1;
    var t2=(year2*360)+(month2*30)+ day2*1;
    var t3=t1-t2;
    var yr=t3/360;
    var year=Math.floor(yr);
    $("#year").val(year);
    var mt=(yr-year)*12;
    var month=Math.floor(mt);
    $("#month").val(month);
    var day=(mt-month)*30;
    day=Math.round(day);
    $("#day").val(day);
    var t=(month/12)+(day/360);
      
    rate=rate*12;
    ciy= (1+rate/100);
    var pow= Math.pow(ciy,year);
    var total=principle*pow*(1+(t*rate/100));
    total= Math.round(total);
    interest=total-principle;
    $("#total").val(total);
    $("#interest").val(interest);
    $("#submit").attr('value','CALCULATED');
    }
  
   });
       

      
      
      
      
      
 });
     
