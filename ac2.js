var fs = require("fs");

fs.WriteFile("movies.txt", "movie1", "movie2", function(err){
(err)
if (err){
  return console.log(err);
});

console.log("Text file update");
});



fs.ReadFile("movies.txt","utf8", function(er, data){
  console.log(data);
} );
