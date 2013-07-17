Retinize simple responsive tools
===================================

Script based multi-device support including high pixel densities.

Example of use can be viewed here - 
http://codex.web-engineer.co.uk/example/highdpi_0.1.0/

Also see the wiki for an overview -
https://github.com/web-engineer/retinize/wiki

To use this script we recommend using the current compressed version bundled
in the example files within the release.
https://github.com/web-engineer/retinize/blob/responsive/lib/demo/retinize.js

After you include your standard CSS link(s) in the <head> part of your document 
you will need to include a link to "Retinize" as follows. Note the 
"Retinize.support" line is where you can specify the pixel densities you wish 
to support and their related style sheets. 

```html
<script src="retinize.js" type="text/javascript"></script>
<script type="text/javascript">
	Retinize.support(2,'rt-highrez.css'); 
</script>
```

You can use this script to automatically switch regular images to high density 
ones when possible using the following method -

```html
<script type="text/javascript">
Retinize.get('somefile.png', 128, 137);
</script>
<noscript><img src="somefile.png"/></noscript>
```

note - the naming convention for images is 
[YOURFILE]-x[DENSITY].[EXTENSION]
e.g. in the example above the double density version of **somefile.png** should 
be named **somefile-x2.png** on the server

Note - there is an optional fourth argument to Retinize.get, this can carry an
object containing any extra attributes you want to assign to your image.
For example to float an image right and to add alternate text you would write -

```html
<script type="text/javascript">
Retinize.get('somefile.png', 128, 137,{style:'float:right',alt:'some file'});
</script>
<noscript><img src="somefile.png" style="float:right" alt="some file"/></noscript>
```

An alternative to media queries - this script also provides support for multiple 
devices. When you add device support Retinize will automatically augment the
css class you specify when the browser is used at the scales you define.

To add support simply add the something like the following script inside the 
<body> part of your page. The addDeviceSupport method allows you to specify the
css clas, the minumum dimension and maximum dimension that this class will handle.

If you set min or max to 0 that constraint will be ignored - for instance -

```html
<script type="text/javascript">
Retinize.addDeviceSupport("ss_mobile",0,500);
Retinize.addDeviceSupport("ss_xlarge",1024,0);
Retinize.onResize();
</script>
```

Will use ss_mobile when the screen is smaller than or equel to 500 pixels wide.
Will use ss_xlarge when the screen is larger or equel to 1024 px wide.


**Project structure**

*lib/demo/*
A full working demo of the script in action. This contains a compressed version
of the retinize script, you should use this with your project.

*src*
The source code, commented.

**Get involved**

Pull requests and bug reports welcome.
You can also email us on support[at]web-engineer.co.uk with 
any feedback and suggestions.