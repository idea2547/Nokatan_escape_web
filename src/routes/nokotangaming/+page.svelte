<script>

  export let data;
  let selectedOption = 'AI Control';

  async function FollowNokotan () {

  }

  async function FollowKaewkap () {

  }

  async function SpeedUp () {

  }

  async function SpawnDeer () {

  }
</script>



<div class="mt-5 flex flex-col space-y-5 items-center justify-center sm:1/2">


  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">AI control</span>
      <input type="radio" name="radio-10" value="AI Control" bind:group={selectedOption} class="radio checked:bg-red-500" checked="checked" />
    </label>
  </div>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">skills</span>
      <input type="radio" name="radio-10" value="Skills" bind:group={selectedOption} class="radio checked:bg-blue-500" checked="checked" />
    </label>
  </div>

  {#if selectedOption == 'AI Control'}
  <button class="btn" on:click={FollowNokotan}>Toggle to follow nokotan</button>
  <button class="btn" on:click={FollowKaewkap}>Toggle to follow kaewkap</button>


  {:else}

    <button class="btn" on:click={SpeedUp}>SpeedUp nokotan</button>
    <button class="btn" on:click={SpawnDeer}>Spawn Deer</button>
    <button class="btn">Todo</button>


  {/if}
   
    

    <!-- <p class="mt-4">Message: {data.message}</p>
    <p>Timestamp: {data.timestamp}</p> -->
</div>
