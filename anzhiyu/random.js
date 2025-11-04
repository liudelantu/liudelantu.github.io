var posts=["2025/11/03/github+hexo部署属于自己的博客/github+hexo部署属于自己的博客/","2025/11/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };