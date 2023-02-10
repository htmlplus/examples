<script>
  import '@htmlplus/core/card.js';
  import '@htmlplus/core/intersection.js';
  import '@htmlplus/core/spinner.js';
  function onChange(event) {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.hidden = false;
      spinner.hidden = true;
    }, 1000);
  }
</script>

<div class="container">
  <plus-intersection once on:plus-change="{event => onChange(event)}">
    <plus-card elevation="10">
      <plus-spinner></plus-spinner>
      <img alt="Lazy Image" hidden data-src="https://placekitten.com/200/200" />
    </plus-card>
  </plus-intersection>
</div>

<style>
  .container {
    position: relative;
    height: 20rem;
    overflow: auto;
    background-color: #eeeeee;
  }

  img {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    margin: 0;
  }

  img:not([hidden]) {
    display: block;
  }

  plus-card {
    display: inline-block;
  }

  plus-intersection {
    display: block;
    text-align: center;
    margin: 50rem auto;
  }

  plus-spinner {
    margin: 1rem;
  }
</style>
