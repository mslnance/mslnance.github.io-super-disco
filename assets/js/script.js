//Display date in header
var today=moment().format("dddd, MMMM Do");
var now =new Date();
document.getElementById("currentDay").innerHTML=today;
var colorCode = function() {
  if (moment().isAfter(displayDate,'hour')) {
    $(`#schItem${i}`).addClass("past");
  } else if (moment().isBefore(displayDate,'hour')) {
    $(`#schItem${i}`).addClass("future");
  }
    else $(`#schItem${i}`).addClass("present");
    
}
//build grid
for (var i=9; i<24; i++){
  var curDay = new Date();
  var calDate = new Date(curDay.getFullYear()+'-'+(curDay.getMonth()+1)+'-'+curDay.getDate() + " " + i +":00");
  var dateCalHour=calDate.getHours();
  var displayDate=moment(calDate,"hA");
  var displayHour=moment(displayDate).format("hA");
  var curHour=moment().format("hA");
  console.log(curHour);
  console.log(displayHour);
  console.log(moment());
  console.log(displayDate);
  $('<div>',{id:`b${i}`}).addClass("row").appendTo($("div.container"))
  $('<div>',{id:`hb${i}`}).addClass("col-1 hour").appendTo($(`#b${+i}`))
  $('<span>',{id:`timeSpan${i}`}).addClass("time").text(displayHour).appendTo($(`#hb${i}`))
  
  $('<div>',{id:`db${i}`}).addClass("col-10 description").appendTo($(`#b${i}`))
  $('<textArea>',{id:`schItem${i}`}).addClass("overflow-hidden").appendTo($(`#db${i}`))
  colorCode();
  $('<div>',{id:`sb${i}`}).addClass("col-1 saveBtn").appendTo($(`#b${i}`))
  $('<span>',{id:`saveSpan${i}`}).addClass("align-middle").appendTo($(`#sb${i}`))
  $('<i>',{id:`saveIcon${i}`}).addClass("fas fa-save").appendTo($(`#saveSpan${i}`))
}



 
 /*
  $('<textarea>').each(function() {
    if (dateCalHour<curHour) {
      $(this).addClass("past");
    } 
    else if (dateCalHour>curHour) {
      $(this).addClass("future");
    }
    else if (dateCalHour===curHour) {
      $(this).addClass("present");
    }
  };*/

/*
var timeEl = document.querySelector(".hour");

var createEvents = function(eventText,eventTime) {
  // create elements that make up a task item
  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);

  // check due date
  auditTask(taskLi);

  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};

//display Current Day


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
    var setTime=timeEl.setAttribute("textContent",curHour);
    console.log(setTime)
  });

});

var loadEvents = function() {
  events = JSON.parse(localStorage.getItem("events"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!events) {
    events = []
  }
  // loop over object properties
  $.each(events, function(arr) {
    // then loop over sub-array
    arr.forEach(function(events) {
      createEvents(event.text, event.time);
    });
  });
};

var saveEvents = function() {
  localStorage.setItem("events", JSON.stringify(events));
};

// save button in modal was clicked
$(".saveBtn").click(function(calHour) {
  // get form values
  var eventText = $("textarea").val();
  var eventTime = calHour;

  if (eventText && eventTime) {
    createEvents(eventText, eventTime);

    
    // save in tasks array
    events.toDo.push({
      text: eventText,
      date: eventTime
    });

    saveEvents();
  }
});


$("div").on("click", "i", function() {
  console.log("<i> was clicked");
  saveEvents();
});
*/



