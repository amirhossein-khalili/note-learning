@echo off
rem دستورات برای اجرای سرور
cd .\server-note\
start npm start

rem انتظار برای اجرای سرور
timeout /nobreak /t 10

rem دستورات برای اجرای کلاینت
cd ..\client-note\note\
start npm run dev
