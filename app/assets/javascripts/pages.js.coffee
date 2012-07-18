((window, document, $, R) ->
  jQuery.fn.extend renameAttr: (name, newName, removeData) ->
    val = undefined
    @each ->
      val = jQuery.attr(this, name)
      jQuery.attr this, newName, val
      jQuery.removeAttr this, name
      jQuery.removeData this, name.replace("data-", "")  if removeData isnt false
    
  $("a").live("click", ->
    $(this).parent().parent().find($("dd")).removeClass("active")
    $(this).parent().addClass("active")
    $(this).renameAttr "url", "test"
    false
  ).pjax
    container: "#slide_temp"
    duration: 3000

  $("#slide_temp").bind 'pjax:start', ->
    $('#slides_container').append('<div class="slide slide_next"></div>')
    false

  $("#slide_temp").bind 'pjax:end', ->
    a = $('#slide_temp').html()
    $('.slide_next').html a
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
  false
) this, @document, @jQuery, @Response