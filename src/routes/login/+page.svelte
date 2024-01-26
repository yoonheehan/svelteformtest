<script>
  import { applyAction, enhance } from "$app/forms";
  export let form

  let opened = false

  function test(event){
    opened = true
  }

  function clicked(){
    // document.getElementById('form').submit()
    document.getElementById('sub').click()
  }

</script>

<div class="container">
  <h1>Login</h1>


  {#if form?.message}
  <p class="red">{form.message}</p>
  {/if}
  <form method="POST" action="?/check" use:enhance={() => {
    return async({result}) => {
      console.log(result)
      await applyAction(result)
    }
  }}>
    <div>
      <input type="text" name="email" value={form?.email || ""}>
    </div>
    <div>
      <input type="password" name="password">
    </div>
    <button type="button" on:click={test}>Login</button>
    <button style="display: none;" type="submit" id="sub">Login</button>
  </form>
</div>

{#if opened}
  <div>
    <div>계속 진행하실겁니까?</div>
    <button type="button" on:click={e => clicked(e)}>Login</button>
  </div>
{/if}


<style>
  .red {
    color: red;
  }
</style>