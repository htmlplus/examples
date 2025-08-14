<script>
  import '@htmlplus/ui/format-bytes.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack vertical>
  <plus-format-bytes value={1000} separator=" "></plus-format-bytes>
  <plus-format-bytes value={1000} separator="_"></plus-format-bytes>
</plus-stack>
