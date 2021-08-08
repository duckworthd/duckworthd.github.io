// configure mathjax
window.MathJax = {
  jax: ["input/TeX","output/HTML-CSS"],
  tex: {
    inlineMath     : [ ['$','$']  , ['\\(','\\)'] ],
    displayMath    : [ ['$$','$$'], ['\\[','\\]'] ],
    macros: {
      norm: ['\\left\\lVert#1\\right\\rVert', 1],
      argmin: ['\\mathop{\\mathrm{arg\\,min}}'],
      argmax: ['\\mathop{\\mathrm{arg}\\,\\max}']
    },
    processEscapes : true
  },
};
