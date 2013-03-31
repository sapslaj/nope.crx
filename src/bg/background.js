// Main logic
chrome.browserAction.onClicked.addListener(function(tab)
{
    redirect();
    
	if(localStorage["ckb_enableHistoryNuke"])
	   nukehist();
});

function redirect()
{
    chrome.tabs.update({url: localStorage["nopeurl"], active: true});
}

function nukehist()
{
    if(localStorage["ckb_nukeEverything"] == "checked")
        chrome.history.deleteAll(function(){});
    else
    {
        var now = (new Date).getTime();
        var minutesago = now - localStorage["HistDelAmount"];
        chrome.history.deleteRange({startTime: minutesago, endTime: now}, function(){});
    }
}
