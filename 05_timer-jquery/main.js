$(document).ready(function () {
  let cnt = 0, running = false, interval;
  $('button').click(function () {
    if (running) {
      $('#running').slideUp();
      $('button').text('start')
      clearInterval(interval)
      running = false
    }else {
      $('#running').slideDown();
      $('button').text('stop')
      running = true
      interval = setInterval(function () {
        cnt = cnt + 1
        $('#seconds').text(Math.floor(cnt/10))
        $('.dots div:last-child').prependTo($('.dots'))
      }, 100)
    }
  })
})
