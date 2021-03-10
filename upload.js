const s3FolderUpload = require('s3-folder-upload')
// or the ES6 way
// import s3FolderUpload from 's3-folder-upload'

const directoryName = 'dist'
// I strongly recommend to save your credentials on a JSON or ENV variables, or command line args
const credentials = {
  "accessKeyId": "AKIA3AQGWMKLAVLVVBM7",
  "secretAccessKey": "J2u51qVNPs+5NAZkfSRuvLx/SL9CzLk0sV3711kC",
  "region": "us-west-2",
  "bucket": "thecanabrava-libtest"
}
const options = {
    useFoldersForFileTypes: false,
}


s3FolderUpload(directoryName, credentials, options)