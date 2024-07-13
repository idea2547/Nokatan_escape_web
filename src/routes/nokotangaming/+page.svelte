<script>

  export let data;

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

    <button class="btn" on:click={FollowNokotan}>Toggle to follow nokotan</button>
    <button class="btn" on:click={FollowKaewkap}>Toggle to follow kaewkap</button>
    <button class="btn" on:click={SpeedUp}>SpeedUp nokotan</button>
    <button class="btn" on:click={SpawnDeer}>Spawn Deer</button>
    <button class="btn">Todo</button>

    <!-- <p class="mt-4">Message: {data.message}</p>
    <p>Timestamp: {data.timestamp}</p> -->
</div>
