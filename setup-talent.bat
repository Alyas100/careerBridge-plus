@echo off
cd /d "%~dp0"
mkdir "app\university\talent"
(
echo import { StudentTalentPoolPage } from "../../_components/portal";
echo.
echo export default function Page(^) {
echo   return ^<StudentTalentPoolPage /^>;
echo }
) > "app\university\talent\page.tsx"
echo Successfully created app\university\talent\page.tsx
