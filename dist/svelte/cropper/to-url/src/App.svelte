<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';

  let cropperRef;
  function onClick() {
    cropperRef.toCanvas().toBlob((blob) => {
      open(URL.createObjectURL(blob), '_blank');
    });
  }
</script>

<plus-center>
  <plus-cropper
    src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
    bind:this={cropperRef}
  ></plus-cropper>
</plus-center>
<br />
<plus-center>
  <button on:click={onClick}>To URL</button>
</plus-center>
