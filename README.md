Retinize simple pixel density tools
===================================

script based high pixel density support tools.

Example of use can be viewed here - http://codex.web-engineer.co.uk/examples/retinize/

To use this script we recommend including the compressed file (used in the demo)
Once included you then need to tell the script the densities you want to
support and the names of the corresponding style sheets.

```html
<script src="retinize.js" type="text/javascript"></script>
<script type="text/javascript">
	<!--
	Retinize.support(2,'rt-highrez.css');
	//-->
</script>
```


**Project structure**


*lib/demo/ *
A full working demo of the script in action. This contains a compressed version
of the retinize script, you should use this with your project.

*src*
The source code, commented.