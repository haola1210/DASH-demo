# resumable file uploading with TUS
[client](https://uppy.io/docs/tus/) lib

[server](https://github.com/tus/tus-node-server) lib

## requirement:
- able to upload a large file (show progess bar, pause, resume, cancel)
- notify client when finishing uploading
- generate multiple resolutions of the uploaded file
- notify client the status of previous step
- split the uploaded file (all resolutions of it) into small pieces
- store all pieces in server (static binary files)
- store path of them into db 
- notify client the status of previous step

template url: 
```js
  domain/videos/[`video-peice-id`]/[`resolution`]
```

## process:
- upload the large file with TUS and temporary store in `uploads`
- after finishing the uploading, we read the file then split it. after that we store pieces in `resources`