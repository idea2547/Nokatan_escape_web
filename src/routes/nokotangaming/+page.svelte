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
      <span class="label-text">Follow Koshitan</span>
      <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked="checked" />
    </label>
  </div>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">Follow Crisp</span>
      <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked="checked" />
    </label>
  </div>

  
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">No skill</span>
      <input type="radio" name="radio-1" value="NoSkill" bind:group={selectedOption} class="radio checked:bg-red-500" checked="checked" />
    </label>
 
    <label class="label cursor-pointer">
      <span class="label-text">Skill 1</span>
      <input type="radio" name="radio-1" value="Skill01" bind:group={selectedOption} class="radio checked:bg-blue-500" checked="checked" />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">Skill 2</span>
      <input type="radio" name="radio-1" value="Skill02" bind:group={selectedOption} class="radio checked:bg-blue-500" checked="checked" />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">Skill 3</span>
      <input type="radio" name="radio-1" value="Skill03" bind:group={selectedOption} class="radio checked:bg-blue-500" checked="checked" />
    </label>
  </div>

    <button class="btn" on:click={FollowNokotan}>Submit</button>
    <!-- <button class="btn" on:click={FollowKaewkap}>Toggle to follow kaewkap</button>

    <button class="btn" on:click={SpeedUp}>SpeedUp nokotan</button>
    <button class="btn" on:click={SpawnDeer}>Spawn Deer</button>
    <button class="btn">Todo</button> -->


    

    <!-- <p class="mt-4">Message: {data.message}</p>
    <p>Timestamp: {data.timestamp}</p> -->
</div>
