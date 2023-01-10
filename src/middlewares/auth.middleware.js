const authMiddleware=  (req, res, next)=>{
  if(!req.session.USERNAME|| !req.session.PASSWORD){
      res.status(403).json({
          success:false,
          message: "user not logged in"
      })
  }
  next();
}
module.exports= authMiddleware;