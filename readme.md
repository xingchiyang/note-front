##效果演示
![登录](https://github.com/xingchiyang/note/blob/master/doc/images/%E7%99%BB%E5%BD%95.gif)
![创建文件](https://github.com/xingchiyang/note/blob/master/doc/images/%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6.gif)
![标签](https://github.com/xingchiyang/note/blob/master/doc/images/%E6%A0%87%E7%AD%BE.gif)
![附件](https://github.com/xingchiyang/note/blob/master/doc/images/%E9%99%84%E4%BB%B6.gif)
![回收站](https://github.com/xingchiyang/note/blob/master/doc/images/%E5%9B%9E%E6%94%B6%E7%AB%99.gif)
![文件加锁](https://github.com/xingchiyang/note/blob/master/doc/images/%E6%96%87%E4%BB%B6%E5%8A%A0%E9%94%81.gif)
![文件解锁](https://github.com/xingchiyang/note/blob/master/doc/images/%E6%96%87%E4%BB%B6%E8%A7%A3%E9%94%81.gif)

##项目说明
####名称
星驰笔记本（前端）
####特点
* 纯html,js,css实现

####待解决的问题
导航树拖拽问题
部分数据分页
接口增加描述、制作html文档apidoc
回收站笔记预览 readonly
建笔记时添加了附件却不保存要定时删除该附件（本地、表）
删除笔记时删除相应笔记图片内容附件
在回收站中删除目录时相应的附件（表、本地）没有被清除
第一次新建文件夹时刷新有问题
通过状态401判断是否登陆、数据通过用户进行筛选
登录以后页面上加入用户名称信息（改成下拉形式）
删除文件到回收站后，再删除对应的父目录，再恢复该文件，显示不了
目录加锁需求
目录加密时，点左边的向下小箭头就能弹出密码输入框
搜索框结束以后刷新目录打不开
附件大小有问题

####需求管理
支持导出（pdf/word格式）
发送邮件
语音输入
定时笔记（定时提醒功能）
markdown、内置标签
管理权限
支持附件名称修改
openapi接口提供（apikey）


####参考资料
> jstree
* http://blog.csdn.net/ceoshun/article/details/38658853
* http://www.cnblogs.com/luozhihao/p/4679050.html
> layui
* http://www.layui.com/doc/modules/upload.html