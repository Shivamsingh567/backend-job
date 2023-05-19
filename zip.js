const fs = require('fs');
const archiver = require('archiver');

// Name of the zip file to be created
const zipFileName = 'my-repo-new.zip';

// Source directory to be zipped
const sourceDirectory = '/home/shivamsingh/Desktop/puc/backend-job';

// Create a write stream for the zip file
const output = fs.createWriteStream(zipFileName);

// Create a new archiver object
const archive = archiver('zip', { zlib: { level: 9 } });

// Ignore the 'node_modules' directory
archive.glob('**/*', {
  cwd: sourceDirectory,
  ignore: ['**/node_modules/**']
});

// Show a loading message
console.log('Creating zip file...');

// Listen for the 'progress' event to show progress of zipping process
archive.on('progress', ( {entries} ) => {
  console.log("1111111111111111111111111111111111",entries)
  const filesZipped = entries.processed;
  console.log(`Zipping ${filesZipped} files...`);
});

// Pipe the output to the write stream
archive.pipe(output);

// Listen for the 'finish' event to show completion message
output.on('finish', () => {
  console.log(`Zip file created successfully: ${zipFileName}`);
});

// Listen for the 'error' event to show error message
archive.on('error', (err) => {
  console.error('Error while creating zip file:', err);
});

// Start the archiving process
archive.finalize();