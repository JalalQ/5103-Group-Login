//JS file linked with the mail assign-2-groupLogin-2020.html file.
//Program written by J. Qureshi (N01457503), Humber College (Spring 2020).
//HTTP5103 course.
//The objective of this file is to provide functionality as part of assignment 2 requirement.

//Variables. const behaves like let, and its value can not be re-defined.
var team_no = "10";
const no_members = 5;
var team_member_first = ["Luis", "Adam", "Steven", "Jalaluddin", "Asia"]; //array of first name of team members.
var name_mid_last = ["A. Botello Sanchez", "Galek", "Le", "Qureshi", "Levesque Gault"]; //array of (middle and) last name oof team members.


//Steps

//This is the first prompt.
user_team_no = prompt("Enter your Team number: ");

if (user_team_no===team_no) { //var team_no and user_team_no are both string, hence triple = can be used.
    
    //expecting first letter CAP, remaining small - Integrity of input data is not enforced in this assignment.
    user_first_name = prompt("Enter your first name: ");
        
    var valid_name = false; // variable initialization
    
    //If the user does not provides any input, then it wold be a waste of computation resources to search for the user.
    if (user_first_name!=null && user_team_no!="") {
        
        //variable used to increment the index of the team_member_first array
        var counter = 0;
        
        // linear search process, implemented using a do loop - as the process need to perform comparision at least once.
        /*do {

            if (team_member_first[counter]===user_first_name) {
                alert("Welcome " + team_member_first[counter] + " " + name_mid_last[counter] + "!");
                valid_name = true;
                break; // break from the loop if the user has been found - this minimizes computation overhead.
            }

            counter = counter + 1; //used to increment the index of the team_member_first array

        } while (counter<no_members);
        
        //if the linear search process above was not able to find the username, then output a message to user telling the user
        //that access has been denied.
        if (valid_name===false) {
            alert("Invalid name has been provided. Access Denied.");
        }
        */
        
        //A switch conditional based implementation would look like as follow:
        switch(user_first_name) {
            case team_member_first[0]: 
                alert("Welcome " + team_member_first[0] + " " + name_mid_last[0] + "!");
                break;
            case team_member_first[1]: 
                alert("Welcome " + team_member_first[1] + " " + name_mid_last[1] + "!");
                break;
            case team_member_first[2]: 
                alert("Welcome " + team_member_first[2] + " " + name_mid_last[2] + "!");
                break;
            case team_member_first[3]: 
                alert("Welcome " + team_member_first[3] + " " + name_mid_last[3] + "!");
                break;
            case team_member_first[4]: 
                alert("Welcome " + team_member_first[4] + " " + name_mid_last[4] + "!");
                break;
            default:
                alert("Invalid name has been provided. Access Denied.");
                break;
        }
        
            
    }
    
    //when the user clicks "Cancel" or provides an empty string for name request.
    else {
        alert("No user input (first name) has been provided. Access Denied.");   
    }
    
}

else if (user_team_no===null || user_team_no==="") {
    alert("No user input (team no.) has been provided. Access Denied.");
}
else if (user_team_no!==team_no) {
    alert("Invalid Team number has been provided. Access Denied.");
}
