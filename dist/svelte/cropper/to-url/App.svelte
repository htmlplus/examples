<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';
  function toURL() {
    window.cropper3.toCanvas().toBlob((blob) => {
      window.open(URL.createObjectURL(blob), '_blank');
    });
  }
</script>

<plus-center>
  <plus-cropper
    src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    id="cropper3"
  ></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button on:click="{() => toURL()}">To URL</button>
</plus-center>
