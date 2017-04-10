var express = require('express')
var bodyParser = require('body-parser')

var dishRouter = new express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    //  res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.get((req,res,next)=>{
    res.end('getting all dishes');
})
.post((req,res,next)=>{
    res.end('will add the dish ' + req.body.name + ' and description: ' + req.body.description)
})
.delete((req,res,next)=>{
    res.end('deleting all dishes!');    
});


dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
   // res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.get((req,res,next)=>{
    res.end('will send details for dish number: ' + req.params.dishId + '\n');
})
.put((req,res,next)=>{
    res.write('updating the details for:'+req.params.dishId)
    res.end('will update the dish: ' + req.body.name + 'with details: '
    +req.body.description);
})
.post((req,res,next)=>{
    res.end(`will add the dish ${req.body.name} and description: ${req.body.description}`)
    
})
.delete((req,res,next)=>{
    res.end('will send details for dish number: ' + req.params.dishId);
});

module.exports = dishRouter;