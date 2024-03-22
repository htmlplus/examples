<script>
  import '@htmlplus/ui/animation.js';
  import '@htmlplus/ui/animation/names/attention-seekers/pulse.js';
  import '@htmlplus/ui/animation/names/attention-seekers/swing.js';
  import '@htmlplus/ui/animation/names/attention-seekers/tada.js';
  import '@htmlplus/ui/icon.js';
  import '@htmlplus/ui/stack.js';
</script>

<plus-stack gap="2rem">
  <plus-animation duration={1000} iterations={Infinity} name="pulse" run>
    <plus-icon name="heart"></plus-icon>
  </plus-animation>
  <plus-animation duration={1000} iterations={Infinity} name="swing" run>
    <plus-icon name="telephone"></plus-icon>
  </plus-animation>
  <plus-animation duration={2000} iterations={Infinity} name="tada" run>
    <plus-icon name="bell"></plus-icon>
  </plus-animation>
</plus-stack>
