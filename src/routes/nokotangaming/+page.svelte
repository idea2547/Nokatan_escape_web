<script>
	let data = {
		ai: 1,
		skill: 0
	};
	function onChangeAi(e) {
		data.ai = parseInt(e.currentTarget.value);
	}

	function onChangeSkill(e) {
		data.skill = parseInt(e.currentTarget.value);
	}

	async function submitRequest() {
		const response = await fetch('/api/move', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const result = await response.json();
		console.log(result);
	}
</script>

<div class="mt-5 flex flex-col space-y-5 items-center justify-center sm:1/2">
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Follow Koshitan</span>
			<input
				type="radio"
				value="1"
				name="radio-10"
				on:change={onChangeAi}
				class="radio checked:bg-red-500"
				checked={data.ai == 1}
			/>
		</label>
	</div>
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Follow Crisp</span>
			<input
				type="radio"
				value="2"
				name="radio-10"
				on:change={onChangeAi}
				class="radio checked:bg-blue-500"
				checked={data.ai == 2}
			/>
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">No skill</span>
			<input
				type="radio"
				value="0"
				name="radio-1"
				on:change={onChangeSkill}
				class="radio checked:bg-red-500"
				checked={data.skill == 0}
			/>
		</label>

		<label class="label cursor-pointer">
			<span class="label-text">Skill 1</span>
			<input
				type="radio"
				value="1"
				name="radio-1"
				on:change={onChangeSkill}
				class="radio checked:bg-blue-500"
				checked={data.skill == 1}
			/>
		</label>
		<label class="label cursor-pointer">
			<span class="label-text">Skill 2</span>
			<input
				type="radio"
				value="2"
				name="radio-1"
				on:change={onChangeSkill}
				class="radio checked:bg-blue-500"
				checked={data.skill == 2}
			/>
		</label>
		<label class="label cursor-pointer">
			<span class="label-text">Skill 3</span>
			<input
				type="radio"
				value="3"
				name="radio-1"
				on:change={onChangeSkill}
				class="radio checked:bg-blue-500"
				checked={data.skill == 3}
			/>
		</label>
	</div>

	<button class="btn" on:click={submitRequest}>Submit</button>
</div>
