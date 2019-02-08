rm getJiraIssuesFromProject.zip 
cd getJiraIssuesFromProject
echo "zipping..."
zip -q -X -r ../getJiraIssuesFromProject.zip *
cd .. 
echo "uploading..."
aws lambda update-function-code --function-name getJiraIssuesFromProject --zip-file fileb://getJiraIssuesFromProject.zip --profile OR

echo
echo "----------------"


