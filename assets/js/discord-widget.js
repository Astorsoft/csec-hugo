var discordCallback = function() {
 discordWidget.init({
   serverId: '243858851026305024',
   title: 'Notre canal Discord',
   join: true,
   alphabetical: false,
   theme: 'dark',
   hideChannels: ['Channel Name 1', 'Channel Name 2'],
   showAllUsers: true,
   allUsersDefaultState: false,
   showNick: false
 });
 discordWidget.render();
}
if (window.screen.availWidth >= 1024) {

   var src = "//cdn.jsdelivr.net/discord-widget/latest/discord-widget.min.js";
   var newScript = document.createElement("script");
   newScript.type = "text/javascript";
   newScript.setAttribute("async", "true");
   newScript.setAttribute("src", src);
   newScript.onload = discordCallback;
  newScript.onreadystatechange = function() {
      if(this.readyState == 'complete') {
            discordCallback();
      }
  };
  document.getElementsByTagName('head')[0].appendChild(newScript);
}
