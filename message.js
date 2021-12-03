
    //create  class message
    class Message {
      //construktor
      constructor(name, evaluation, date) {
        this.name = name;
        this.evaluation = evaluation;
        this.date = date;
       
      }
    }

    //Greate function to print out table 
    function drawTabel() {
    
      //Border,text are CSS stylerole
      let msgOutput = '<center><table style="border: 3px solid rgb(68, 169, 177); width:75%; margin-bottom:300px"><tr style="border: 3px solid blue">';

      //print out the header of the table
      
        msgOutput += `<th  style="font-size:20px; align-text:center; color:white; border: 3px solid rgb(68, 169, 177)"><center>Name</center></th>`;
        msgOutput += `<th  style="font-size:20px; align-text:center; color:white; border: 3px solid rgb(68, 169, 177)"><center>Evaluation</center></th>`;
        msgOutput += `<th  style="font-size:20px; align-text:center; color:white; border: 3px solid rgb(68, 169, 177)"><center>Date</center></th>`;
      

      msgOutput += "</tr>";

      //loop for every obejkt in the array
     list.forEach((item, i) => {
        //add <TR> tag
        msgOutput += `<tr style="color: blue;">`;

        //get the values for objects attribut
        for (var x in item) {
          msgOutput += `<td style="color:rgb(224, 185, 134); border: 3px solid rgb(68, 169, 177)"><b>${item[x]}</b></td>`;
        }

        msgOutput += "</tr>";
      });

      msgOutput += "</table></center>";
      //print out msgOutput 
      document.getElementById("output").innerHTML = msgOutput;
    }

     //function to get the values from input field
    function addEvaluation() {

      //values are validated direct in validate() function
      let name = validate(document.getElementById("name").value);
      let evaluation = validate(document.getElementById("evaluate").value);
      let date = validate(document.getElementById("date").value);
      

      //Create an objekt of class Message
      let msg = new Message(name, evaluation, date);

      //Push the object in the array
     list.push(msg);

      //Call functionen DrawTable
      drawTabel();

    }

    function validate(text) {
      if (text == null || text == "") return "undefined";
      else return text;
    }
  
    // input number of object av klassen Message (2 st objekt)
    let list = [];
    list.push( new Message("Rasha", "good job, but you need to develop it", "01/12/2021") );
    list.push( new Message("Ziyad", "very well", "15/11/2021") );
    
    //call funktion DrawTable to draw aour table
    drawTabel();




