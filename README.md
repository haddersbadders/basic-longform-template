
# A Basic Longform template (Scroll Magic controlling video playback)

This branch includes Scroll Magic, used to control the playback of a video. 

See ``index.html`` line 48 for inclusion of the video element:

```
<video id="uke" src="images/uke.mp4" controls></video>
```

In ``js/index.js``:

A variable _ukeVid_ is set up to allow easy access to the video element:
```
var ukeVid = document.getElementById('uke');
```

