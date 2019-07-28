var parseddata;
$.ajax({ 
  url:'https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/assignments/data/books.json',
type:'GET',
    datatype : 'json',
    success: function(data) {
      parseddata=  JSON.parse(data);
    }
  })

function btnclicked(){
      $("tbody").html("");
        var userinput = $("#input1").val();

        for (var i = 0; i < parseddata.length; i++){ 
          if (userinput.toLowerCase()  == (parseddata[i].language).toLowerCase()) {
          $("tbody").append("<tr><td>" + parseddata[i].author + "</td><td>" +  parseddata[i].country + "</td><td>" +
            parseddata[i].imageLink +  "</td><td>" +  parseddata[i].language + "</td><td>" +  parseddata[i].link +
            "</td><td>" +  parseddata[i].pages + "</td><td>" +  parseddata[i].title +  "</td><td>" + parseddata[i].year +
            "</td></tr>");
          }
        }
      } 