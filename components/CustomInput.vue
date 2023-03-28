
<template>
	<div class="relative w-full">
		<input type="text" :id="slugifiedLabel" :list="'datalist-' + slugifiedLabel" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-input font-semibold rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm placeholder-transparent text-gray-900 bg-neutral-100 border-0 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-0 peer" :placeholder="label" required />
		<label :for="slugifiedLabel" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:cursor-text">{{ label }} <span v-if="required" class="italic font-light text-xs">*</span></label>
		<datalist :id="'datalist-' + slugifiedLabel" v-if="datalist">
			<option v-for="data in datalist" key="data" :value="data" />
		</datalist>
	</div>
</template>

<script lang="ts">
export default {
	name: "CustomInput",
	props: {
		modelValue: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: false,
		},
		required: {
			type: Boolean,
			required: false,
		},
		datalist: {
			type: Array,
			required: false,
		}
	},
	emits: ['update:modelValue'],
	computed: {
		slugifiedLabel() {
			const slugify = useSlugify()
			if (this.label)
				return slugify(this.label)
			else
				return ''
		}
	}
}
</script>
