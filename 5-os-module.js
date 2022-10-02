const os = require ("os")

const user = os.userInfo()
const uptime = os.uptime()

console.log(user);
console.log(uptime);

const currentOS = {
    user : os.userInfo(),
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    sysArchitecture: os.arch()
}

console.log(currentOS);