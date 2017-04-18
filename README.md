
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
The scroll magic scene is set up and attributes given that define the _trigger_ element and the _duration_ i.e. how long you need to scroll past the video to trigger a pause:
```
var scene = new ScrollMagic.Scene({triggerElement: "#uke", duration: 200})
```
This means that scroll magic is triggered when you scroll to the element with the ID _uke_ then scrolling 200px further will trigger it's end.

When the user scroll enters the trigger zone i.e. the areas between the _trigger_ and the end of _duration_, this function is fired off:
```
.on("enter", function () {
          ukeVid.play();
        })
```
When the user scrolls outside the trigger zone, this is fired off:
```
.on("leave", function () {
          ukeVid.pause();
        })
```

### What about audio?

Just use ``<audio id="your_ID" src="whatever.mp3"></audio>`` it uses the same controls as video.
