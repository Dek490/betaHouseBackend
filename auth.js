// const jwt = require('jsonwebtoken');
// const { usersModel } = require('./models/users-model');
// require('dotenv').config();
// const  authenticate=(perms)=> {
//   // Get the bearer token from the Authorization header
//   return async (req,res,next)=>{

//     const token = req.header("Authorization").replace("Bearer ", "");
//   if (!token) {
//     return res.status(401).send({ message: 'Unauthorized' });
//   }
  
//  console.log(token)
//   // Verify the JWT token

  
//   try {
//    // eslint-disable-next-line no-undef
//    const decodedToken= jwt.verify(token,process.env.token)
//     console.log("tk",decodedToken)
      
//         req.user = decodedToken;
//     // check if user is working
    
//   const usr = await usersModel.findById(req.user.id)
//   if(usr){
//     console.log("done")
//     console.log(usr.role)
//     if(perms.includes(usr.role)){
//         console.log("true")
//         next()
//     }else{
//         console.log("false")
//         return res.status(401).send({ message: 'Unauthorized You dont have permision' });
//     }

 
//   }
//   else {
//     return res.status(401).send({ message: 'Unauthorized p' });
//   }
//     // end 
    
//   } catch (error) {
//       return res.status(401).send({ message: 'Unauthorized Invalid Token',error:error });
//   }
  

//   }
// }

// module.exports = authenticate;