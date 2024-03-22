<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/cropper.js';

  let cropperRef;
  function onClick() {
    cropperRef.toCanvas().toBlob((blob) => {
      console.log(blob);
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
  <button on:click={onClick}>To Blob</button>
</plus-center>
