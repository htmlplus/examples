```css [style]
plus-center {
    flex-direction: column;
}
```

```html [template]
<plus-center>
    <plus-format-bytes value="-1000"></plus-format-bytes>
    <plus-format-bytes value="-1000" signed></plus-format-bytes>
    <plus-format-bytes value="0"></plus-format-bytes>
    <plus-format-bytes value="0" signed></plus-format-bytes>
    <plus-format-bytes value="1000"></plus-format-bytes>
    <plus-format-bytes value="1000" signed></plus-format-bytes>
</plus-center>
```