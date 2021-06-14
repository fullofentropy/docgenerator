
const headerContent = (node) => {
  const roles = node.getRoles()
  if (roles && roles.includes('header-nth')) {
    return `<img class="wordmark" src="./theme/assets/image-asset.png"/>
    <h1>${node.getTitle()}</h1>`
  }
}


module.exports = {
  paragraph: (node) => `<p class="${node.getRoles().join(' ')} paragraph">${node.getContent()}</p>`,
  document: (node) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link href="./theme/assets/style.css" rel="stylesheet">
</head>
<body>
<header>
  <img class="wordmark" src="./theme/assets/image-asset.png"/>
  <h1>${node.getHeader().getTitle()}</h1>
  <img class="logo" src="./theme/assets/logo.png"/>
</header>
<section class="byline">
  <div>${node.getAttribute('byline')}</div>
</section>
<section class="content">
${node.getContent()}
</section>
<section class="footer">
  <div class="adFootnote">
    <div class="footerHeadline"><img class="wordmark" src="./theme/assets/image-asset.png"/><span>Meow</span></div>
    <div class="subNote">AsciiDoc Fun, you should give it a try!</div>
  </div>
  <div class="helpFootnote">
      <br>This is a Footnote
      <br>This information was added in a template located at /theme/template.js
      <br>
  </div>
</section>
</body>`
}
