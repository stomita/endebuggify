endebuggify
====
Browserify transform that eliminates `console.log` lines from source code.

Similar to [stripify](https://github.com/alanshaw/stripify), but has an option to specify files in glob pattern to retain the debugging codes.


Usage
---

```sh
npm install endebuggify
```

```bash
$ browserify -t [ endebuggify --target 'path/to/module/*' ]
```

