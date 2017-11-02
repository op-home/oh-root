#!/usr/bin/env bash
read -p "输入提交说明：" cmtDsc
git add .
git commit -m $cmtDsc
git push origin -u master
scp -rp config/* root@101.132.121.47:/web-projects/ophome-service/oh-root/config/
