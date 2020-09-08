

//Display date in header
var today=moment().format("dddd, MMMM Do");
var now =new Date();
document.getElementById("currentDay").innerHTML=today;

//Audit hour
var colorCode = function() {
  if (moment().isAfter(displayDate,'hour')) {
    $(`#schItem${i}`).addClass("past");
  } else if (moment().isBefore(displayDate,'hour')) {
    $(`#schItem${i}`).addClass("future");
  }
    else $(`#schItem${i}`).addClass("present");
    
}
//build time block grid
for (var i=0; i<9; i++){
   var calcHours=i+9;
  var curDay = new Date();
  var calDate = new Date(curDay.getFullYear()+'-'+(curDay.getMonth()+1)+'-'+curDay.getDate() + " " + calcHours +":00");
  var dateCalHour=calDate.getHours();
  var displayDate=moment(calDate,"hA");
  var displayHour=moment(displayDate).format("hA");
  var curHour=moment().format("hA");
 
  $('<div>',{id:`b${i}`}).addClass("row").appendTo($("div.container"))
  $('<div>',{id:`hb${i}`}).addClass("col-1 hour").appendTo($(`#b${+i}`))
  $('<span>',{id:`timeSpan${i}`}).addClass("time").text(displayHour).appendTo($(`#hb${i}`))
  
  $('<div>',{id:`db${i}`}).addClass("col-10 ").appendTo($(`#b${i}`))
  $('<textArea>',{id:`schItem${i}`}).attr("name","item-name").addClass("description overflow-hidden").appendTo($(`#db${i}`))
  colorCode();
  $('<div>',{id:`sb${i}`}).addClass("col-1 saveBtn").appendTo($(`#b${i}`))
  $('<span>',{id:`saveSpan${i}`}).addClass("align-middle").appendTo($(`#sb${i}`))
  $('<i>',{id:`saveIcon${i}`}).addClass("fas fa-save").appendTo($(`#saveSpan${i}`))
}

var list = JSON.parse(localStorage.getItem('todolist')) || [];

// Renders our to-dos to the page
function renderTodos(list) {
    //console.log(list);
  // Iterates over the 'list'
  for (var i = 0; i < list.length; i++) {
    // Creates a new variable 'toDoItem' that will hold a "<textArea>" tag
    // Sets the `list` item's value as text of this <textArea> element
    var toDoItem = $('<textArea>');
    toDoItem.text(list[i]);
    //console.log(toDoItem);
    // Adds 'toDoItem' to the To-Do List div
    $('.description').append(toDoItem); 
  }
}

$('span').on('click','i', function(event) {
    
// Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
 
  var toDoValue= $('textArea').val().trim();
  //console.log(toDoValue);
  // Add the new to-do to our local 'list' variable
  
  list.push(toDoValue);
  // Update the to-dos on the page
  
  renderTodos(list);
  // Save the to-dos into localStorage
  // We need to use JSON.stringify to turn the list from an array into a string
  
  localStorage.setItem('toDoList', JSON.stringify(list));
});

  // Renders our to-dos on page load
  renderTodos(list);