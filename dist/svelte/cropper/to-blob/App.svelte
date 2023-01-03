<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  function toBlob() {
    window.cropper2.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
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
  <button on:click="{() => toBlob()}">To Blob</button>
</plus-center>
