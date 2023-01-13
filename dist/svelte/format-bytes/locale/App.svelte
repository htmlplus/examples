<script>
  import '@htmlplus/core/center.js';
  import '@htmlplus/core/format-bytes.js';
</script>

<plus-center>
  <plus-format-bytes
    value="10000100"
    locale="en"
    unit="kilo"
  ></plus-format-bytes>
  <plus-format-bytes
    value="10000100"
    locale="de"
    unit="kilo"
  ></plus-format-bytes>
</plus-center>

<style>
  plus-center {
    flex-direction: column;
  }
</style>
