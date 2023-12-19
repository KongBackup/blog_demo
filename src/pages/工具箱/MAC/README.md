---
category: MAC
date: 2022-11-19
---
# MAC 使用笔记
# 日常问题
- [日常问题](#日常问题)
  - [MAC NVM安装](#mac-nvm安装)
  - [.bashrc](#bashrc)
  - [MAC 配置host](#mac配置-host)
  - [查看系统有几种shell ： cat /etc/shells](#查看系统有几种shell：-cat-etcshells)
  - [JS 自动读取文件目录](#js自动读取文件目录)
  - [获取对象属性长度](#获取对象属性长度)
  - [删除对象](#删除对象)
  - [js中合并多个对象的方法](#js中合并多个对象的方法)
  - [正则匹配](#正则匹配)
  - [DS_Store文件](#ds-store文件)

# MAC NVM安装
1. 卸载 node：
	sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
2.  下载nvm 
	sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
	
	
3. 解决nvm command not found问题: 配置环境变量
	touch .bash_profile //新建文件
	open .bash_profile //打开文件
	export NVM_DIR="$HOME/.nvm"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
	
4. zsh: command not found:nvm
	touch ~/.zshrc
	添加：source ~/.bash_profile
	 #保存退出，
执行： source ~/.zshrc


# .bashrc
~/.bashrc,
 bash 的配置文件
作用：
	1. 配置命令别名:alias ll = "ls -lha"
	2. 对 bashrc 所做的任何修改将在下一次启动终端时生效。如果你想立刻生效的话，运行下面的命令：source ~/.bashrc
	3. 函数自定义命令：
	md () {
  mkdir -p $1
  cd $1 
}


 ~/.bash_profile, ~/.zshrc, and ~/.profile

profile，路径：/etc/profile，用于设置系统级的环境变量和启动程序，在这个文件下配置会对所有用户生效。
一般不建议在/etc/profile文件中添加环境变量，因为在这个文件中添加的设置会对所有用户起作用。

bashrc 文件用于配置函数或别名
系统级的位于/etc/bashrc，对所有用户生效。
用户级的位于~/.bashrc，仅对当前用户生效。
bashrc 只会被 bash shell 调用

bash_profile
用于配置环境变量和启动程序，但只针对单个用户有效
文件存储位于~/.bash_profile，
该文件是一个用户级的设置，可以理解为某一个用户的 profile 目录下。


# MAC 配置host

23:39

	1. 了解host文件的作用

sudo vi /etc/hosts
 > i
esc


hosts 是什么：电脑本机 IP地址<=>域名 映射表 （仅对本机生效）
hosts 文件则是有着“类似本地 DNS 服务器”的作用
	1. 如果你在 hosts 里面配置了某个域名和IP的对应关系 (比如 127.0.0.1 http://iplaysoft.com
	2. 当你在「本机」访问 http://iplaysoft.com 时, 系统首先会从 hosts 里面解析出 127.0.0.1 这个 IP，不会再去查询网络上的 DNS 服务器


host文件的作用
	1. 强制指定域名的 IP，加快域名解析 (省略了联网查询 DNS 的步骤)，也能绕过 DNS 污染与劫持。
	2. 为局域网某些 IP 的机器配置一个“网址别名”，方便自己记忆和访问
	3. 将域名指向到不可访问的IP地址，达到屏蔽不健康网站、屏蔽垃圾广告网址的效果；同理也能禁止系统、软件、网站访问某些指定的网址；
	4. 开发或测试应用时，利用 hosts 将域名临时指向到测试服务器IP，可以方便自己测试，同时又不影响他人和线上的应用。

怎样修改 hosts？
hosts 属于系统文件，因此需要管理员权限才能对内容进行修改。
一行一个IP地址和域名的对应关系 ， 格式是「IP地址+空格+域名」

修改 hosts 后不生效怎么解决
原因：因为系统为了加快用户打开网站的速度，在首次访问网站成功之后，会把 DNS 解析的结果暂时性地保存在本地缓存 (称为 DNS 缓存) 里一小段时间，如果浏览器在“这段时间里”再次打开同一个网址，则会自动从 DNS 缓存里取出结果，而不会请求远程的 DNS 服务器，也不会查询 hosts 文件，从而节省时间提高打开速度

方案：
清空 (刷新) 一下系统的 DNS 缓存即可
清空DNS 缓存命令：sudo killall -HUP mDNSResponder

# 查看系统有几种shell ： cat /etc/shells
OS X 系统预装了个 zsh
 Linux 系统和 OS X 系统的默认 Shell 都是 bash
 但是真正强大的 Shell 是深藏不露的 zsh
 由于配置过于复杂，所以初期无人问津
 很多人跑过来看看 zsh 的配置指南，什么都不说转身就走了
 直到有一天，国外有个穷极无聊的程序员开发出了一个能够让你快速上手的zsh项目
 这玩意就像「X天叫你学会 C++」系列
 zsh 的配置主要集中在用户当前目录的.zshrc里
# JS 自动读取文件目录
```js
import fs from 'fs';
let files = []
function getFiles(path){
    fs.readdir(path,(err,files)=>{
        files.forEach(item => {
            fs.stat(path+'/'+item,(err,data)=>{
    				if(data.isFile()){
    				    files.push(item)
    				}else{
    				    getFiles(item)
    				}
        )
    })
}

```

# 获取对象属性长度
Object.keys(obj).length
# 删除对象
# js中合并多个对象的方法
# 正则匹配
# DS_Store文件

