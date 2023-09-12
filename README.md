


## <img src="https://7072-prod-2g5hif5wbec83baa-1301921121.tcb.qcloud.la/website/boyyang_wallpaper/app.png" style="width: 50px; height: 50px;"> boyyang.wallpaper

### 项目介绍

单纯的想写一款桌面壁纸软件，给自己使用。发现写Mac桌面应用需要重新学习一套
新的语言，感觉有的复杂。所以在网上搜罗了一圈，打算加入electron当一名异教徒
electron 简单易上手，所以花了几天时间简单的看了一下官方文档,使用electron-vite [官网](https://electron-vite.github.io/)
搭建了一套 vue3 + ts + vite + naiveUi 的项目，然后使用第三方库wallpaper.js 用来
修改mac桌面壁纸(这个库找了很久，网上到处找也没有找到好的解决方案)。

### 项目启动

``yarn dev``

### 项目打包

``yarn build``

### 页面截图

* 首页

![首页](https://7072-prod-2g5hif5wbec83baa-1301921121.tcb.qcloud.la/website/boyyang_wallpaper/home.jpg)

* 系统托盘

![系统托盘](https://7072-prod-2g5hif5wbec83baa-1301921121.tcb.qcloud.la/website/boyyang_wallpaper/tray.jpg)

### 功能

* 更换静态壁纸功能
* 图片搜索功能（需要注册 boyyang.blog 博客账号）
* 图片收藏功能（需要注册 boyyang.blog 博客账号）

### 后端API

由于接口比较少，所以为了不再重新搭建项目以及新建数据库等，所以我
使用了个人博客项目的后端接口，有兴趣可以访问
[GitHub地址](https://github.com/boyyang-love/boyyang_blog_backend)
或者
[Gitee地址](https://gitee.com/boyyanglove/boyyang_blog_backend)

### 主要技术栈(前端)
* electron
* vue3 + ts 
* naive-ui
* vite
* wallpaper.js

### 主要技术栈(后端)
* go
* go-zero
* mysql
* 对象存储
* 微信云开发