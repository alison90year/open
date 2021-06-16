<template>
  <div id="video_container"></div>
</template>
<script>
export default {
  name: 'VideoPlayer',
  props: {
    url: {
      type: String,
      required: true,
      default: "http://ivi.bupt.edu.cn/hls/xjtv.m3u8"
    },
    width: {
      type: Number,
      required: false,
      default: 1000
    },
    height: {
      type: Number,
      required: false,
      default: 556
    }
  },
  mounted () {
    new this.TcPlayer('video_container', {
      "m3u8": this.url, // 原画m3u8 播放URL
      "m3u8_hd": this.url, // 高清m3u8 播放URL
      "m3u8_sd": this.url, // 标清m3u8 播放URL
      "flv": this.url, // 原画flv 播放URL
      "flv_hd": this.url, // 高清flv 播放URL
      "flv_sd": this.url, // 标清flv 播放URL
      "mp4": this.url,
      "mp4_hd": this.url,
      "mp4_sd": this.url,
      "rtmp": this.url,
      "rtmp_hd": this.url,
      "rtmp_sd": this.url,
      "autoplay": true,
      "width": this.width,
      "height": this.height
    });
  }
}
</script>