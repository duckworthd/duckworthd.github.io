// configure mathjax
MathJax.Hub.Config({
	jax: ["input/TeX","output/HTML-CSS"],
  extensions: ["tex2jax.js","MathMenu.js","MathZoom.js"],
  tex2jax:
		{
			inlineMath     : [ ['$','$']  , ['\\(','\\)'] ],
			displayMath    : [ ['$$','$$'], ['\\[','\\]'] ],
			processEscapes : true
		},
	TeX:
		{
			equationNumbers: { autoNumber: "AMS" },
			TagSide: "left",
		},
	"HTML-CSS": {
    scale          : 50,
    availableFonts : ["TeX"],
  }
});

// notify other scripts that this file has finished loading
MathJax.Ajax.loadComplete("MathJaxLocal.js");
