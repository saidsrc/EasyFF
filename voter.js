function clickall() { 
chrome.tabs.getCurrent(null, function(tab)

{

document.addEventListener('DOMContentLoaded', function () 
{

var links = document.getElementsByClassName("add_upvote");
for(var i=0; i<links.length; i++){var l=links[i]; l.click()};

};
);
}; 

document.getElementById("voteall").addEventListener('click', clickall, false); 



  

