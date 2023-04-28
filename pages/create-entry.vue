<template>
  <main class="flex items-center justify-center flex-1 h-full">
    <div
      class="max-w-[500px] flex flex-col gap-2"
    >
      <NText tag="label" class="flex flex-col gap-2 w-full text-lg">
        Número do candidato
        <NInputNumber
          v-model:value="form.candidate"
          class="mt-1"
          placeholder="Digite o número do candidato"
          @update-value="v$.candidate.$touch"
          min="1"
        />
        <div class="h-6 text-sm">
          <NText type="error"  v-if="v$.candidate.$errors[0]">
            {{ v$.candidate.$errors[0].$message }}
          </NText>
        </div>
      </NText>
      <NText tag="label" class="flex flex-col gap-2 w-full text-lg">
        Número do boulder
        <NInputNumber
          v-model:value="form.boulder"
          class="mt-1 text-base"
          type="password"
          placeholder="Digite o número do boulder"
          @update-value="v$.boulder.$touch"
          min="1"
        />
        <div class="h-6 text-sm">
          <NText type="error" v-if="v$.boulder.$errors[0]">
            {{ v$.boulder.$errors[0].$message }}
          </NText>
        </div>
      </NText>
      <NRadioGroup v-model:value="form.sent" name="sent" size="large" class="self-center mt-3">
          <NRadioButton
            key="try"
            :value="false"
            label="Tentativa"
          />
          <NRadioButton
            key="sent"
            :value="true"
            label="Top"
          />
      </NRadioGroup>
      <div class="flex items-center justify-center mt-3">
        <NButton @click="openModal" size="large" :disabled="formIsInvalid">Registrar</NButton>
      </div>
    </div>
    <ConfirmEntryModal v-model:show="show" @action="onSubmit" :data="form"/>
  </main>
</template>

<script setup lang="ts">
import ConfirmEntryModal from '@/components/ConfirmEntryModal/ConfirmEntryModal.vue'
import { NInputNumber, NText, NButton, useNotification, NRadioGroup, NRadioButton } from 'naive-ui'
import { required, numeric, minValue, helpers } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

useHead({
  title: 'Dyno - Registrar Entrada',
})

definePageMeta({
  layout: "authenticated",
  middleware: [
    function () {
      const eventStore = useEventStore()
      if(eventStore.currentEvent?.ended) {
        return navigateTo('/results')
      }
    },
  ],
});

const eventStore = useEventStore()
const userStore = useUserStore()
const entryStore = useEntryStore()
const notification = useNotification()

const form = reactive({
  candidate: 0,
  boulder: 0,
  sent: false,
})

const rules = computed(() => {
  return {
    candidate: { 
      required: helpers.withMessage('Número do candidato é obrigatório.', required), 
      numeric: helpers.withMessage('Número do candidato precisar ser um número.', numeric),
      minValue: helpers.withMessage('Número do candidato não pode ser "0".', minValue(1))
    },
    boulder: { 
      required: helpers.withMessage('Número do boulder é obrigatório.', required), 
      numeric: helpers.withMessage('Número do boulder precisar ser um número.', numeric),
      minValue: helpers.withMessage('Número do boulder não pode ser "0".', minValue(1))
    },
  };
});

const v$ = useVuelidate(rules, form);

const show = ref(false)

const formIsInvalid = computed(() => {
  return (v$.value.$invalid|| eventStore.currentEventId === undefined)
})

function resetForm() {
  form.candidate = 0
  form.boulder = 0
  form.sent = false
  show.value = false
  v$.value.$reset()
}

function openModal() {
  if (formIsInvalid.value) return
  show.value = true
}

async function onSubmit() {
  const { candidate, boulder, sent } = form
  const currentEventId = Number(eventStore.currentEventId)
  const referee = userStore.user?.Referee.find((referee) => referee.eventId === currentEventId)
  if (formIsInvalid.value || !referee) return

  const result = await entryStore.createOrUpdateEntry({
    sent: sent,
    eventId: currentEventId,
    candidateNumber: candidate,
    boulderNumber: boulder,
    refereeId: referee.id
  })

  if (result?.id) {
    notification.success({
      content: 'Entrada registrada com sucesso!',
      duration: 2000,
      keepAliveOnHover: true
    })
    resetForm()
  } 
}

watch(() => eventStore.currentEvent?.ended, (ended) => {
  if (ended) {
    navigateTo('/results')
  }
})
</script>
