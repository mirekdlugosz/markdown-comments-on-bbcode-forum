#!/bin/sh

cat script-header.user.js \
	markdown-to-bbcode-js/public/js/underscore.js \
	markdown-to-bbcode-js/public/js/markdown.js \
	markdown-syntax-in-posts.template.user.js \
	> "$1".user.js
