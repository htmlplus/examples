<script>
  import '@htmlplus/ui/prism.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack gap="0.5rem" items="stretch" vertical>
  <plus-prism language="javascript">const name = '@htmlplus/ui';</plus-prism>
  <plus-prism language="csharp">string text = "Hello World!";</plus-prism>
  <plus-prism language="rust">let arr: [i32; 4] = [10, 20, 30, 40];</plus-prism>
</plus-stack>
