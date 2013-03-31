// Options JS shtuff

// Save options functions
function saveOptionById(id)
{
    localStorage[id] = document.getElementsById(id).value;
}

function saveCheckboxById(id)
{
    // USE THIS FOR CHECKBOXES ONLAR
    if(id.checked)
        localStorage[id] = "checked";
    else if(!id.checked)
        localStorage[id] = "notchecked";
    else
        localStorage[id] = "undefined";    
}

function saveAll()
{
    saveOptionById("nopeurl");
    saveCheckboxById("ckb_enableHistoryNuke");
    saveOptionById("HistDelAmount");
    saveCheckboxById("ckb_nukeEverything");
}

// Restore options functions
function restoreOptionById(id, defaultvalue)
{
    var localval = localStorage[id];
    if(localval)
        document.getElementById(id).value = localval;
    else 
        document.getElementById(id).value = defaultvalue;
}

function restoreCheckboxById(id, defaultvalue)
{
    if(localStorage[id] == "checked")
        document.getElementById(id).checked = true;
    else if(localStorage[id] == "notchecked")
        document.getElementById(id).checked = false;
    else
        document.getElementById(id).checked = defaultvalue;
}

function restoreOptions() 
{
    // Nope URL
    restoreOptionById("nopeurl", "http://no.pe/");
    restoreCheckboxById("ckb_enableHistoryNuke", true);
    restoreOptionById("HistDelAmount", 600000);
    restoreCheckboxById("ckb_nukeEverything");
}

// Page functions
function init()
{
    restoreOptions(); 
    setDOMEvents();
}

function setDefaults()
{
    // Nope URL
    document.getElementById("nopeurl").value = "http://no.pe/";
    
    // History Nuking
    document.getElementById("ckb_enableHistoryNuke").checked = true;
    document.getElementById("HistDelAmount").value = 600000;
    document.getElementById("ckb_nukeEverything").checked = false;
}

function setDOMEvents() 
{
    document.querySelector('#pb_SetDefault').addEventListener('click', setDefaultURL);
    document.querySelector('#pb_SetYT').addEventListener('click', setYTURL);
    document.querySelector('#ckb_nukeEverything').addEventListener('click', nukeEverythingConfirm);
    
    document.querySelector('#pb_Save').addEventListener('click', saveAll);
    document.querySelector('#pb_RestoreDefaults').addEventListener('click', setDefaults);
}

// Misc functins
function setDefaultURL()
{
    var NOPEURL = "http://no.pe/"; // Force http, since no.pe appears to not support https.
    document.getElementById("nopeurl").value = NOPEURL;
}

function setYTURL() 
{
    var YTURL = "www.youtube.com/watch?v=gvdf5n-zI14"; // Being agnostic of http or https.
    document.getElementById("nopeurl").value = YTURL;
}

function nukeEverythingConfirm()
{
    if(document.getElementById("ckb_nukeEverything").checked)
    {
        var j = confirm("Using this will nuke your *entire history* when you nope. Everything. Gone. Are you SURREEE that you want that?");
        if(j == true)
            document.getElementById("ckb_nukeEverything").checked = true;
        else
            document.getElementById("ckb_nukeEverything").checked = false;
    }
}

document.addEventListener('DOMContentLoaded', init); // On Page Load