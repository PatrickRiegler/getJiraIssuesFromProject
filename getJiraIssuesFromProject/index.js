console.log("before function") 
exports.handler = (event, context, callback) => {
  console.log("inside function") 
  callback(null, "NO");
}
