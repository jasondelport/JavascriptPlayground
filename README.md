# JavascriptPlayground    

 
brew install node      
npm install    
node src/arrays.js       
npm run echo --first=Jason --last=Delport      
SERVER=development npm run demo      
node src/index.js --helloworld --hello:world     
node .     
npm run watch -- --watch // this double dash in the middle forces the command to be passed on the script    

https://levelup.gitconnected.com/5-javascript-tricks-that-are-good-to-know-78045dea6678        
https://4comprehension.com/busy-developers-guide-to-java-9-10-11-12-13-and-above/      
https://levelup.gitconnected.com/javascript-clean-code-objects-and-classes-49eb5a30e242      
https://hackernoon.com/16-javascript-protips-2020-edition-n7et32dd    

# TYPESCRIPT       

npm install -g typscript    
tsc    (runs the compiler using tsconfig.ts to create the js files in dist folder)     
node ./dist/hello.js     

# NPM      

https://docs.npmjs.com/cli/v6/commands      
npm outdated --long // check for outdated packages      
npm list         
npm prune // Remove extraneous packages         
npm ci // clean install      
npm run env // lists enviro variables      
npm run // lists scripts      
npm dedupe // remove duplicates      
npm audit fix      
npm doctor      
npm completion >> ~/.zshrc // enables the tab completion for the package.json     

#NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash    
nvm -v    
nvm install 12     
nvm ls   
nvm use system    
nvm alias default node     
nvm alias default 12    
nvm use node    
nvm use node 12   


