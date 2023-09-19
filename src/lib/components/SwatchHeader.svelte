<div class="values">
	<div>L</div>
	<div>C</div>
	<div>H</div>
</div>

<style>
	.values {
		display: grid;
		grid-template-columns: 2fr repeat(4, 1fr);
		place-items: center;
	}

	.values div:nth-child(1) {
		grid-column: 2 / 3;
	}
	.values div:nth-child(2) {
		grid-column: 3 / 4;
	}
	.values div:nth-child(3) {
		grid-column: 4 / 5;
	}
</style>
