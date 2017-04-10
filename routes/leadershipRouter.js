var express = require('express')
var bodyParser = require('body-parser')

var leadershipRouter = new express.Router();
leadershipRouter.use(bodyParser.json());
leadershipRouter.route('/')
.all((req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    //  res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.get((req,res,next)=>{
    res.end('getting all leaders');
})
.post((req,res,next)=>{
    res.end('will add the leader ' + req.body.name + ' and description: ' + req.body.description)
})
.delete((req,res,next)=>{
    res.end('deleting all leaders!');    
});


leadershipRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
   // res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.get((req,res,next)=>{
    res.end('will send details for leader number: ' + req.params.leaderId + '\n');
})
.put((req,res,next)=>{
    res.write('updating the details for:'+req.params.leaderId)
    res.end('will update the leader: ' + req.body.name + 'with details: '
    +req.body.description);
})
.post((req,res,next)=>{
    res.end(`will add the leader ${req.body.name} and description: ${req.body.description}`)
    
})
.delete((req,res,next)=>{
    res.end('will send details for leader number: ' + req.params.leaderId);
});

module.exports = leadershipRouter;