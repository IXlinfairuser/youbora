videojs.plugin('youbora', function() {
  var player = this,
  if (player.youbora) {
     player.youbora({ 
        accountCode: 'settaiwandev', 
        media: {
           isLive: false,
           title: this.mediainfo.name
        },
        // Other OPTIONS 
    });
  }
});
