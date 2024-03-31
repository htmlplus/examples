<script>
  import '@htmlplus/ui/accordion.js';
  import '@htmlplus/ui/faker.js';
</script>

<div>
  <plus-accordion summary="First">
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion summary="Second">
    <plus-faker></plus-faker>
  </plus-accordion>
  <plus-accordion summary="Third">
    <plus-faker></plus-faker>
  </plus-accordion>
</div>

<style>
  plus-accordion {
    border: 2px solid whitesmoke;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  plus-accordion:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
  plus-accordion::part(body),
  plus-accordion::part(svg) {
    transition: all 0.5s ease-out;
  }
  plus-accordion::part(header) {
    column-gap: 0.5rem;
    flex-direction: row-reverse;
    padding: 0.75rem;
  }
  plus-accordion[state^='expand']::part(header) {
    font-weight: bold;
  }
  plus-accordion[state^='expand']::part(svg) {
    fill: gray;
    transform: rotate(90deg);
  }
  plus-accordion[state^='collap']::part(svg) {
    fill: gray;
    transform: rotate(0deg);
  }
</style>
