export default class Video {
    constructor(parentID, url) {
        this.parentID = parentID;
        this.url = url;
    }
    render() {
        let parent = document.getElementById(this.parentID);
        let video = document.createElement("iframe");
        video.src = this.url;
        video.frameborder = 0;
        video.allowfullscreen = true;
        video.width = 640;
        video.height = 480;
        parent.appendChild(video);
    }
}

