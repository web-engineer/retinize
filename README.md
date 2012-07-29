Retinize simple pixel density tools
===================================

script based high pixel density support tools.

Example of use can be viewed here - 
http://codex.web-engineer.co.uk/examples/retinize/

To use this script we recommend including the current release from the downloads
pags - https://github.com/web-engineer/retinize/downloads

After your standard CSS link in the <head> part of your document you will need
to include a link to "Retinize" as follows. Note the "Retinize.support" line is 
where you can specify the pixel densities you wish to support and their 
related style sheets. 

```html
<script src="retinize.js" type="text/javascript"></script>
<script type="text/javascript">
	<!--
	Retinize.support(2,'rt-highrez.css');
	//-->
</script>
```

**Project structure**

*lib/demo/*
A full working demo of the script in action. This contains a compressed version
of the retinize script, you should use this with your project.

*src*
The source code, commented.