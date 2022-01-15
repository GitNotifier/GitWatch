const net = require('net');
const { spawn } = require('child_process');

const port = process.env.PORT ? (process.env.PORT - 100) : 3000;
process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;

const tryConnection = () => client.connect({ port }, () => {
  client.end();
  if (!startedElectron) {
    console.log('started Electron', port);
    startedElectron = true;

    const runner = spawn('npm', ['run', 'electron']);
    runner.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    runner.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    runner.on('exit', (code) => {
      console.log(`child process exited with code ${code.toString()}`);
    });
  }
});
tryConnection();

client.on('error', (() => {
  setTimeout(tryConnection, 1000);
}));
