<template>
  <main class="flex items-center justify-center">
    <NCard
      size="medium"
      class="max-w-[500px]"
      embedded
      title="Registrar tentativa"
      content-style="display: flex; flex-direction: column; gap: 16px;"
    >
      <EventSelect v-model="form.currentEventId" only-active />
      <NText tag="label">
        Número do candidato
        <NInputNumber
          v-model:value="form.candidate"
          class="mt-1"
          placeholder="Digite o número do candidato"
        />
      </NText>
      <NText tag="label">
        Número do boulder
        <NInputNumber
          v-model:value="form.boulder"
          class="mt-1"
          type="password"
          placeholder="Digite o número do boulder"
        />
      </NText>
      <NRadioGroup v-model:value="form.sent" name="sent" size="large" class="mt-3 self-center">
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
        <NButton @click="openModal" size="large"> Registrar </NButton>
      </div>
    </NCard>
    <ConfirmEntryModal v-model:show="show" @action="onSubmit" :data="form"/>
  </main>
</template>

<script setup lang="ts">
import EventSelect from '@/components/EventSelect/EventSelect.vue'
import ConfirmEntryModal from '@/components/ConfirmEntryModal/ConfirmEntryModal.vue'
import { NInputNumber, NText, NCard, NButton, useNotification, NRadioGroup, NRadioButton } from 'naive-ui'
import { computed, reactive, ref } from 'vue'

const userStore = useUserStore()
const entryStore = useEntryStore()
const notification = useNotification()
const form = reactive({
  candidate: 0,
  boulder: 0,
  sent: false,
  currentEventId: undefined
})
const show = ref(false)
const formIsInvalid = computed(() => {
  const { candidate, boulder, currentEventId } = form
  return (!candidate || !boulder || currentEventId === undefined)
})
function resetForm() {
  form.candidate = 0
  form.boulder = 0
  form.sent = false
  show.value = false
}

function openModal() {
  if (formIsInvalid.value) return
  show.value = true
}

async function onSubmit() {
  const { candidate, boulder, sent } = form
  const currentEventId = Number(form.currentEventId)
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
  }
  
  resetForm()
}
</script>
