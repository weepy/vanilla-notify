/*
Vanilla Notify
Use

  $.notify({
      html: '<p>Hello</p>',   // required
      klass: 'my class',      // default is ""
      delay: 40000            // 5000 is default
    })

By Jonah Fox
@weepy, jonahfox@gmail.com, parkerfox.co.uk
*/

;(function($) {
  var $notify, defaults = { klass: "", delay: 5000 }

  function remove(dom) {
    $(dom).fadeOut(function(){ $(this).remove() })
  }
    
  $.notify = function (opts) {
    opts.klass = opts.klass || defaults.klass // extend overwrites the defaults
    opts.delay = opts.delay || defaults.delay 
    
    var li = $("<li>").html(opts.html).addClass(opts.klass)
    li.click(function() { remove(this) })
    $notify.append(li)
    setTimeout(remove, opts.delay, li)
  }
  
  function render() {
    $notify = $("<ul>").attr("id", "notify")
    $("body").append($notify)
  }
  
  $().ready(render)
})(jQuery)

/* CSS
#notify { position: fixed; width: 10em; top: 1em; right: 1em; color: black; }
#notify li { margin:0em; line-height: 1em; margin-bottom: 1em; list-style: none; padding: 0.5em; background: #ddd; opacity: 0.85;}
#notify .error  {background: #fcc;}
#notify .notice {background: #cfc;}
*/