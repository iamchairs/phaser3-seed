window.onload = function() {
  var config: Phaser.IGameConfig = {
    width: 800,
    height: 600,
    forceSetTimeOut: false,
    renderer: Phaser.WEBGL
  };

  var game = new Phaser.Game(config);

  setTimeout(function() {
    // Ready
  });
}
