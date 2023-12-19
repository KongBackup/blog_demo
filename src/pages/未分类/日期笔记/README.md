---
category: MAC
date: 2023-12-19
---

# 12-19
## Github配置ssh key的步骤
### 一、检查本地主机是否已经存在ssh key
```bash
cd ~/.ssh
ls
# 看是否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
```
### 二、生成ssh key
```bash
ssh-keygen -t rsa -C "xxx@xxx.com"
```
### 三、 获取ssh key公钥内容
```bash
cd ~/.ssh
cat id_rsa.pub
```
### 四、Github账号上添加公钥
右上角头像 》 settings 》 左边菜单  SSH and GPG keys 》New SSH key 》 把获取ssh key公钥内容 贴进去》 保存
### 五、验证是否设置成功
```bash
ssh -T git@github.com
# 如果有以下提示 
# 不要直接enter ， 输入 yes 再 enter
The authenticity of host 'github.com (20.205.243.166)' can't be established.
ED25519 key fingerprint is SHA256:xxxxxxxx
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
