
`wasm-pack build --target web`


## Build

1. `wasm-pack build --target no-modules`
2. `[Convert]::ToBase64String([IO.File]::ReadAllBytes("pkg\wasm_bg.wasm")) | Set-Content wasm_base64.txt`
