timeList = new Mongo.Collection("timeList");

Meteor.methods({

		removeTimeX: function(downTime){
						timeList.remove({});
						timeList.insert({  downTime: downTime  }); 
		 },
		 getTimeX : function(){
		  
		            return timeList.find().fetch();
		 }
});
