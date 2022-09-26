@echo off
cls
rollup -c config/rollup.config.js && rollup -c config/jquery/rollup.config.js && rollup -c config/styles/rollup.config.js && echo.
