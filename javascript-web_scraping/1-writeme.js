#!/usr/bin/node
function readFileContent(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  readFileContent(my_file.txt)
    .then(content => console.log('File content:', content))
    .catch(error => console.error('Error:', error));
