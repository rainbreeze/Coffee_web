      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
          videoId: 'mCO-p7-uHVA',
          playerVars: {
            autoplay: 1,  // '1'으로 설정하여 자동 재생
            loop: 1,      // '1'으로 설정하여 루프 재생
            playlist: 'mCO-p7-uHVA',  // 반복 재생을 위한 playlist 설정
            mute: 1
          }
        });
      }

      const spyEls = document.querySelectorAll('section.scroll-spy');

      spyEls.forEach(function(spyEl){
        new ScrollMagic
        .Scene({
          triggerElement: spyEl,
          triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
      });