# ElfieMobileAuto
start appium
appium

stop appium windows
taskkill /F /IM node.exe

Fix issue[0-0] Error: "ts-node/esm/transpile-only 'resolve'" did not call the next hook in its chain and did not explicitly signal a short circuit. If this is intentional, include `shortCircuit: true` in the hook's return.
The simplest way to get this running is to add typescript and ts-node to the project.
npm i -D typescript ts-node