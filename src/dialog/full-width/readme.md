```html [template]
<>
  <plus-center>
    <plus-dialog-toggler connector="dialog-full-width">
      Open
    </plus-dialog-toggler>
  </plus-center>
  <plus-dialog animation="fade" connector="dialog-full-width" full-width>
    <plus-dialog-content>
      <plus-dialog-body>
        <plus-faker></plus-faker>
      </plus-dialog-body>
    </plus-dialog-content>
  </plus-dialog>
</>
```

```json [settings]
{
  "dependencies": {
    "@faker-js/faker": "latest"
  }
}
```
