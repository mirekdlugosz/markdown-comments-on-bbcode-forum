# About

This is simple UserJS script that adds support for Markdown on websites that only support BBCode markup. 
It was written with PunBB bulletin board websites in mind; specifically, [DUG forum](https://forum.dug.net.pl/). It might require some changes before being usable on other forum engines.

# How does it work?

It takes content of `<textarea>` element, assumed to be written in Markdown, runs it through Markdown → BBCode translator and sets result of that as new value of `<textarea>`.
This happens on submit event, so shortly before any data is send to server. This way you can write your post in Markdown, but server will receive BBCode that it understands.

# Author

Created by Mirosław Zalewski, but wouldn't be possible without `markdown-to-bbcode-js` by Linus Oleander.

# Copying

Distributed under MIT License; see `LICENSE.txt` for details.
