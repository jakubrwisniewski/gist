# Text wrapping

It’s better to use `overflow-wrap` insteand of `word-wrap`

1. `overflow-wrap: break-word;`  breaks the word to wrap text in the content box (put the word in next line)
2. `word-break; break-all;` breaks the word keeping the word in the same line
3. `hypens: auto`  should automatically add hyphens DIDN’T WORK FOR ME
4. `hypens: manual;` sets hyphens manually - using `&shy;` in HTML is required
5. `text-overflow: ellipsis`  adds ellipsis at the end of the text, when text is overflowing (works for one line only)
6. `line-clamp: 2`  limit text to few lines (needs some additional properties - see preview)

[Preview](preview/text-wrapping.html)
