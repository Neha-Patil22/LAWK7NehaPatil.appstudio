let query = ""

let req = ""

let results = []

let pw = "Fluffy.2013"

let netID = "nbp30352"

Button1.onclick = function(){
query = "SELECT * FROM customer"
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)


if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtA.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtA.value = message
         } // end else
         
       }else
         txtA.textContent = "Error Code: " + req.status
         


}

   
