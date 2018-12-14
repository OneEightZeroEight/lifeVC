 https://oneeightzeroeight.github.io/lifeVC/build






 # react静态项目在github生成预览
 1、安装使用
```
cnpm install -g   create-react-app
```

2、生成项目
```
create-react-app my-app
```

3、打包，注意在package.json配置文件中加一句："homepage": "./"，修改build之后的默认绝对路径为相对路径
```
npm run build
```

4、在github上创建新的仓库，格式为：projectName.github.io

5、在根目录添加.gitignore文件，编辑如下，忽略要上传的目录
/node_modules

6、上传至git仓库
```
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/username/projectName.github.io.git
git push -u origin master
```

7、配置首页

点击github上的你要进入的仓库，点击setteings
找到githubPages部分，点击none,让它切换成master branch,点击save
保存后页面出现了链接，这个链接点击后并不是网页效果，得修改地址，先复制这个地址
在你刚才复制的地址后面加上你要查看的html页面的名称，例如我的github地址是：　https://crystalvon77.github.io/某项目 ,要预览这个某项目下的index.html文件，则你最后应该预览的地址是：　https://crystalvon77.github.io/某项目/index.html
