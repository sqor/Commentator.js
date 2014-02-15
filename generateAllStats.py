#!/usr/bin/python

## Very simple python program to get stats for a given fileo


import sys

import os
# TODO: return if sys len <= 1

directoryPath = sys.argv[1]

# TODO make multiple dirs





jsFilePathsStr = os.popen("find " + directoryPath + " " + '-name "*.js"').read()



jsFilePaths = jsFilePathsStr.split("\n")


# Here we write a little .js file with our stats


print "var commentStats = ["
count = 0
for path in jsFilePaths:

    if ".js" in path:

        if count > 0:
            print ", "
        jsonResult = os.popen("./getCommentStats.py  " + path  ).read()
        print jsonResult
        count+=1
print "];"
