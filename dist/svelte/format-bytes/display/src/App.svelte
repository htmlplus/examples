<script>
  import '@htmlplus/ui/format-bytes.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack vertical>
  <plus-format-bytes value={1000} display="short"></plus-format-bytes>
  <plus-format-bytes value={1000} display="long"></plus-format-bytes>
</plus-stack>
