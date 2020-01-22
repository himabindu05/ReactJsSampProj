var isAdmin = false;
var isValidUser = false;
function validateUser(user,password){
    if(user === 'admin' && password === 'admin')
    {
        isValidUser = true;
        isAdmin = true;
    }
    else if(user === 'user1' && password === 'user1')
    {
        isValidUser = true;
    }    
}