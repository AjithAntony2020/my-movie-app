

// Ajith Antony
//Movie rating widget


//BOC

 var rating = '0';
 

 window.onload = function()
 {

    //for rating stars reset
     var content = document.getElementById("stars").innerHTML;


     //save
     document.getElementById("saver").onclick = function()
     {

         var title = document.getElementById("title").value;          
         var movies = JSON.parse(localStorage.getItem("MovieList"));
        
         for(let i =0; i< movies.length; i++ )
         {
            if(movies[i].title === title)
            {
             movies[i].review = document.getElementById("moviefeedback").value;
             movies[i].rating = rating;

            
            }                              
         }
         
         localStorage.setItem("MovieList", JSON.stringify(movies));    
         
         alert("saved");

         document.getElementById("poster").style.backgroundImage = "";
         document.getElementById("moviefeedback").value = "";
         document.getElementById("stars").innerHTML = content;
         var sel = document.getElementById("title");

         sel.options[0].selected = true;
        
     }


     //function to fill titles in dropdown
     var populateTitles = function(){

         var movies;

         movies = JSON.parse(localStorage.getItem("MovieList"));
          if(movies == null){

            setTimeout(function(){ alert("Please Add Movies to List From Home Page"); }, 0);
            window.location.replace("index.html");
        }

         var dropdown = document.getElementById("title");
         var listItems = dropdown.innerHTML;
         for(let i = 0; i < movies.length; i++)
         {
             listItems += "<option>" + movies[i].title + "</option>"          
         }
         dropdown.innerHTML = listItems;

     };


     populateTitles();


     //fill movie details on selection change in dropdown
     document.getElementById("title").addEventListener("change", function()
     {


         var title = document.getElementById("title").value;

         document.getElementById("poster").style.backgroundImage = "";
         document.getElementById("moviefeedback").value = "";
         document.getElementById("stars").innerHTML = content;
        
         var movies = JSON.parse(localStorage.getItem("MovieList"));

         for(let i =0; i< movies.length; i++ )
         {
            if(movies[i].title === title)
            {
              document.getElementById("moviefeedback").value = movies[i].review;

              var ratingGiven = getRating(movies[i].rating);
              var rated = document.getElementById(ratingGiven);
              if(rated != null)
              {
                 rated.click();
              }

              var url = "url(images/" + movies[i].title + ".jpg)";
              document.getElementById("poster").style.backgroundImage = url;
       
            }                            
                                      
         }

      }              

    );



 };


 //assign rating
 function rate(value)
 {                  
         rating = value;
 }

 //return corresponding id of rating star controls
 function getRating(currentRating)
 {


     if(currentRating === '5')
     {
         return "star5";
     }
     else if(currentRating === '4.5')
     {
         return "star4half";
     }
     else if(currentRating === '4')
     {
         return "star4";
     }
     else if(currentRating === '3.5')
     {
         return "star3half";
     }
     else if(currentRating === '3')
     {
         return "star3";
     }
     else if(currentRating === '2.5')
     {
         return "star2half";
     }
     else if(currentRating === '2')
     {
         return "star2";
     }
     else if(currentRating === '1.5')
     {
         return "star1half";
     }
     else if(currentRating === '1')
     {
         return "star1";
     }
     else if(currentRating === '0.5')
     {
         return "starhalf";
     }
     else
     {
         return "";
     }
 }
 
 //EOC

