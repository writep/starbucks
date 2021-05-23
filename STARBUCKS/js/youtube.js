      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        //<div id="player"></div> 의 값이 아래의 #player에 속한다 
         new YT.Player('player', {
          videoId: '8OXfAOdysSo', //youtube에서 복사한 영상의 ID값
          playerVars: {
            autoplay:true,
            loop:true,
            playlist: '8OXfAOdysSo' //반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            onReady: function(event) {
              event.target.mute() //target은 재생되는 영상 자체를 의미한다 //음소거 처리
              
            }
          }
        });
      }