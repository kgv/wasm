
`wasm-pack build --target web`

`[Convert]::ToBase64String([IO.File]::ReadAllBytes("pkg\wasm_bg.wasm")) | Set-Content wasm_base64.txt`

// @require      https://raw.githubusercontent.com/kgv/wasm/refs/heads/master/wasm.js
// @require      https://github.com/kgv/wasm/blob/master/wasm.js

GM_xmlhttpRequest({
  method: "GET",
  url: "https://github.com/kgv/wasm/blob/master/wasm.js",
  headers: {
    "Content-Type": "application/json"
  },
  onload: function(response) {
    console.log(response.responseText);
  }
});

// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-01-27
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @match        https://*.google.com/*
// @match        http://*.skazanie.com/*
// @match        http://*.bbgam.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

const { greet_and_log } = await GM.xmlHttpRequest({ url: "https://raw.githubusercontent.com/kgv/wasm/refs/heads/master/wasm.js" }).catch(e => console.error(e));
greet_and_log('name');
console.log('responseText');

(function () {
    'use strict';

    console.log(`window.name: ${window.name}`);
})();


---

const wasmUrl = 'https://raw.githubusercontent.com/kgv/wasm/refs/heads/master/wasm_bg.wasm'; // Replace with the actual URL

GM.xmlHttpRequest({
    method: "GET",
    url: wasmUrl,
    responseType: "arraybuffer", // Important: request as binary data
    onload: function(response) {
        const wasmBytes = response.response; // The ArrayBuffer data

        // Instantiate the WebAssembly module
        WebAssembly.instantiate(wasmBytes).then(wasmModule => {
            // wasmModule.instance.exports contains the Wasm functions
            console.log("Wasm module successfully loaded and instantiated:", wasmModule);

            // Example of calling an exported function (replace with your actual function name)
            // const result = wasmModule.instance.exports.yourWasmFunction();
            // console.log("Result from Wasm function:", result);

        }).catch(error => {
            console.error("Error instantiating WebAssembly module:", error);
        });
    },
    onerror: function(error) {
        console.error("GM.xmlHttpRequest failed to fetch the Wasm file:", error);
    }
});