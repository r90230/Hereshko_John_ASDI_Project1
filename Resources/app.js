Titanium.UI.setBackgroundColor('#000');

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var margin = 10;
var canvasSize = pWidth-margin*4;
var size = canvasSize/3;

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 0
});

var mainView = Ti.UI.createScrollView({
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight-border.height-border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#336699",
	layout: "horizontal"
});

var objectTable = Ti.UI.createTableView({
	top: border.top + border.height
});

var objectLayout = Ti.UI.createTableViewSection({});

var sectioning = [objectLayout];

objectTable.setData(sectioning);

if(Ti.Platform.name ==="iPhone OS"){
	objectTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};


mainView.add(objectTable);
mainWin.add(mainView);

var myObjects = require("objects");

mainWin.open();