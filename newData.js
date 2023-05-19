// const { spawn } = require('child_process');

// // Open a new terminal window
// spawn('gnome-terminal', [], {
//   detached: true,
//   stdio: 'ignore'
// });

// // Run a command in the new terminal window
// spawn('gnome-terminal', ['-e', 'ls'], {
//   detached: true,
//   stdio: 'ignore'
// });


// const { exec } = require('child_process');

// // Open a new terminal window
// exec('sudo gnome-terminal', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Execute a command in the new terminal window
//   exec('ls', (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     // console.log(stdout);
//   })
// });



function openTerminal() {
    // Open a new window with the terminal command
    window.open('data:text/html,<html><body><pre>' + escape('ls\n') + '</pre></body></html>', 'Terminal');
  }

  openTerminal()