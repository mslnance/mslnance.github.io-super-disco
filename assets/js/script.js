//display Current Day
var today=moment().format("dddd, MMMM Do");
var now =new Date();
document.getElementById("currentDay").innerHTML=today;


var curHour=moment().format("hA");
console.log(curHour)

//var textEl = document.querySelector("textarea");
//var textIdEl=textEl.getAttribute("id");
var spanEl = document.querySelector("span");

// loop over object properties
$('.hour').each(function(index,obj) {
  // then loop over sub-array
  
  var calHour=$(obj).find("span").text().trim();
  var calDate = new Date("2020-09-06 " + calHour);
  var dateCalHour=calDate.getHours();
  
  var dateCurHour=now.getHours();
  //console.log(calDate)
  console.log(dateCurHour );
  console.log(dateCalHour );
  $('textarea').each(function() {
    if (dateCalHour<dateCurHour) {
        
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } 
    else if (dateCalHour>dateCurHour) {
      
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
    else if (dateCalHour===dateCurHour) {
      
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }
 
  });
});



//var calHour=$(".hour").find("span").text().trim();
//console.log(calHour)

var auditTask = function(taskEl) {
  // get date from task element
  var date = $(taskEl).find("span").text().trim();

  // convert to moment object at 5:00pm
  var time = moment(date, "L").set("hour", 17);

  // remove any old classes from element
  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-danger");
  } 
  else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  }
  console.log(taskEl)
};
