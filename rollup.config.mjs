export default [
	{
		input: 'src/reflector-ipc-main.cjs',
		output: {
			name: "reflector-ipc-main",
			file: 'dist/reflector-ipc-main.cjs.js',
			format: 'cjs'
		},
		// dependencies are left external (required at runtime), not bundled
		external: [
			'@knev/bitlogr',
			'@ipsme/msgenv-mqtt',
			'@ipsme/msgcache-dedup'
		]
	}
];
