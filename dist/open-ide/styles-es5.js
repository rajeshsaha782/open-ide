(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* BASICS */\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n/* PADDING */\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n/* GUTTER */\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n/* CURSOR */\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n.cm-tab { display: inline-block; text-decoration: inherit; }\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n/* DEFAULT THEME */\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n.CodeMirror-composing { border-bottom: 2px solid; }\n/* Default styles for common addons */\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n/* STOP */\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n.CodeMirror-widget {}\n.CodeMirror-rtl pre { direction: rtl; }\n.CodeMirror-code {\n  outline: none;\n}\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-variable-2 { color: #80CBC4; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #82B1FF; }\n.cm-s-material .cm-builtin { color: #DECB6B; }\n.cm-s-material .cm-atom { color: #F77669; }\n.cm-s-material .cm-number { color: #F77669; }\n.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-string { color: #C3E88D; }\n.cm-s-material .cm-string-2 { color: #80CBC4; }\n.cm-s-material .cm-comment { color: #546E7A; }\n.cm-s-material .cm-variable { color: #82B1FF; }\n.cm-s-material .cm-tag { color: #80CBC4; }\n.cm-s-material .cm-meta { color: #80CBC4; }\n.cm-s-material .cm-attribute { color: #FFCB6B; }\n.cm-s-material .cm-property { color: #80CBAE; }\n.cm-s-material .cm-qualifier { color: #DECB6B; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #DECB6B; }\n.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n.cm-s-twilight.CodeMirror { background: #141414; color: #f7f7f7; }\n/**/\n.cm-s-twilight div.CodeMirror-selected { background: #323232; }\n/**/\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n.cm-s-twilight .CodeMirror-line::selection, .cm-s-twilight .CodeMirror-line > span::selection, .cm-s-twilight .CodeMirror-line > span > span::selection { background: rgba(50, 50, 50, 0.99); }\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n.cm-s-twilight .CodeMirror-gutters { background: #222; border-right: 1px solid #aaa; }\n.cm-s-twilight .CodeMirror-guttermarker { color: white; }\n.cm-s-twilight .CodeMirror-guttermarker-subtle { color: #aaa; }\n.cm-s-twilight .CodeMirror-linenumber { color: #aaa; }\n.cm-s-twilight .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-twilight .cm-keyword { color: #f9ee98; }\n/**/\n.cm-s-twilight .cm-atom { color: #FC0; }\n.cm-s-twilight .cm-number { color:  #ca7841; }\n/**/\n.cm-s-twilight .cm-def { color: #8DA6CE; }\n.cm-s-twilight span.cm-variable-2, .cm-s-twilight span.cm-tag { color: #607392; }\n/**/\n.cm-s-twilight span.cm-variable-3, .cm-s-twilight span.cm-def, .cm-s-twilight span.cm-type { color: #607392; }\n/**/\n.cm-s-twilight .cm-operator { color: #cda869; }\n/**/\n.cm-s-twilight .cm-comment { color:#777; font-style:italic; font-weight:normal; }\n/**/\n.cm-s-twilight .cm-string { color:#8f9d6a; font-style:italic; }\n/**/\n.cm-s-twilight .cm-string-2 { color:#bd6b18; }\n/*?*/\n.cm-s-twilight .cm-meta { background-color:#141414; color:#f7f7f7; }\n/*?*/\n.cm-s-twilight .cm-builtin { color: #cda869; }\n/*?*/\n.cm-s-twilight .cm-tag { color: #997643; }\n/**/\n.cm-s-twilight .cm-attribute { color: #d6bb6d; }\n/*?*/\n.cm-s-twilight .cm-header { color: #FF6400; }\n.cm-s-twilight .cm-hr { color: #AEAEAE; }\n.cm-s-twilight .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }\n/**/\n.cm-s-twilight .cm-error { border-bottom: 1px solid red; }\n.cm-s-twilight .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-twilight .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzIiwibm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvdGhlbWUvbWF0ZXJpYWwuY3NzIiwibm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvdGhlbWUvdHdpbGlnaHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQ0E5RSxXQUFXO0FBRVg7RUFDRSxnRUFBZ0U7RUFDaEUsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUVBLFlBQVk7QUFFWjtFQUNFLGNBQWMsRUFBRSxvQ0FBb0M7QUFDdEQ7QUFDQTtFQUNFLGNBQWMsRUFBRSxrQ0FBa0M7QUFDcEQ7QUFFQTtFQUNFLHVCQUF1QixFQUFFLGlEQUFpRDtBQUM1RTtBQUVBLFdBQVc7QUFFWDtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0EseUJBQXlCO0FBQ3pCO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBLDJCQUEyQixZQUFZLEVBQUU7QUFDekMsa0NBQWtDLFdBQVcsRUFBRTtBQUUvQyxXQUFXO0FBRVg7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBLDZDQUE2QztBQUM3QztFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdEQUFnRDtFQUVoRCx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0RBQWdEO0VBRWhELHdDQUF3QztFQUN4QyxzQkFBc0I7QUFDeEI7QUFNQTtFQUNFLElBQUk7RUFDSixNQUFNLDZCQUE2QixFQUFF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LEVBQUU7QUFBRSxJQUFJO0FBQ25ELHlCQUF5QixjQUFjLEVBQUU7QUFBRSxHQUFHO0FBQzlDLCtCQUErQixjQUFjLEVBQUU7QUFBRSxJQUFJO0FBQ3JELDRCQUE0QixjQUFjLEVBQUU7QUFDNUMsd0JBQXdCLGNBQWMsRUFBRTtBQUN4QywwQkFBMEIsYUFBYSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFO0FBQUUsR0FBRztBQUN2RiwyQkFBMkIsNEJBQTRCLEVBQUU7QUFFekQsbURBQW1ELG1CQUFtQixFQUFFO0FBQ3hFLDZDQUE2QyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJ+Y29kZW1pcnJvci9saWIvY29kZW1pcnJvclwiO1xuQGltcG9ydCBcIn5jb2RlbWlycm9yL3RoZW1lL21hdGVyaWFsXCI7XG5AaW1wb3J0IFwifmNvZGVtaXJyb3IvdGhlbWUvdHdpbGlnaHRcIjtcbiIsIi8qIEJBU0lDUyAqL1xuXG4uQ29kZU1pcnJvciB7XG4gIC8qIFNldCBoZWlnaHQsIHdpZHRoLCBib3JkZXJzLCBhbmQgZ2xvYmFsIGZvbnQgcHJvcGVydGllcyBoZXJlICovXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi8qIFBBRERJTkcgKi9cblxuLkNvZGVNaXJyb3ItbGluZXMge1xuICBwYWRkaW5nOiA0cHggMDsgLyogVmVydGljYWwgcGFkZGluZyBhcm91bmQgY29udGVudCAqL1xufVxuLkNvZGVNaXJyb3IgcHJlIHtcbiAgcGFkZGluZzogMCA0cHg7IC8qIEhvcml6b250YWwgcGFkZGluZyBvZiBjb250ZW50ICovXG59XG5cbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogVGhlIGxpdHRsZSBzcXVhcmUgYmV0d2VlbiBIIGFuZCBWIHNjcm9sbGJhcnMgKi9cbn1cblxuLyogR1VUVEVSICovXG5cbi5Db2RlTWlycm9yLWd1dHRlcnMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLkNvZGVNaXJyb3ItbGluZW51bWJlcnMge31cbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICBwYWRkaW5nOiAwIDNweCAwIDVweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciB7IGNvbG9yOiBibGFjazsgfVxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjOTk5OyB9XG5cbi8qIENVUlNPUiAqL1xuXG4uQ29kZU1pcnJvci1jdXJzb3Ige1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHdpZHRoOiAwO1xufVxuLyogU2hvd24gd2hlbiBtb3ZpbmcgaW4gYmktZGlyZWN0aW9uYWwgdGV4dCAqL1xuLkNvZGVNaXJyb3IgZGl2LkNvZGVNaXJyb3Itc2Vjb25kYXJ5Y3Vyc29yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBzaWx2ZXI7XG59XG4uY20tZmF0LWN1cnNvciAuQ29kZU1pcnJvci1jdXJzb3Ige1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM3ZTc7XG59XG4uY20tZmF0LWN1cnNvciBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgei1pbmRleDogMTtcbn1cbi5jbS1mYXQtY3Vyc29yLW1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyNTUsIDIwLCAwLjUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbn1cbi5jbS1hbmltYXRlLWZhdC1jdXJzb3Ige1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlNztcbn1cbkAtbW96LWtleWZyYW1lcyBibGluayB7XG4gIDAlIHt9XG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIDEwMCUge31cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XG4gIDAlIHt9XG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIDEwMCUge31cbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7fVxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAxMDAlIHt9XG59XG5cbi8qIENhbiBzdHlsZSBjdXJzb3IgZGlmZmVyZW50IGluIG92ZXJ3cml0ZSAobm9uLWluc2VydCkgbW9kZSAqL1xuLkNvZGVNaXJyb3Itb3ZlcndyaXRlIC5Db2RlTWlycm9yLWN1cnNvciB7fVxuXG4uY20tdGFiIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IH1cblxuLkNvZGVNaXJyb3ItcnVsZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAtNTBweDsgYm90dG9tOiAtMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5Db2RlTWlycm9yLXJ1bGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4vKiBERUZBVUxUIFRIRU1FICovXG5cbi5jbS1zLWRlZmF1bHQgLmNtLWhlYWRlciB7Y29sb3I6IGJsdWU7fVxuLmNtLXMtZGVmYXVsdCAuY20tcXVvdGUge2NvbG9yOiAjMDkwO31cbi5jbS1uZWdhdGl2ZSB7Y29sb3I6ICNkNDQ7fVxuLmNtLXBvc2l0aXZlIHtjb2xvcjogIzI5Mjt9XG4uY20taGVhZGVyLCAuY20tc3Ryb25nIHtmb250LXdlaWdodDogYm9sZDt9XG4uY20tZW0ge2ZvbnQtc3R5bGU6IGl0YWxpYzt9XG4uY20tbGluayB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxuLmNtLXN0cmlrZXRocm91Z2gge3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO31cblxuLmNtLXMtZGVmYXVsdCAuY20ta2V5d29yZCB7Y29sb3I6ICM3MDg7fVxuLmNtLXMtZGVmYXVsdCAuY20tYXRvbSB7Y29sb3I6ICMyMTk7fVxuLmNtLXMtZGVmYXVsdCAuY20tbnVtYmVyIHtjb2xvcjogIzE2NDt9XG4uY20tcy1kZWZhdWx0IC5jbS1kZWYge2NvbG9yOiAjMDBmO31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLFxuLmNtLXMtZGVmYXVsdCAuY20tcHVuY3R1YXRpb24sXG4uY20tcy1kZWZhdWx0IC5jbS1wcm9wZXJ0eSxcbi5jbS1zLWRlZmF1bHQgLmNtLW9wZXJhdG9yIHt9XG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZS0yIHtjb2xvcjogIzA1YTt9XG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZS0zLCAuY20tcy1kZWZhdWx0IC5jbS10eXBlIHtjb2xvcjogIzA4NTt9XG4uY20tcy1kZWZhdWx0IC5jbS1jb21tZW50IHtjb2xvcjogI2E1MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1zdHJpbmcge2NvbG9yOiAjYTExO31cbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZy0yIHtjb2xvcjogI2Y1MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1tZXRhIHtjb2xvcjogIzU1NTt9XG4uY20tcy1kZWZhdWx0IC5jbS1xdWFsaWZpZXIge2NvbG9yOiAjNTU1O31cbi5jbS1zLWRlZmF1bHQgLmNtLWJ1aWx0aW4ge2NvbG9yOiAjMzBhO31cbi5jbS1zLWRlZmF1bHQgLmNtLWJyYWNrZXQge2NvbG9yOiAjOTk3O31cbi5jbS1zLWRlZmF1bHQgLmNtLXRhZyB7Y29sb3I6ICMxNzA7fVxuLmNtLXMtZGVmYXVsdCAuY20tYXR0cmlidXRlIHtjb2xvcjogIzAwYzt9XG4uY20tcy1kZWZhdWx0IC5jbS1ociB7Y29sb3I6ICM5OTk7fVxuLmNtLXMtZGVmYXVsdCAuY20tbGluayB7Y29sb3I6ICMwMGM7fVxuXG4uY20tcy1kZWZhdWx0IC5jbS1lcnJvciB7Y29sb3I6ICNmMDA7fVxuLmNtLWludmFsaWRjaGFyIHtjb2xvcjogI2YwMDt9XG5cbi5Db2RlTWlycm9yLWNvbXBvc2luZyB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZDsgfVxuXG4vKiBEZWZhdWx0IHN0eWxlcyBmb3IgY29tbW9uIGFkZG9ucyAqL1xuXG5kaXYuQ29kZU1pcnJvciBzcGFuLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHtjb2xvcjogIzBiMDt9XG5kaXYuQ29kZU1pcnJvciBzcGFuLkNvZGVNaXJyb3Itbm9ubWF0Y2hpbmdicmFja2V0IHtjb2xvcjogI2EyMjt9XG4uQ29kZU1pcnJvci1tYXRjaGluZ3RhZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTAsIDAsIC4zKTsgfVxuLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHtiYWNrZ3JvdW5kOiAjZThmMmZmO31cblxuLyogU1RPUCAqL1xuXG4vKiBUaGUgcmVzdCBvZiB0aGlzIGZpbGUgY29udGFpbnMgc3R5bGVzIHJlbGF0ZWQgdG8gdGhlIG1lY2hhbmljcyBvZlxuICAgdGhlIGVkaXRvci4gWW91IHByb2JhYmx5IHNob3VsZG4ndCB0b3VjaCB0aGVtLiAqL1xuXG4uQ29kZU1pcnJvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5Db2RlTWlycm9yLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDsgLyogVGhpbmdzIHdpbGwgYnJlYWsgaWYgdGhpcyBpcyBvdmVycmlkZGVuICovXG4gIC8qIDMwcHggaXMgdGhlIG1hZ2ljIG1hcmdpbiB1c2VkIHRvIGhpZGUgdGhlIGVsZW1lbnQncyByZWFsIHNjcm9sbGJhcnMgKi9cbiAgLyogU2VlIG92ZXJmbG93OiBoaWRkZW4gaW4gLkNvZGVNaXJyb3IgKi9cbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7IG1hcmdpbi1yaWdodDogLTMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7IC8qIFByZXZlbnQgZHJhZ2dpbmcgZnJvbSBoaWdobGlnaHRpbmcgdGhlIGVsZW1lbnQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkNvZGVNaXJyb3Itc2l6ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yaWdodDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLyogVGhlIGZha2UsIHZpc2libGUgc2Nyb2xsYmFycy4gVXNlZCB0byBmb3JjZSByZWRyYXcgZHVyaW5nIHNjcm9sbGluZ1xuICAgYmVmb3JlIGFjdHVhbCBzY3JvbGxpbmcgaGFwcGVucywgdGh1cyBwcmV2ZW50aW5nIHNoYWtpbmcgYW5kXG4gICBmbGlja2VyaW5nIGFydGlmYWN0cy4gKi9cbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIsIC5Db2RlTWlycm9yLWhzY3JvbGxiYXIsIC5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uQ29kZU1pcnJvci12c2Nyb2xsYmFyIHtcbiAgcmlnaHQ6IDA7IHRvcDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uQ29kZU1pcnJvci1oc2Nyb2xsYmFyIHtcbiAgYm90dG9tOiAwOyBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIge1xuICByaWdodDogMDsgYm90dG9tOiAwO1xufVxuLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIGxlZnQ6IDA7IGJvdHRvbTogMDtcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAzO1xufVxuLkNvZGVNaXJyb3ItZ3V0dGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuLkNvZGVNaXJyb3ItZ3V0dGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBib3R0b206IDA7XG4gIHotaW5kZXg6IDQ7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItZWx0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHotaW5kZXg6IDQ7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciA6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH1cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCB9XG5cbi5Db2RlTWlycm9yLWxpbmVzIHtcbiAgY3Vyc29yOiB0ZXh0O1xuICBtaW4taGVpZ2h0OiAxcHg7IC8qIHByZXZlbnRzIGNvbGxhcHNpbmcgYmVmb3JlIGZpcnN0IGRyYXcgKi9cbn1cbi5Db2RlTWlycm9yIHByZSB7XG4gIC8qIFJlc2V0IHNvbWUgc3R5bGVzIHRoYXQgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgbWlnaHQgaGF2ZSBzZXQgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7IGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb250ZXh0dWFsO1xuICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb250ZXh0dWFsO1xufVxuLkNvZGVNaXJyb3Itd3JhcCBwcmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xufVxuXG4uQ29kZU1pcnJvci1saW5lYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDsgYm90dG9tOiAwO1xuICB6LWluZGV4OiAwO1xufVxuXG4uQ29kZU1pcnJvci1saW5ld2lkZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAwLjFweDsgLyogRm9yY2Ugd2lkZ2V0IG1hcmdpbnMgdG8gc3RheSBpbnNpZGUgb2YgdGhlIGNvbnRhaW5lciAqL1xufVxuXG4uQ29kZU1pcnJvci13aWRnZXQge31cblxuLkNvZGVNaXJyb3ItcnRsIHByZSB7IGRpcmVjdGlvbjogcnRsOyB9XG5cbi5Db2RlTWlycm9yLWNvZGUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBGb3JjZSBjb250ZW50LWJveCBzaXppbmcgZm9yIHRoZSBlbGVtZW50cyB3aGVyZSB3ZSBleHBlY3QgaXQgKi9cbi5Db2RlTWlycm9yLXNjcm9sbCxcbi5Db2RlTWlycm9yLXNpemVyLFxuLkNvZGVNaXJyb3ItZ3V0dGVyLFxuLkNvZGVNaXJyb3ItZ3V0dGVycyxcbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLkNvZGVNaXJyb3ItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uQ29kZU1pcnJvci1jdXJzb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLkNvZGVNaXJyb3ItbWVhc3VyZSBwcmUgeyBwb3NpdGlvbjogc3RhdGljOyB9XG5cbmRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cbmRpdi5Db2RlTWlycm9yLWRyYWdjdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLkNvZGVNaXJyb3ItZm9jdXNlZCBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZDlkOWQ5OyB9XG4uQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxuLkNvZGVNaXJyb3ItY3Jvc3NoYWlyIHsgY3Vyc29yOiBjcm9zc2hhaXI7IH1cbi5Db2RlTWlycm9yLWxpbmU6OnNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46OnNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XG4uQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxuXG4uY20tc2VhcmNoaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgLjQpO1xufVxuXG4vKiBVc2VkIHRvIGZvcmNlIGEgYm9yZGVyIG1vZGVsIGZvciBhIG5vZGUgKi9cbi5jbS1mb3JjZS1ib3JkZXIgeyBwYWRkaW5nLXJpZ2h0OiAuMXB4OyB9XG5cbkBtZWRpYSBwcmludCB7XG4gIC8qIEhpZGUgdGhlIGN1cnNvciB3aGVuIHByaW50aW5nICovXG4gIC5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4vKiBTZWUgaXNzdWUgIzI5MDEgKi9cbi5jbS10YWItd3JhcC1oYWNrOmFmdGVyIHsgY29udGVudDogJyc7IH1cblxuLyogSGVscCB1c2VycyB1c2UgbWFya3NlbGVjdGlvbiB0byBzYWZlbHkgc3R5bGUgdGV4dCBiYWNrZ3JvdW5kICovXG5zcGFuLkNvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0IHsgYmFja2dyb3VuZDogbm9uZTsgfVxuIiwiLypcblxuICAgIE5hbWU6ICAgICAgIG1hdGVyaWFsXG4gICAgQXV0aG9yOiAgICAgTWljaGFlbCBLYW1pbnNreSAoaHR0cDovL2dpdGh1Yi5jb20vbWthbWluc2t5MTEpXG5cbiAgICBPcmlnaW5hbCBtYXRlcmlhbCBjb2xvciBzY2hlbWUgYnkgTWF0dGlhIEFzdG9yaW5vIChodHRwczovL2dpdGh1Yi5jb20vZXF1aW51c29jaW8vbWF0ZXJpYWwtdGhlbWUpXG5cbiovXG5cbi5jbS1zLW1hdGVyaWFsLkNvZGVNaXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xuICBjb2xvcjogcmdiYSgyMzMsIDIzNywgMjM3LCAxKTtcbn1cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICBiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuICBjb2xvcjogcmdiKDgzLDEyNywxMjYpO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXIsIC5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlci1zdWJ0bGUsIC5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmVudW1iZXIgeyBjb2xvcjogcmdiKDgzLDEyNywxMjYpOyB9XG4uY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1jdXJzb3IgeyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmOGY4ZjA7IH1cbi5jbS1zLW1hdGVyaWFsIGRpdi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgfVxuLmNtLXMtbWF0ZXJpYWwuQ29kZU1pcnJvci1mb2N1c2VkIGRpdi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTsgfVxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbGluZTo6c2VsZWN0aW9uLCAuY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6c2VsZWN0aW9uLCAuY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7IH1cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmU6Oi1tb3otc2VsZWN0aW9uLCAuY20tcy1tYXRlcmlhbCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApOyB9XG5cbi5jbS1zLW1hdGVyaWFsIC5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1rZXl3b3JkIHsgY29sb3I6IHJnYmEoMTk5LCAxNDYsIDIzNCwgMSk7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1vcGVyYXRvciB7IGNvbG9yOiByZ2JhKDIzMywgMjM3LCAyMzcsIDEpOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tdmFyaWFibGUtMiB7IGNvbG9yOiAjODBDQkM0OyB9XG4uY20tcy1tYXRlcmlhbCAuY20tdmFyaWFibGUtMywgLmNtLXMtbWF0ZXJpYWwgLmNtLXR5cGUgeyBjb2xvcjogIzgyQjFGRjsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLWJ1aWx0aW4geyBjb2xvcjogI0RFQ0I2QjsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLWF0b20geyBjb2xvcjogI0Y3NzY2OTsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLW51bWJlciB7IGNvbG9yOiAjRjc3NjY5OyB9XG4uY20tcy1tYXRlcmlhbCAuY20tZGVmIHsgY29sb3I6IHJnYmEoMjMzLCAyMzcsIDIzNywgMSk7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1zdHJpbmcgeyBjb2xvcjogI0MzRTg4RDsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXN0cmluZy0yIHsgY29sb3I6ICM4MENCQzQ7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1jb21tZW50IHsgY29sb3I6ICM1NDZFN0E7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS12YXJpYWJsZSB7IGNvbG9yOiAjODJCMUZGOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tdGFnIHsgY29sb3I6ICM4MENCQzQ7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1tZXRhIHsgY29sb3I6ICM4MENCQzQ7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1hdHRyaWJ1dGUgeyBjb2xvcjogI0ZGQ0I2QjsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXByb3BlcnR5IHsgY29sb3I6ICM4MENCQUU7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS1xdWFsaWZpZXIgeyBjb2xvcjogI0RFQ0I2QjsgfVxuLmNtLXMtbWF0ZXJpYWwgLmNtLXZhcmlhYmxlLTMsIC5jbS1zLW1hdGVyaWFsIC5jbS10eXBlIHsgY29sb3I6ICNERUNCNkI7IH1cbi5jbS1zLW1hdGVyaWFsIC5jbS10YWcgeyBjb2xvcjogcmdiYSgyNTUsIDgzLCAxMTIsIDEpOyB9XG4uY20tcy1tYXRlcmlhbCAuY20tZXJyb3Ige1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM1RjY3O1xufVxuLmNtLXMtbWF0ZXJpYWwgLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuIiwiLmNtLXMtdHdpbGlnaHQuQ29kZU1pcnJvciB7IGJhY2tncm91bmQ6ICMxNDE0MTQ7IGNvbG9yOiAjZjdmN2Y3OyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IGRpdi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogIzMyMzIzMjsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjk5KTsgfVxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgMC45OSk7IH1cblxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItZ3V0dGVycyB7IGJhY2tncm91bmQ6ICMyMjI7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYWE7IH1cbi5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciB7IGNvbG9yOiB3aGl0ZTsgfVxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjYWFhOyB9XG4uY20tcy10d2lsaWdodCAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHsgY29sb3I6ICNhYWE7IH1cbi5jbS1zLXR3aWxpZ2h0IC5Db2RlTWlycm9yLWN1cnNvciB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7IH1cblxuLmNtLXMtdHdpbGlnaHQgLmNtLWtleXdvcmQgeyBjb2xvcjogI2Y5ZWU5ODsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuY20tYXRvbSB7IGNvbG9yOiAjRkMwOyB9XG4uY20tcy10d2lsaWdodCAuY20tbnVtYmVyIHsgY29sb3I6ICAjY2E3ODQxOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1kZWYgeyBjb2xvcjogIzhEQTZDRTsgfVxuLmNtLXMtdHdpbGlnaHQgc3Bhbi5jbS12YXJpYWJsZS0yLCAuY20tcy10d2lsaWdodCBzcGFuLmNtLXRhZyB7IGNvbG9yOiAjNjA3MzkyOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IHNwYW4uY20tdmFyaWFibGUtMywgLmNtLXMtdHdpbGlnaHQgc3Bhbi5jbS1kZWYsIC5jbS1zLXR3aWxpZ2h0IHNwYW4uY20tdHlwZSB7IGNvbG9yOiAjNjA3MzkyOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1vcGVyYXRvciB7IGNvbG9yOiAjY2RhODY5OyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1jb21tZW50IHsgY29sb3I6Izc3NzsgZm9udC1zdHlsZTppdGFsaWM7IGZvbnQtd2VpZ2h0Om5vcm1hbDsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuY20tc3RyaW5nIHsgY29sb3I6IzhmOWQ2YTsgZm9udC1zdHlsZTppdGFsaWM7IH0gLyoqL1xuLmNtLXMtdHdpbGlnaHQgLmNtLXN0cmluZy0yIHsgY29sb3I6I2JkNmIxODsgfSAvKj8qL1xuLmNtLXMtdHdpbGlnaHQgLmNtLW1ldGEgeyBiYWNrZ3JvdW5kLWNvbG9yOiMxNDE0MTQ7IGNvbG9yOiNmN2Y3Zjc7IH0gLyo/Ki9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1idWlsdGluIHsgY29sb3I6ICNjZGE4Njk7IH0gLyo/Ki9cbi5jbS1zLXR3aWxpZ2h0IC5jbS10YWcgeyBjb2xvcjogIzk5NzY0MzsgfSAvKiovXG4uY20tcy10d2lsaWdodCAuY20tYXR0cmlidXRlIHsgY29sb3I6ICNkNmJiNmQ7IH0gLyo/Ki9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1oZWFkZXIgeyBjb2xvcjogI0ZGNjQwMDsgfVxuLmNtLXMtdHdpbGlnaHQgLmNtLWhyIHsgY29sb3I6ICNBRUFFQUU7IH1cbi5jbS1zLXR3aWxpZ2h0IC5jbS1saW5rIHsgY29sb3I6I2FkOTM2MTsgZm9udC1zdHlsZTppdGFsaWM7IHRleHQtZGVjb3JhdGlvbjpub25lOyB9IC8qKi9cbi5jbS1zLXR3aWxpZ2h0IC5jbS1lcnJvciB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7IH1cblxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHsgYmFja2dyb3VuZDogIzI3MjgyRTsgfVxuLmNtLXMtdHdpbGlnaHQgLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHsgb3V0bGluZToxcHggc29saWQgZ3JleTsgY29sb3I6d2hpdGUgIWltcG9ydGFudDsgfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\open-ide\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map