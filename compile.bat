@echo off
cls
echo compiling...
rollup -c config/rollup.config.js && rollup -c config/jquery/rollup.config.js