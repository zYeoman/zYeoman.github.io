#!/bin/bash
#
# Git daily commit
# Usage:
#   crontab -e
#   Add `0 4 * * * /path/to/blog/daily-update.sh`
#   Crontab will run daily-update.sh at 4:00 everyday.
#
# Author: Yongwen Zhuang
# Date: 2017-08-28

# Push to zYeoman.github.io
cd "$(dirname "$(readlink -f "$0")")" || exit
git pull
git add .
git commit -m ":pencil: daily update at $(date -Idate)"
proxychains git push

# Push to articles
cd _posts/ || exit
git add .
git commit -m ":pencil: daily update at $(date -Idate)"
proxychains git push
