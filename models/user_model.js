var db=require("../dbconnection");
var user={
getAllUser:function(callback){
    return db.query('select * from user_tbl where type="customer"',callback);
},
deleteUser: function (user_id, callback) {
    return db.query('delete from user_tbl where user_id=?', [user_id], callback);
},
getUserById: function (user_id, callback) {
    return db.query('select * from user_tbl where user_id=?', [user_id], callback);
},
addUser:function(item,filename,callback){
    return db.query('insert into user_tbl values(?,?,?,?,?,?,?,?,?,?,?,?)',[item.user_id,item.user_email,item.password,item.fname,item.lname,item.address,item.city,item.pincode,item.mob_no,item.gender,filename,item.type],callback);
},
UpdateUser:function(user_id,item,filename,callback)
{
    return db.query('update user_tbl  set user_email=?,password=?,fname=?,lname=?,address=?,city=?,pincode=?,mob_no=?,gender=?,img=?,type=? where user_id=?'
    ,[item.user_email,item.password,item.fname,item.lname,item.address,item.city,item.pincode,item.mob_no,item.gender,filename,item.type,user_id],callback);
},
LoginUser:function(item,callback){
    return db.query('select * from user_tbl where fname=? and password=? and type="admin"'
    ,[item.fname,item.password],callback);
}
};

module.exports=user;