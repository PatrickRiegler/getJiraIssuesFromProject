const request = require('request');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require('btoa');

issuesResponse = []

exports.handler = (event, context, callback) => {

  url = "http://devjira.oskar-ruegg.com/rest/api/2/search?jql=project=HELLA&fields=summary,fixVersions"

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            // console.log(xhttp.responseText)
            userJson = JSON.parse(xhttp.responseText)
            if(userJson.issues.length>0) {
              issues = userJson.issues
              issues.forEach(function (element) {
		issue = {}
                issue.key = element.key
                if(element.fields.fixVersions[0])
                  issue.fixVersion = element.fields.fixVersions[0].name
                issuesResponse.push(issue) 
              })
              setTimeout(function() { callback(null, JSON.stringify(issuesResponse)); }, 500);
            }
            setTimeout(function() { callback(null, "NO Groups Found"); }, 500);
       }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader( 'Authorization', 'Basic ' + btoa( "techuser" + ':' + "techuser" ) )
    xhttp.send();


}
