const s3FolderUpload = require('s3-folder-upload')

const accessKeyId = process.argv[process.argv.findIndex(a => a === '--id') + 1];
const accessKeySecret = process.argv[process.argv.findIndex(a => a === '--secret') + 1];

const directoryName = 'dist'
// I strongly recommend to save your credentials on a JSON or ENV variables, or command line args
const credentials = {
  accessKeyId: accessKeyId,
  secretAccessKey: accessKeySecret,
  region: "us-west-2",
  bucket: "thecanabrava-libtest"
}
const options = {
    useFoldersForFileTypes: false,
}

console.log(credentials);
s3FolderUpload(directoryName, credentials, options)