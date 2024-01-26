<script>
  import Button from "$lib/Button.svelte";
</script>

<div class="container grid">
  <div class="what">
    <h3>What We Do?</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at omnis atque in provident quas officia repellat iure nobis, reiciendis amet et asperiores rerum eius veniam aperiam quibusdam, eaque dolore.
      Ullam incidunt quis pariatur, labore magni aspernatur cupiditate officiis voluptates ratione possimus nobis asperiores blanditiis! Aut, quis repudiandae adipisci ipsa veniam perferendis autem, fuga aliquid rem laborum, quam amet vitae.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate voluptatum iure enim porro officia distinctio quia magni quaerat doloribus, eum incidunt, corrupti itaque consequatur. Provident quos saepe eum ex!
      Fuga nesciunt dolorum cum in pariatur totam nihil aspernatur expedita iste vero a nemo fugiat suscipit esse natus tenetur temporibus, vel doloribus nobis, asperiores dolor optio ab aperiam officia? Quia.
    </p>

    <Button class="secondary" id="a-button">Call To Action >></Button>
  </div>
  <div class="contact">
    <h3>Contact Us</h3>
    <p><strong>Start Bootstrap</strong></p>
    <p>3481 Melrose Place</p>
    <p>Beverly Hells, CA 90210</p>
    <p>P: (123) 456-7890</p>
    <p>E:<a href="mailto:name@example.com">name@example.com</a></p>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  .what {
    grid-column: span 8;
  }

  .contact {
    grid-column: span 4;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  a:hover {
    text-decoration: underline;
  }
</style>