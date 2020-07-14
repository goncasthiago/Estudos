lista2 = [
	[ 'branco', 'P', 'aaaaa' ],
	[ 'vermelho', 'P', 'aaaa' ],
	[ 'branco', 'P', 'ccccccc' ],
	[ 'vermelho', 'M', 'cccc' ],
	[ 'vermelho', 'P', 'zzzzz' ],
	[ 'vermelho', 'P', 'bbbb' ],
	[ 'vermelho', 'M', 'aaa' ],

	[ 'vermelho', 'M', 'fffff' ],
	[ 'vermelho', 'G', 'lllll' ],
	[ 'branco', 'M', 'aaaa' ],
	[ 'vermelho', 'P', 'aaa' ],
	[ 'branco', 'G', 'aaaaaa' ],
	[ 'vermelho', 'G', 'bbbbu' ],
	[ 'branco', 'G', 'bbbb' ],
	[ 'vermelho', 'P', 'ddddd' ]
];

'teste'.toLowerCase;
lista2
	.sort((a, b) => {
		if (a[2] > b[2]) {
			return 1;
		}
		if (a[2] < b[2]) {
			return -1;
		}
		// a must be equal to b
		return 0;
	})
	.sort((a, b) => {
		if (a[1] < b[1]) {
			return 1;
		}
		if (a[1] > b[1]) {
			return -1;
		}
		// a must be equal to b
		return 0;
	})
	.sort((a, b) => {
		if (a[0] > b[0]) {
			return 1;
		}
		if (a[0] < b[0]) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});

console.log(lista2);
