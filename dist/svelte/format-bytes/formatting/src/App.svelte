<script>
  import '@htmlplus/ui/format-bytes.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack vertical>
  <plus-format-bytes value={1500}></plus-format-bytes>
  <plus-format-bytes value={800000000}></plus-format-bytes>
  <plus-format-bytes value={6900000000}></plus-format-bytes>
  <plus-format-bytes value={222000000000000}></plus-format-bytes>
</plus-stack>
