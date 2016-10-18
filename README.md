# sitemap-xml-reader

> A simple reader for node.js parsing sitemap.xml files returning the URLs.

This library makes a http-request to the server and parses the sitemap.xml. It
retuns all URLs as an array.

## Usage

First install the reader.

```
npm install --save sitemap-xml-reader
```

After installing you can require and call it.

```javascript
var sitemapXmlReader = require( 'sitemap-xml-reader' );
var urls = sitemapXmlReader( 'http://url.to/sitemap.xml' );
```
