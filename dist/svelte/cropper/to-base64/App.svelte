<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/cropper.js';

  let cropperRef;
  function onClick() {
    const image = new Image();
    image.src = cropperRef.toCanvas().toDataURL();
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
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
  <button on:click={onClick}>To Base64</button>
</plus-center>
