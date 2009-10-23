Vanilla Notify 
--------------

After Playing around with _lots_ Growlesque plugins for jQuery, I came to the impression that whilst they mostly looked nice, they all were very bloated and difficult to customize.

So - of course - I rolled my own! Only this one is different. It's bit like a single scoop of momma's best homemade vanilla in a fancy ice creamshop: it doesn't have curvy corners, or callbacks, or other distractions. It's solid, works well, looks pretty decent and - oh - it's only _20_ lines of code!

Being simple means it's very easy to understand and easy to change to your own tastes.

Installation
---

* include vanilla-notify.js
* depends on jQuery (1.3.2 tested)
* include the following CSS somewhere

<pre>
  #notify { position: fixed; width: 10em; top: 1em; right: 1em; color: black; }
  #notify li { margin:0em; line-height: 1em; margin-bottom: 1em; list-style: none; padding: 0.5em; background: #ddd; opacity: 0.85;}
  #notify .error  {background: #fcc;}
  #notify .notice {background: #cfc;}  
</pre>

Calling
---

Uses the semi-standard $.notify

<pre> $.notify({html: 'Hello'}) </pre>

Can put any html inside

<pre> $.notify({html: '<h1>Hello</h1><p><img='myicon.icon' />Hi there </p>'}) </pre>

There is also a klass option, which adds the klass to the notification. This class can be used to style

<pre> $.notify({html: 'With class: error', klass: 'error' }) </pre>

There's also a delay, which defaults to 5000. It's the time before the notification fades out. Set it to something big to make it sticky.

<pre> $.notify({html: "I'll be here for 7610.4 years!", delay: 1e10 }) </pre>



Links
----


* [Javascript File](http://github.com/weepy/vanilla-notify/raw/master/vanilla-notify.js)
* [Github Project](http://github.com/weepy/vanilla-notify)
* [Issue Tracker](http://github.com/weepy/vanilla-notify/issues)
* [Blog Post](http://blog.parkerfox.co.uk/2009/10/07/jquery-sprite-factory/)

Compatibility
----

Tested in

* Firefox 3.5
* Safari 4
* IE 6, 7, 8

