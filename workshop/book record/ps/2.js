$(document).ready( function () {
 var b1=$("#b1"); 
var course=$("#resultlists");
$("#errormsg").hide();
$("#logout").hide();
$("#results").hide();
course.hide();
 b1.on("click", function() {
  course.toggle(300);
  if(b1.text()=="show")
  b1.text("hide");
  else
  b1.text("show");
 });

var mycourse=[     
     {sno:"1",title:"c language ", price:459 },
     {sno:"2",title:"c++ ", price:159 },
     {sno:"3",title:"sql ", price:259 },
     {sno:"4",title:"DS ", price:359 },
     {sno:"5",title:"html", price:459 },
     {sno:"6",title:"javascript ", price:559 },
     {sno:"7",title:"jquery", price:659 },
     {sno:"8",title:"css", price:4759 }
];  
course.empty();
 $.each(mycourse, function (i, data)
 {
          var adding=$("<div id='id1'>"+
          "<div id='titleid'>"+" sno : "+data.sno + "</div>"    +
          "<div >"+" title : "+data.title + "</div>" +
          "<div>"+" price : "+data.price + "</div>" 
          +"</div>");
          course.append(adding);
            
    adding.hover(
     function() {
      $(this).css("background-color","lightpink");
      console.log("IN");
     }, 
  
     function () {
      $(this).css("background-color","transparent");
     }
     );

 }  );

 
 });
 function f1()
 {

 return false;
 }
 $("#o1").on("click", function()
 {
      var i1=document.getElementById("p1").value;
      var i2=document.getElementById("p2").value;
      var t1=i1.length;
      var t2=i2.length;
      if(t1&&t2)
      {
          $("#errormsg").hide();
          $("#pop").hide();
          $("#logout").show();
          $("#results").show();
          $("#resultlists").show();
      }
      else
      {
          $("#errormsg").show();
          $("#f1").show();
      }
 }
 );

$("#logout").on("click", function() {
     $("#errormsg").hide();
     $("#pop").show();
     $("#logout").hide();
     $("#results").hide();
       
});
