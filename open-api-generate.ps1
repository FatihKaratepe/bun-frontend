$G = "typescript-axios"
$C = "./open-api-generator-config.json"
$O = "./src/apis/"
$I = "http://localhost:3000/swagger.json"

Get-ChildItem -Path "$O*/interfaces/*" -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force
Get-ChildItem -Path "$O*/services/*"   -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force

bunx --bun openapi-generator-cli generate `
  -i $I `
  -g $G `
  -o $O `
  -c $C
