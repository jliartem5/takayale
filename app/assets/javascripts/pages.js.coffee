init = ->
  loaded = undefined
  myScroll = undefined
  loaded = ->
    myScroll = undefined
    myScroll = new iScroll("wrapper",
      hScrollbar: false
      fixedScrollbar: true
    )
  window.addEventListener "load", loaded, false

init()

((window, document, $, R) ->

  $("a").live("click", ->
    $(this).parent().parent().find($("dd")).removeClass("active")
    $(this).parent().addClass("active")
  ).pjax
    container: "#slide_temp"
    duration: 3000

  $("#slide_temp").live().bind 'pjax:start', ->
    $('#slides_container').append('<div class="slide slide_next"></div>')
    false

  $("#slide_temp").live().bind 'pjax:success', ->
    a = $('#slide_temp').html()
    $('.slide_next').html a
    $('.slide_next').dequeue().css(x: "100%").transition
      x: 0
      duration: 1000
      rotate: 0
      easing: "in-out"
    $('.slide_active').dequeue().css(x: "0").transition
      x: '-100%'
      duration: 1000
      rotate: 0
      easing: "in-out"
    , ->
      if $('#slides_container').children().size() >= 2
        $('#slides_container div').first().remove()
        $('#slide_temp div').remove()
    $('.slide_next').removeClass('slide_next').addClass('slide_active')

    false

    elem = $("#wrapper")
    elem.iscroll()

  false
) this, @document, @jQuery, @Response