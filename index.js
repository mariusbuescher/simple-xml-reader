( function() {
    'use strict';

    var xmlParser = require( 'xml-parser' );
    var fs = require( 'fs' );
    var request = require( 'sync-request' );

    var getSitemapUrls = function( sitemapUrl, options ) {
        if ( sitemapUrl.match( /^https?\:\/\// ) ) {
            var res = request( 'GET', sitemapUrl );
            var sitemap = xmlParser( res.getBody().toString() );
            var urls = sitemap.root.children.map( function( url ) {
                var loc = url.children.filter( function( item ) {
                    return item.name === 'loc';
                } )[ 0 ];
                return loc.content;
            } );
            return urls;
        }

        throw new Error( 'Please specify a valid URL' );
    };

    module.exports = getSitemapUrls;
} () );
