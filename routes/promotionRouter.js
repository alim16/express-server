var express = require('express')
var bodyParser = require('body-parser')

var promotionRouter = new express.Router();
promotionRouter.use(bodyParser.json());
promotionRouter.route('/')
.all((req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    //  res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.get((req,res,next)=>{
    res.end('getting all promotions');
})
.post((req,res,next)=>{
    res.end('will add the promotion ' + req.body.name + ' and description: ' + req.body.description)
})
.delete((req,res,next)=>{
    res.end('deleting all promotions!');    
});


promotionRouter.route('/:promotionId')
.all((req,res,next)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
   // res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.get((req,res,next)=>{
    res.end('will send details for promotion number: ' + req.params.promotionId + '\n');
})
.put((req,res,next)=>{
    res.write('updating the details for:'+req.params.promotionId)
    res.end('will update the promotion: ' + req.body.name + 'with details: '
    +req.body.description);
})
.post((req,res,next)=>{
    res.end(`will add the promotion ${req.body.name} and description: ${req.body.description}`)
    
})
.delete((req,res,next)=>{
    res.end('will send details for promotion number: ' + req.params.promotionId);
});

module.exports = promotionRouter;