module.exports = function(app, Post)
{
    // GET ALL POSTS
    app.get('/api/post/getPosts', function(req,res){
        Post.find(function(err, posts){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(0 == posts.length) return res.json({errCode: 1, errMsg: '게시물이 존재하지 않습니다.'});
            res.json(posts);
        })
    });

    // GET SINGLE post
    app.get('/api/post/getPost/:_id', function(req, res){

        Post.findOne({_id: req.params._id}, function(err, post){
            if(err) return res.json({errCode: -1, errMsg: err});
            if(!post) return res.json({errCode: -1, errMsg: '게시글을 찾을 수 없습니다.'});
            
            res.json(post);
        })
    });
    
    // GET SINGLE post
    app.post('/api/post/insert', function(req, res){

        if(!req.body['contents']){
            return res.json({errCode: -1, errMsg: '내용을 입력해주세요.'});
        } 
        
        var post = new Post();
        post.userId = req.body.userId;
        post.contents = req.body.contents;
        post.images = req.body.images||'';
        post.tags = req.body.tags||'';
        post.like = req.body.like||'';
        post.comments = req.body.comments||'';
        post.positionId = req.body.positionId||'';
        
        Post.save(function(err) {
            if(err) return res.send({errCode: -1, errMsg: '저장에 실패하였습니다.', err: err});
            res.json({errCode: 1, msg: '저장되었습니다.'});
        })
    });

    // UPDATE THE post
    app.put('/api/post/update/:_id', function(req, res){
        Post.update({ _id: req.params._id }, { $set: req.body }, function(err, output){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(!output.n) return res.json({errCode: -1, errMsg: '게시글을 찾을 수 없습니다.'});

            res.json({errCode: 1, msg: '저장되었습니다.'});
        })
    
    });

    // DELETE post
    app.delete('/api/post/delete/:_id', function(req, res){

        Post.remove({ _id: req.params._id }, function(err, output){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            res.json({errCode: 1, msg: '삭제되었습니다.'});
        })
    });
    
}
