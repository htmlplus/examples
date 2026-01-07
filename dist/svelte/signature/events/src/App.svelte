<script>
  import '@htmlplus/ui/center.js';
  import '@htmlplus/ui/signature.js';

  function onPlusAfter(event) {
    console.log('after', event.detail);
  }
  function onPlusBefore(event) {
    console.log('before', event.detail);
  }
  function onPlusChange(event) {
    console.log('change', event.detail);
  }
  function onPlusEnd(event) {
    console.log('end', event.detail);
  }
  function onPlusReady() {
    console.log('ready');
  }
  function onPlusStart(event) {
    console.log('start', event.detail);
  }
</script>

<plus-center>
  <plus-signature
    on:plus-after={onPlusAfter}
    on:plus-before={onPlusBefore}
    on:plus-change={onPlusChange}
    on:plus-end={onPlusEnd}
    on:plus-ready={onPlusReady}
    on:plus-start={onPlusStart}
  ></plus-signature>
</plus-center>
