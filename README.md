# Commentator.js

Static analysis tool for Javsacript comments. It gives states on comment density, and also code and comment parity for projects that use a specific commenting style.

Run:

Note: for now just run inside this directory

``` ./build javascriptSourcePath desiredReportPath  ```

Tools:

Dependencies:

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



Everything is found inside
reports



-- 
[ ] display TODOS
[ ]  
 
