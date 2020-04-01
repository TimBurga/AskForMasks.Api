pushd

rem git add .
rem git commit -am "UI update before deployment"
rem git push
if %ERRORLEVEL% GEQ 1 goto Error

cd ..

call npm run build
if %ERRORLEVEL% GEQ 1 goto Error

cd firebase

Echo "Copying..."
xcopy /y /s ..\dist\* public
if %ERRORLEVEL% GEQ 1 goto Error
Echo "Finished copying..."

firebase deploy --only hosting:askformasks-ede29
if %ERRORLEVEL% GEQ 1 goto Error

Goto End

:Error
Echo "Error"

:End
popd