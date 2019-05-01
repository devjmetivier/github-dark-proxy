const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const html = (await (await fetch(`https://github.com${req.url}`)).text())
    .replace(/(href=.)https:?\/\/github.com/g, `$1//${req.headers.host}`)
    .replace(
      '</head>',
      '<link media="all" href="/dark.css" rel="stylesheet" /></head>'
    );

  res.end(html);
};
