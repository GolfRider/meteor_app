
timeList = new Mongo.Collection("timeList");

Template.home.helpers({

	dtime : function(){
			  return timeList.find({});
	        }

});

Template.admin.events({
  "submit form": function (event,template) {
    // This function is called when the new task form is submitted
    event.preventDefault();
    
	var downTime = event.target.down_time.value.trim();
	var adminCode = event.target.admin_code.value.trim();

	
	if(adminCode!='welcome123'){
            template.$('#msg').text("Enter valid admin code");
	    return false;
	}
        template.$('#msg').text("");
	
	Meteor.call("removeTimeX",downTime);	

    // Clear form
    event.target.down_time.value = "";
	event.target.admin_code.value = "";
     
	Router.go('/'); 
    // Prevent default form submit
    return false;
  }
});