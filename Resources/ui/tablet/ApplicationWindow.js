function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
	title:"Horses of the World",
	backgroundImage:"/images/background@2a.png",
	exitOnClose:true
	});
	
var horseButton = Titanium.UI.createButton({
	title:"Horse Breeds",
	width:"15%",	//You must set the height and width else the button will be enormous
	height:"5%",
	bottom:"70%",
	right:"78%",
	id:"Horse Button",	//This is a custom property

	});
	self.add(horseButton);
	

var ponyButton = Titanium.UI.createButton({
	title:"Pony Breeds",
	width:"15%",	//You must set the height and width else the button will be enormous
	height:"5%",
	bottom:"50%",
	right:"78%",
	id:"Pony Button",	//This is a custom property

	});
	self.add(ponyButton);
	

var extinctButton = Titanium.UI.createButton({
	title:"Extinct Breeds",
//	backgroundImage:"images/button.png",
//	backgroundSelectedImage:"images/button-over.png",
	width:"15%",
	height:"5%",
	bottom:"30%",
	right:"78%",
	id:"Extinct Button",
	
	});
	self.add(extinctButton);
	
	
// click event listeners for the 3 buttons	
	
	horseButton.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('Horse Breeds'),
			backgroundImage:"/images/background@5a.png"
		}));
	});

	
/*	horseButton.addEventListener('click', function(ApplicationWindow) {
	win(Ti.UI.createWindow({
		title: L('Horse Breeds'),
		backgroundImage: '/images/background@1a.png'
	}));

	if(e.source.hasDetail){
		if(e.source.js){//Does the row have a pointer to an external js file?
			//It does: Load that file
			var w = Titanium.UI.createWindow({
				title:e.source.title,//Take the title from the row
				backgroundColor:"#FFFFFF",
				dataToPass:e.source.dataToPass,
				url:e.horseList.js//The url property of a window will load an external .js file for window contents (be sure that external file is properly formatted!)
			});
		}else{
			//It doesn't: Create a window from scratch
			var w = Titanium.UI.createWindow({
				title:e.horseList.js,//Take the title from the row
				backgroundColor:"#FFFFFF",
			})
			//Create some views for our window
			
			var label = Titanium.UI.createLabel({
				text:"A newly opened window from the " + e.source.title + " row",
				width:"auto",
				height:"auto",
				textAlign:"center"
			});
			
			w.add(label)
		}
		//Slide-open the window
		tab.open(w,{animated:true});//Try it without the animated:true and see what happens
	}else{//Row doesn't have a window to open
		alert("No window to open :(")
	}
});	
*/	
	
	
	ponyButton.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('Pony Breeds'),
			backgroundImage:"/images/background@5a.png"
		}));
	});
	


	extinctButton.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('Extinct Breeds'),
			backgroundImage:"/images/background@5a.png"
		}));
	});
	
	return self;

};

module.exports = ApplicationWindow;
