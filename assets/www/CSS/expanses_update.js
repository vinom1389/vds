 var db;
	
	 function expansescalculation() 
	    { 
	        db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000); 
	       db.transaction(populateDB,errorCB);   
	    }
	    // inserts test data into db
		function populate1DB(tx) {
		var expa=document.getElementById("examount").value;
		var e = document.getElementById("MyDropDownList");
		var sl_type = e.options[e.selectedIndex].text;
		tx.executeSql('update budget_details set expanses=expanses+expa where b_type=sl_type ', [], querySuccess, errorCB);
		  db.transaction(querySuccess,errorCB);   
		} 
 
		// generic error handler
		function errorCB(tx, err) {
			navigator.notification.alert("Error: " + err);
		}
 
		// display results of a success db query
		function querySuccess(tx, results)
		 {     
			var outputmdg1=document.getElementById("sfexp");
		
			var len = results.rows.length;
			// display each item in the recordset in its own alert
	
				if (len > 0)
				 {
					for (var i=0;i<len;i++) 
					 {
						outputmdg1.innerHTML += "<td>"+ results.rows.item(i).expanses+"</td>";
				 	 }
			     }
		  }	