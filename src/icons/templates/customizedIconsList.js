/* eslint-disable */
export default [
  {% for glyph in glyphs %}'{{glyph.name}}',{% endfor %}
]
