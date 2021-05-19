const {execSync} = require('child_process');
const ex = (cmd) => {
    console.log("Running: ", cmd);
    execSync(cmd);
}
ex('cd apps/auth && npm run build');
ex('cd apps/comments && npm run build');
ex('cd apps/posts && npm run build');
ex('cd apps/gateway && npm run build');
ex('cd packages/api-server && npm run build');
ex('cd packages/forum-db && npm run build');