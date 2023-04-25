```html [template]
<>
  <plus-center>
    <plus-dialog-toggler connector="dialog-backdrop">
      Open
    </plus-dialog-toggler>
  </plus-center>
  <plus-dialog animation="fade" connector="dialog-backdrop" backdrop={false}>
    <plus-dialog-content>
      <plus-dialog-header>
        Dialog Title
      </plus-dialog-header>
      <plus-dialog-body>
        <plus-faker></plus-faker>
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler>
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
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
