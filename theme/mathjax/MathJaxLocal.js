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
      Macros: {
        norm: ['\\left\\lVert#1\\right\\rVert', 1],
				argmin: ['\\mathop{\\mathrm{arg\\,min}}'],
				argmax: ['\\mathop{\\mathrm{arg}\\,\\max}']
      }
		},
	"HTML-CSS": {
    scale          : 100,
    availableFonts : ["TeX"],
  }
});

// notify other scripts that this file has finished loading
MathJax.Ajax.loadComplete("MathJaxLocal.js");
