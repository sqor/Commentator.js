# First part is the source, second the destition
cp -rf template $2
./generateAllStats.py ${1}  > ${2}/stats.js 

