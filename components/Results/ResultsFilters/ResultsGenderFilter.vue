<template>
  <NText tag="label" class="w-full">
    Gênero
    <NSelect
      :value="props.modelValue"
      :options="options"
      :on-update:value="onInput"
      :show-checkmark="false"
      class="mt-2"
    />
  </NText>
</template>

<script setup lang="ts">
import { NSelect, NText } from 'naive-ui'
type ResultsGenderFilterProps = {
  modelValue: string
}
type ResultsGenderFilterEmits = {
  (e: 'update:modelValue', value: string): void
}
const props = defineProps<ResultsGenderFilterProps>()
const emit = defineEmits<ResultsGenderFilterEmits>()
const onInput = (newValue: string) => {
  emit('update:modelValue', newValue)
}

const options = [
  {
    label: 'Masculino',
    value: 'Male'
  },
  {
    label: 'Feminino',
    value: 'Female'
  },
  {
    label: 'Todos',
    value: 'all'
  }
]
</script>
