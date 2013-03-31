// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.browserAction.onClicked.addListener(function(tab)
{
	var nopeurl = "http://no.pe";
	chrome.tabs.update({url: nopeurl, active: true});
	
	var now = (new Date).getTime();
	var minutesago = now - 600000;
	chrome.history.deleteRange({startTime: minutesago, endTime: now}, function(){});
});