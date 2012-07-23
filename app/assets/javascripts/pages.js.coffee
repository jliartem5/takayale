$(window).load ->
    $(".flexslider").flexslider
      animationSpeed: 1000
      keyboard: true
      controlNav: true
      directionNav: true

size =      
  initSize: -> 
    Response.action ->
      R = window.Response
      width = R.viewportW()
      height = R.viewportH()
      ratioWidth = (height / 10) * 16
      ratioHeight = (width / 16) * 10
      containerWidth = $('.slide_active').width()
      mobileWidth = $('#scroller ul.row').width()

      if (width < 852)
        $('#scroller ul.row li').css
          "width": mobileWidth

      $('body').css
        "width": width
        "height": height

      $('.slides').css
        "width": containerWidth
        "height": height

      $(".slides li img").css
        "height": height
        "width": ratioWidth
        "max-width": ratioWidth

size.initSize()

((window, document, $, R) ->
  jQuery.fn.idle = (time) ->
    i = $(this)
    i.queue ->
      setTimeout (->
        i.dequeue()
      ), time

  current_page = $(".slide_active").children().attr("id")
  $("#main-nav a[href*="+current_page+"]").parent().addClass("active")

  $("header a").live("click", ->
    $(this).parent().parent().find($("dd")).removeClass("active")
    $(this).parent().addClass("active")
    false
  ).pjax
    container: "#slide_temp"
    duration: 3000

  $("#slide_temp").bind 'pjax:start', ->
    if $('#main-content .slide_active .wrapper').children().size() > 1
      $('#main-content .slide_active .wrapper > div').last().hide().remove()
    $('#slides_container').append('<div class="slide slide_next"></div>')
    false

  $("#slide_temp").bind 'pjax:end', ->
    a = $('#slide_temp').html()
    $('.slide_next').html a
    $(".flexslider").flexslider
      animationSpeed: 1000
      keyboard: true
      controlNav: true
      directionNav: true
    size.initSize()
    $('.slide_next').dequeue().css(x: "100%").transition
      x: 0
      duration: 1000
      rotate: 0
      scale: 1
      easing: "in-out"
    $('.slide_active').dequeue().css(x: "0").transition
      x: '-100%'
      duration: 1000
      rotate: 0
      scale: 1
      easing: "in-out"
    , ->
      if $('#slides_container').children().size() >= 2
        $('#slides_container div').first().remove()
        elem = $(".wrapper")
        elem.iscroll()
    $('.slide_next').addClass('slide_active').removeClass('slide_next')
    $('body').toggleClass('active')  
    false

  elem = $(".wrapper")
  elem.iscroll()
  init()
  false
) this, @document, @jQuery, @Response