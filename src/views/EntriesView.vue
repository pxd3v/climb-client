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
      <NCheckbox label="mandou?" v-model:checked="form.sent" />
      <NButton @click="onSubmit"> Registrar </NButton>
    </NCard>
  </main>
</template>

<script setup lang="ts">
import { NInputNumber, NCheckbox, NText, NCard, NButton, useNotification } from 'naive-ui'
import { reactive } from 'vue'
import EventSelect from '@/components/EventSelect/EventSelect.vue'
import { useUserStore } from '@/stores/user'
import { useEntryStore } from '@/stores/entry'

const userStore = useUserStore()
const entryStore = useEntryStore()
const notification = useNotification()
const form = reactive({
  candidate: 0,
  boulder: 0,
  sent: false,
  currentEventId: undefined
})

async function onSubmit() {
  const { candidate, boulder, sent } = form
  const currentEventId = Number(form.currentEventId)
  const referee = userStore.user?.Referee.find((referee) => referee.eventId === currentEventId)
  if (!candidate || !boulder || !currentEventId || !referee) return

  const entry = await entryStore.createOrUpdateEntry({
    sent: sent,
    eventId: currentEventId,
    candidateNumber: candidate,
    boulderNumber: boulder,
    refereeId: referee.id
  })

  if (entry.id) {
    notification.success({
      content: 'Entrada registrada com sucesso!',
      duration: 2000,
      keepAliveOnHover: true
    })
  }
  console.log('@@', form)
}
</script>
