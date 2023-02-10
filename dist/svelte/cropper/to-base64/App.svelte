<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  function toBase64() {
    const image = new Image();
    image.src = window.cropper2.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
</script>

<plus-center>
  <plus-cropper
    src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    id="cropper2"
  ></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button on:click="{() => toBase64()}">Get Base64</button>
</plus-center>
