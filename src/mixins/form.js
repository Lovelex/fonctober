export default {
	data: () => ({
		isLoading: false,
		mode: 'submit',
		dialog: {
			isActive: false
		},
		rules: {
      required: v => !!v || "O campo deve ser preenchido",
      email: v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
      min: v => v.length >= 6 || "A senha dever ter no mínimo 6 dígitos",
      ddd: v => v.length === 2 || "DDD deve ter 2 dígitos",
      sms: v => v.length === 6 || "Código inválido",
      zip: v => v.length === 8 || "CEP inválido",
      cpf: v => !!v && v.length === 11 || "cpf inválido",
      phone: v => v.length >= 8 && v.length <= 9 || "Número do telefone inválido",
      onlyNumbers: v => !(/\D/g.test(v)) || "Apenas números são permitidos"
    }
	}),
	methods: {
		openDialog() {
			this.dialog.isActive = true
		},
		closeDialog() {
			this.dialog.isActive = false
		},
		updateMode() {
			this.mode = 'update'
		},
		submitMode() {
			this.mode = 'submit'
		},
		startLoading() {
			this.isLoading = true
		},
		stopLoading() {
			this.isLoading = false
		},
		clearForm() {
			Object.assign(this.$data, this.$options.data.apply(this));
		}
	}
}