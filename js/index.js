 //ARUN GOPALAKRISHNAN 
    
    
window.onload = function(){
 //ADD MOVIES TO WISH LIST 
             
         document.getElementById("txtmoviename").focus(); 
			
          document.getElementById("addwishlist").onclick=function(){


          var tbl= document.getElementById("tblwishlist");

          var moviename = document.getElementById("txtmoviename").value;

          var str = "<tr><td>" + moviename + "</td></tr>";
          tbl.innerHTML = tbl.innerHTML+str;  
              
          var  movies = JSON.parse(localStorage.getItem("MovieList")) || [];
               
                     
              var movie = new Object();
              movie.title = moviename;
              movie.review = "";
              movie.rating = '0';


              console.log( JSON.stringify(movies));
              movies.push(movie);

              localStorage.setItem("MovieList", JSON.stringify(movies));
         
				document.getElementById("txtmoviename").value = "";
				document.getElementById("txtmoviename").focus();
          };  
          
  //CLEAR MOVIES FROM WISH LIST         
          document.getElementById("clrwishlist").onclick = function(){
              

               localStorage.removeItem("MovieList");


               var tbl = document.getElementById("tblwishlist");
               tbl.innerHTML = '<th>Movie Name</th>';
			   document.getElementById("txtmoviename").focus();
              
          };
          
// DISPLAY MOVIE NAMES IN TEXT

          function populatemovienames(){

              var movies;

              movies = JSON.parse(localStorage.getItem("MovieList")) || [];
              

              var tbl = document.getElementById("tblwishlist");

              var listItems = tbl.innerHTML;

              if(movies != null)
              {
                 for(let i = 0; i < movies.length; i++)
                 {
                  listItems += "<tr><td>" + movies[i].title + "</td></tr>"          
                 }
                tbl.innerHTML = listItems;
              }    

          }

          populatemovienames();

          
      };
  
