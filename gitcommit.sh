echo "start commit code"
pnpx docusaurus-mdx-checker
git add .
git commit -m "`date "+%Y-%m-%d %H:%M:%S"`"
git push
echo "push successfull"
pause
