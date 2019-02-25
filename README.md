# helpda

Strip HTML tags, tabs, spaces from WYSIWYG field output

## getting started

```bash
$ npm wysiwyg-to-text
```
or
```bash
$ yarn wysiwyg-to-text
```

## Example Usage

```js
import parse from 'wysiwyg-to-text'

const wysiwygOutput = `
<p>Lorem&nbsp;ipsum &nbsp;leo cursus quisque&nbsp;sodales rutrum&nbsp; <p>mattisо</p></p>
`

parse(wisiwygOutput) ///  Lorem ipsum leo cursus quisque sodales rutrum mattisо

```


