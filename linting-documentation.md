# Linters

Below is a list of linters supported by `scss-lint`, ordered alphabetically.

* [BorderZero](#borderzero)
* [ColorKeyword](#colorkeyword)
* [Comment](#comment)
* [Compass Linters](#compass-linters)
* [DebugStatement](#debugstatement)
* [DeclarationOrder](#declarationorder)
* [DuplicateProperty](#duplicateproperty)
* [ElsePlacement](#elseplacement)
* [EmptyLineBetweenBlocks](#emptylinebetweenblocks)
* [EmptyRule](#emptyrule)
* [FinalNewline](#finalnewline)
* [HexLength](#hexlength)
* [HexNotation](#hexnotation)
* [HexValidation](#hexvalidation)
* [IdWithExtraneousSelector](#idwithextraneousselector)
* [Indentation](#indentation)
* [LeadingZero](#leadingzero)
* [MergeableSelector](#mergeableselector)
* [NameFormat](#nameformat)
* [PlaceholderInExtend](#placeholderinextend)
* [PropertySortOrder](#propertysortorder)
* [PropertySpelling](#propertyspelling)
* [SelectorDepth](#selectordepth)
* [SelectorFormat](#selectorformat)
* [Shorthand](#shorthand)
* [SingleLinePerProperty](#singlelineperproperty)
* [SingleLinePerSelector](#singlelineperselector)
* [SpaceAfterComma](#spaceaftercomma)
* [SpaceAfterPropertyColon](#spaceafterpropertycolon)
* [SpaceAfterPropertyName](#spaceafterpropertyname)
* [SpaceBeforeBrace](#spacebeforebrace)
* [SpaceBetweenParens](#spacebetweenparens)
* [StringQuotes](#stringquotes)
* [TrailingSemicolon](#trailingsemicolon)
* [TrailingZero](#trailingzero)
* [UnnecessaryMantissa](#unnecessarymantissa)
* [UrlFormat](#urlformat)
* [UrlQuotes](#urlquotes)
* [ZeroUnit](#urlquotes)

## BorderZero

Prefer `border: 0` over `border: none`.

## ColorKeyword

Prefer hexadecimal color codes over color keywords.

**Bad: color keyword**
```scss
color: green;
```

**Good: hexadecimal color**
```scss
color: #0f0;
```

Defining colors directly in properties is usually a smell. When you color your
body text in a number of places, if you ever want to change the color of the
text you'll have to update the explicitly defined color in a number of places,
and finding all those places can be difficult if you use the same color for
other elements (i.e. a simple find/replace may not always work).

A better approach is to use global variables like `$color-text-body` and refer
to this variable everywhere you want to use it. This makes it easy to update
the color, as you only need change it in one place. It is also more
intention-revealing, as seeing the name `$color-text-body` is more descriptive
than `#333` or `black`. Using color keywords can obfuscate this, as they look
like variables.

## Comment

Prefer `//` comments over `/* ... */`.

**Bad**
```scss
/* This is a comment that gets rendered */
```

**Good**
```scss
// This comment never gets rendered
```

`//` comments should be preferred as they don't get rendered in the final
generated CSS, whereas `/* ... */` comments do.

Furthermore, comments should be concise, and using `/* ... */`
encourages multi-line comments which tend to not be concise.

## Compass Linters

`scss-lint` includes a set of linters for codebases which use the
[Compass](http://compass-style.org/) framework.

###[» Compass Linters Documentation](./compass/README.md)

## DebugStatement

Reports `@debug` statements (which you probably left behind accidentally).

## DeclarationOrder

Write `@extend` statements first in rule sets, followed by property
declarations and then other nested rule sets.

**Bad: `@extend` not first**
```scss
.fatal-error
{
	color: #f00;
	@extend %error;

	p
	{
		...
	}
}
```

**Good: `@extend` appears first**
```scss
.fatal-error
{
	@extend %error;
	color: #f00;

	p
	{
		...
	}
}
```

The `@extend` statement functionally acts like an inheritance mechanism, which
means the properties defined by the placeholder being extended are rendered
before the rest of the properties in the rule set.

Thus, declaring the `@extend` at the top of the rule set reminds the developer
of this behavior.

## DuplicateProperty

Reports when you define the same property twice in a single rule set.

**Bad**
```scss
h1
{
	margin: 10px;
	text-transform: uppercase;
	margin: 0; // Second declaration
}
```

Having duplicate properties is usually just an error. However, they can be used
as a technique for dealing with varying levels of browser support for CSS
properties. In the example below, some browsers might not support the `rgba`
function, so the intention is to fall back to the color `#fff`.

```scss
.box
{
	background: #fff;
	background: rgba( 255, 255, 255, .5 );
}
```

In this situation, using duplicate properties is acceptable, but the linter
won't be able to deduce your intention, and will still report an error.

If you've made the decision to _not_ support older browsers, then this lint is
more helpful since you don't want to clutter your CSS with fallbacks.
Otherwise, you may want to consider disabling this check in your
`.scss-lint.yml` configuration.

## ElsePlacement

Place `@else` statements on a new line.

**Bad**
```scss
@if {
  ...
} @else {
  ...
}
```

**Good**
```scss
@if
{
  ...
}
@else
{
  ...
}
```


## EmptyLineBetweenBlocks

Separate rule, function, and mixin declarations with empty lines.

**Bad: no lines separating blocks**
```scss
p
{
	margin: 0;
	em
	{
		...
	}
}
a {
  ...
}
```

**Good: lines separating blocks**
```scss
p
{
	margin: 0;

	em
	{
		...
	}
}

a
{
	...
}
```

This also applies to single line blocks.
`ignore_single_line_blocks`: `false`

**Bad: single line block**

```scss
.icon-chevron-up { &:before { content: "\e030"; } }
```
**Good: multi-line blocks**
```scss
.icon-chevron-up
{ 
	&:before
	{ 
		content: "\e030"; 
	}
}
```


## EmptyRule

Reports when you have an empty rule set.

```scss
.button
{

}
```

## FinalNewline

Files should always have a final newline. This results in better diffs when
adding lines to the file, since SCM systems such as git won't think that you
touched the last line.

You can customize whether or not a final newline exists with the `present`
option.

Configuration Option | Description
---------------------|---------------------------------------------------------
`present`            | Whether a final newline should be present (default **true**)

## HexLength

In favor of being more verbose, consistent, and specific, I favor `long` HexLength.


**short**
```scss
color: #f2e;
```

**long**
```scss
color: #ff22ee;
```


## HexNotation

Checks if hexadecimal colors are written in lowercase. You can specify which
case with the `style` option.

**Bad: uppercase or inconsistency**
```scss
color: #FF22ee;
```

**good**
```scss
color: #ff22ee;
```



## HexValidation

Ensure hexadecimal colors are valid (either three or six digits).

**Bad**
```scss
p
{
	background: #ab; // Clearly a typo
}
```

**Good**
```scss
p
{
	background: #abc;
}
```



## IdWithExtraneousSelector

Don't combine additional selectors with an ID selector.

**Bad: `.button` class is unnecessary**
```scss
#submit-button.button
{
	...
}
```

**Good: standalone ID selector**
```scss
#submit-button
{
	...
}
```

While the CSS specification allows for multiple elements with the same ID to
appear in a single document, in practice this is a smell.  When
reasoning about IDs (including selector specificity), it should suffice to
style an element with a particular ID based solely on the ID.

Another possible pattern is to modify the style of an element with a given
ID based on the class it has. This is also a smell, as the purpose of a CSS
class is to be reusable and composable, and thus redefining it for a specific
ID is a violation of those principles.

Even better would be to
[never use IDs](http://screwlewse.com/2010/07/dont-use-id-selectors-in-css/)
in the first place.



## Indentation

Use one tab per indentation level.

**Bad: two spaces**
```scss
div
{
  color: #f00;
}
```

**Good: one tab**
```scss
div
{
	color: #f00;
}
```


## LeadingZero

Don't write leading zeros for numeric values with a decimal point.

**Bad: no leading zero**
```scss
margin: .5em;
```

**Good: leading zero**
```scss
margin: 0.5em;
```



## MergeableSelector

Reports when you define the same selector twice in a single sheet.

**Bad**
```scss
h1
{
	margin: 10px;
}

.error
{
	color: #e63c3c;
}

// Second copy of h1 rule
h1
{
  text-transform: uppercase;
}
```

**Good**
```scss
h1
{
  margin: 10px;
  text-transform: uppercase;
}

. error
{
  color: #e63c3c;
}
```

Combining duplicate selectors can result in an easier to read sheet, but
occasionally the rules may be purposely duplicated to set precedence
after a rule with the same CSS specificity. However, coding your
stylesheets in this way makes them more difficult to comprehend, and can
usually be avoided.

You can specify that rule sets which can be nested within another rule
set must be nested via the `force_nesting` option, e.g.

**Bad**
```scss
h1
{
  color: #fff;
}

h1.new
{
	color: #000;
}
```

**Good**
```scss
h1
{
	color: #fff;

	&.new
	{
		color: #000;
	}
}
```



## NameFormat

Functions, mixins, and variables should be declared with all lowercase letters
and hyphens instead of underscores.

**Bad: uppercase characters**
```scss
$myVar: 10px;

@mixin myMixin(  )
{
	...
}
```

**Good: all lowercase with hyphens**
```scss
$my-var: 10px;

@mixin my-mixin(  )
{
	...
}
```

Using lowercase with hyphens in CSS has become the _de facto_ standard, and
brings with it a couple of benefits. First of all, hyphens are easier to type
than underscores, due to the additional `Shift` key required for underscores on
most popular keyboard layouts. Furthermore, using hyphens in class names in
particular allows you to take advantage of the
[`|=` attribute selector](http://www.w3.org/TR/CSS21/selector.html#attribute-selectors),
which allows you to write a selector like `[class|="inactive"]` to match both
`inactive-user` and `inactive-button` classes.

The Sass parser automatically treats underscores and hyphens the same, so even
if you're using a library that declares a function with an underscore, you can
refer to it using the hyphenated form instead.



## PlaceholderInExtend

Always use placeholder selectors in `@extend`.

**Bad: extending a class**
```scss
.fatal
{
	@extend .error;
}
```

**Good: extending a placeholder**
```scss
.fatal
{
	@extend %error;
}
```

Using a class selector with the `@extend` statement statement usually results
in more generated CSS than when using a placeholder selector.  Furthermore,
Sass specifically introduced placeholder selectors in order to be used with
`@extend`.

See [Mastering Sass extends and placeholders](http://8gramgorilla.com/mastering-sass-extends-and-placeholders/).



## PropertySortOrder

Sort properties in a strict order. By default, will require properties be
sorted in alphabetical order, as it's brain dead simple (highlight lines and
execute `:sort` in `vim`), and it can
[benefit gzip compression](http://www.barryvan.com.au/2009/08/css-minifier-and-alphabetiser/).

You can also specify an explicit ordering via the `order` option, which allows
you to specify an explicit array of properties representing the preferred
order, or the name of a
[preset order](https://github.com/causes/scss-lint/tree/master/data/property-sort-orders).
If a property is not in your explicit list, it will be placed at the bottom of
the list, disregarding its order relative to other unspecified properties.

For example, to define a custom sort order, you can write:

```yaml
linters:
  PropertySortOrder:
    order:
      - display
      - margin
      - etc...
```

Or you can use a preset order by writing:

```yaml
linters:
  PropertySortOrder:
    order: concentric
```

If you need to write vendor-prefixed properties, the linter will allow you to
order the vendor-prefixed properties before the standard CSS property they
apply to. For example:

```scss
border: 0;
-moz-border-radius: 3px;
-o-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
color: #ccc;
margin: 5px;
```

In this case, this is usually avoided by using mixins from a framework like
[Compass](http://compass-style.org/) or [Bourbon](http://bourbon.io/) so
vendor-specific properties rarely need to be explicitly written by hand.

If you are specifying an explicit order for properties, note that
vendor-prefixed properties will still be ordered based on the example above
(i.e. you only need to specify normal properties in your list).

Configuration Option | Description
---------------------|---------------------------------------------------------
`order`              | Array of properties, or the name of a [preset order](https://github.com/causes/scss-lint/tree/master/data/property-sort-orders) (default is `nil`, resulting in alphabetical ordering)
`ignore_unspecified` | Whether to ignore properties that are not explicitly specified in `order` (default **false**)

## PropertySpelling

Reports when you use an unknown CSS property (ignoring vendor-prefixed
properties).

```scss
diplay: none; // "display" is spelled incorrectly
```

Since the list of available CSS properties is constantly changing, it's
possible that you might get some false positives here, especially if you're
using experimental CSS features. If that's the case, you can add additional
properties to the whitelist by adding the following to your `.scss-lint.yml`
configuration:

```yaml
linters:
  PropertySpelling:
    extra_properties:
      - some-experimental-property
      - another-experimental-property
```

If you're sure the property in question is valid,
[submit a request](https://github.com/causes/scss-lint/issues/new)
to add it to the
[default whitelist](data/properties.txt).

Configuration Option | Description
---------------------|---------------------------------------------------------
`extra_properties`   | List of extra properties to allow

## SelectorDepth

Don't write selectors with a depth of applicability greater than 3.

**Bad: selectors with depths of 4**
```scss
.one .two .three > .four
{
	...
}

.one .two
{
  .three > .four
  {
  	...
  }
}
```

**Good**
```scss
.one .two .three
{
	...
}

.one .two
{
	.three
	{
		...
	}
}
```

Selectors with a large [depth of applicability](http://smacss.com/book/applicability)
lead to CSS tightly-coupled to your HTML structure, making it brittle to change.

Deep selectors also come with a performance penalty, which can affect rendering
times, especially on mobile devices. While the default limit is 3, ideally it
is better to use less than 3 whenever possible.

Configuration Option | Description
---------------------|---------------------------------------------------------
`max_depth`          | Maximum depth before reporting errors (default **3**)

## SelectorFormat

It is good practice to choose a convention for naming selectors.

**Good**
```scss
// convention: 'hyphenated_lowercase'
.foo-bar-77, foo-bar, #foo-bar {}
```

**Bad**
```scss
// convention: 'snake_case'
.foo_bar77, foo_bar, #foo_bar {}

// convention: 'camel_case'
.fooBar77, fooBar, #fooBar {}
}
```

Since you might need to overwrite selectors for third party stylesheets, you
can specify `ignored_names` as an array of individual selectors to ignore.
Another option is to specify `ignored_types` to globally ignore a certain
type of selector.

Configuration Option | Description
---------------------|---------------------------------------------------------
`convention`         | Name of convention to use (`hyphenated_lowercase` (default) or `snake_case`, `camel_case`, or `BEM`), or a regex the name must match
`ignored_names`      | Array of whitelisted names to not report lints for.
`ignored_types`      | Array containing list of types of selectors to ignore (valid values are `attribute`, `class`, `element`, `id`, `placeholder`, or `pseudo-selector`)

## Shorthand

Prefer the longest, most verbose longhand form possible for properties that support it.

**Bad: equivalent to specifying 1px for all sides**
```scss
margin: 1px;
```

**Good: all 4 sides specified with same value**
```scss
margin: 1px 1px 1px 1px;
```

## SingleLinePerProperty

Properties within rule sets should each reside on their own line.

**Bad**
```scss
p
{
	margin: 0; padding: 0;
}
```

**Good**
```scss
p
{
	margin: 0;
	padding: 0;
}
```

This includes single line rule sets because `allow_single_line_rule_sets` is set to `false`. For example the
following is not acceptable:

```scss
p { margin: 0; padding: 0; }
```

## SingleLinePerSelector

Split selectors onto separate lines after each comma.

**Bad: comma-separated selectors not on their own lines**
```scss
.error p, p.explanation
{
	...
}
```

**Good: each selector sequence is on its own line**
```scss
.error p,
p.explanation
{
	...
}
```

Note that selectors containing interpolation are ignored, since the Sass parser
cannot construct the selector parse tree at parse time, only at run time (which
is too late for `scss-lint` to do anything with).

## SpaceAfterComma

Commas in lists should be followed by a space.

**Bad: no space after commas**
```scss
@include box-shadow( 0 2px 2px rgba( 0,0,0,.2 ) );
color: rgba( 0,0,0,.1 );
```

**Good: commas followed by a space**
```scss
@include box-shadow( 0 2px 2px rgba( 0, 0, 0, .2 ) );
color: rgba( 0, 0, 0, .1 );
```

## SpaceAfterPropertyColon

Properties should be formatted with a single space separating the colon from
the property's value.

**Bad: no space after colon**
```scss
margin:0;
```

**Bad: more than one space after colon**
```scss
margin:  0;
```

**Good**
```scss
margin: 0;
```

## SpaceAfterPropertyName

Properties should be formatted with no space between the name and the colon.

**Bad: space before colon**
```scss
margin : 0;
```

**Good**
```scss
margin: 0;
```

## SpaceBeforeBrace

Opening braces should be preceded by a single space.

**Bad: no space before brace**
```scss
p{
  ...
}
```

**Bad: more than one space before brace**
```scss
p  {
  ...
}
```

**Good**
```scss
p {
  ...
}
```

Setting `allow_single_line_padding` to `true` allows you to use extra spaces to
nicely align single line blocks, so you can write:

```scss
.icon-chevron-up    { &:before { content: "\e030"; } }
.icon-chevron-down  { &:before { content: "\e031"; } }
.icon-chevron-left  { &:before { content: "\e032"; } }
.icon-chevron-right { &:before { content: "\e033"; } }
```

Configuration Option        | Description
----------------------------|---------------------------------------------------
`allow_single_line_padding` | Allow single line blocks to have extra spaces for nicer formatting (default **false**)

## SpaceBetweenParens

Parentheses should be padded with spaces.

**Good**
```scss
@include box-shadow( 0 2px 2px rgba( 0, 0, 0, .2 ) );
color: rgba( 0, 0, 0, .1 );
```

**Bad**
```scss
@include box-shadow(0 2px 2px rgba(0, 0, 0, .2));
color: rgba(0, 0, 0, .1);
```

## StringQuotes

String literals should be written with single quotes unless using double quotes
would save on escape characters.

**Bad: double quotes**
```scss
content: "hello";
```

**Good: single quotes**
```scss
content: 'hello';
```

**Good: double quotes prevent the need for escaping single quotes**
```scss
content: "'hello'";
```

Single quotes are easier to type by virtue of not requiring the `Shift` key on
most popular keyboard layouts.

## TrailingSemicolon

Property values, `@extend` directives, `@include` directives, and variable
declarations should always end with a semicolon.

**Bad: no semicolon**
```scss
p
{
	color: #fff
}
```

**Bad: space between value and semicolon**
```scss
p
{
	color: #fff ;
}
```

**Good**
```scss
p
{
	color: #fff;
}
```

CSS allows you to omit the semicolon if the statement is the last statement in
the rule set. However, this introduces inconsistency and requires anyone adding
a property after that property to remember to append a semicolon.

## TrailingZero

Don't write trailing zeros for numeric values with a decimal point.

**Bad: unnecessary trailing zero**
```scss
margin: .500em;
```

**Good: no trailing zero**
```scss
margin: .5em;
```

The extra zeros are unnecessary and just add additional bytes to the resulting
generated CSS.

## UnnecessaryMantissa

Numeric values should not contain unnecessary fractional portions.

**Bad**

```scss
margin: 1.0em;
```

**Good**

```scss
margin: 1em;
```

Sass will automatically convert integers to floats when necessary, making the
use of a fractional component in a value to "force" it to be a floating point
number unnecessary. For example, the following code:

```scss
$margin: 1;
p
{
	margin: $margin / 2;
}
```

...will compile to:

```css
p
{
	margin: 0.5;
}
```

## UnnecessaryParentReference

Do not use parent selector references (`&`) when they would otherwise be
unnecessary.

**Bad**

```scss
.foo
{
  & > .bar
  {
    ...
  }
}
```

**Good**

```scss
.foo
{
  > .bar
  {
  
  }
}
```

## UrlFormat

URLs should not contain protocols or domain names.

Including protocols or domains in URLs makes them brittle to change, and also
unnecessarily increases the size of your CSS documents, reducing performance.

**Bad: protocol and domain present**

```scss
background: url( 'https://example.com/assets/image.png' );
```

**Good**

```scss
background: url( 'assets/image.png' );
```

## UrlQuotes

URLs should always be enclosed within quotes.

**Bad: no enclosing quotes**
```scss
background: url( example.png );
```

**Good**
```scss
background: url( 'example.png' );
```

Using quoted URLs is consistent with using other Sass asset helpers, which also
expect quoted strings. It also works better with most syntax highlighters, and
makes it easier to escape characters, as the escape rules for strings apply,
rather than the different set of rules for literal URLs.

See the [URL type](http://dev.w3.org/csswg/css-values/#url-value) documentation
for more information.

## ZeroUnit

Don't omit length units on zero values. You might come back to change this later and forget what units you are using in the rest of the .scss.

**Bad: unnecessary units**
```scss
margin: 0px;
```

**Good**
```scss
margin: 0;
```

Zero is zero regardless of the units of length.

Note that this only applies to
[lengths](https://developer.mozilla.org/en-US/docs/Web/CSS/length),
since it is invalid to omit units for other types such as
[angles](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) or
[times](https://developer.mozilla.org/en-US/docs/Web/CSS/time).