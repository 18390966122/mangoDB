var userName = "sherrie";
var timeStamp = Date.parse( new Date());//定义时间戳
var jsonData = {"loginName": userName, "loginTime": timeStamp}

var db = connect("log")//连接log库
db.log.insert(jsonData);//把创建的json数据存进log库里面

print("[demo]:db connect success")




