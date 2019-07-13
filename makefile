
all: 
	tsc -p ./client
	tsc -p ./worker
	cp ./worker/compiler/lib.webworker.d.ts      ./build/lib.webworker.d.ts
	cp ./worker/compiler/typescriptServices.d.ts ./build/typescriptServices.d.ts
	cp ./worker/compiler/typescriptServices.js   ./build/typescriptServices.js
