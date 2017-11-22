---
layout: default
title: Code
description: ...
toc: true
group: guide
---

## Inline code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

{% example html %}
The <code>code</code> element represents a fragment of computer code.
{% endexample %}

Property Name | Description
--- | ---
`--hiq-code-padding-vertical` | ....

## Code blocks

The `<pre>` element defines preformatted text, usually used for multiple lines of code.

{% example html %}
<pre><code>&lt;p&gt;This is a sample paragraph.&lt;/p&gt;
&lt;p&gt;This is another sample paragraph.&lt;/p&gt;
</code></pre>
{% endexample %}

Property Name | Description
--- | ---
`--hiq-pre-margin-bottom` | ....

## Variables

The `<var>` element represents a variable in a mathematical expression or programming context.

{% example html %}
<var>a</var> + <var>b</var> = <var>c</var>
{% endexample %}

## User input

Use the `<kbd>` element to indicate input that is typically entered via keyboard.

{% example html %}
To install HiQ, enter <kbd>npm install hiq</kbd> in your terminal.<br>
To cancel the installation process, press <kbd><kbd>ctrl</kbd> + <kbd>c</kbd></kbd>.
{% endexample %}

Property Name | Description
--- | ---
`--hiq-kbd-padding-vertical` | ....

## Sample output

The `<samp>` element identifies sample output from a computer program.

{% example html %}
<samp>I am HiQ. I am a lightweight, progressive CSS framework.</samp>
{% endexample %}