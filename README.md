# Commentator.js

Static analysis tool for Javsacript comments. It gives stats on things like:  comment density, lines of code, and also code and comment parity for projects that use a specific commenting style.


Here is an example of the HTML  graph generated:

![Commentator Screen Shot](https://raw.github.com/sqor/Commentator.js/master/commentator.png)


### Run:

Note: for now just run inside this directory

``` ./build javascriptSourcePath desiredReportPath  ```


### Dependencies:

espirma
npm
python 2.7
shell / bash


TODO:
 - clean out blank lines
 - copy template and generate stats inside a new folder
 - make build script take source dir and path

Steps:
- copy file
- remove blank lines
- count # of lines
- run espirma and get json 
- count comments from file


# NOTE: very early prototype
