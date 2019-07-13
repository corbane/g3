
all: 
	tsc -p ./client
	tsc -p ./worker
	cp ./worker/compiler/lib.webworker.d.ts      ./docs/build/lib.webworker.d.ts
	cp ./worker/compiler/typescriptServices.d.ts ./docs/build/typescriptServices.d.ts
	cp ./worker/compiler/typescriptServices.js   ./docs/build/typescriptServices.js
