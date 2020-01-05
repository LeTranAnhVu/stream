# Stream app
###How to run:
- Download OBS software (OBS) for streaming : https://obsproject.com/
- In each server `client`, `rtmpServer`, `server` and run `yarn start` or `npm start`.
- Open OBS and create new stream, go to `settings -> stream` config :
    - Service: `custom`
    - Server: `rtmp://localhost/live` 
    - Stream Key: `YOUR_PARTICULAR_STREAM_ID`