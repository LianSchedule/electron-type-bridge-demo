<template>
    <div>
        <div>window1</div>
        <div style="border: 1px solid gray; padding: 10px">
            <div>
                <div>number1: <input type="number" v-model="value1" /></div>
                <div>number2: <input type="number" v-model="value2" /></div>
            </div>
            <button @click="invokeMainProgressCWithResult">
                Invoke Main Progress Sum With Result
            </button>
            <div v-if="value3">result: {{ value3 }}</div>
        </div>
        <div style="border: 1px solid gray; padding: 10px; margin-top: 20px">
            <button @click="invokeMainProgressCWithoutResult">
                Invoke Main Progress Sum Without Result
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import rendererProgressClass from 'electron-type-bridge/rendererProgress'
import { browserWindowIdsEnum, dymamicData, ipcMainHandleIdsEnum } from '../../../shared/types'
import { onBeforeMount, ref } from 'vue'
import dayjs from 'dayjs'
const value1 = ref(1)
const value2 = ref(2)
const value3 = ref<number | undefined>(undefined)
let instance: rendererProgressClass<dymamicData, browserWindowIdsEnum.window1>
onBeforeMount(async () => {
    instance = new rendererProgressClass<dymamicData, browserWindowIdsEnum.window1>({
        currentBrowserWindowId: browserWindowIdsEnum.window1,
        onMessageHandler: window.api.on,
        invokeHandler: window.api.invoke,
        sendMessageHandler: window.api.send
    })
    instance.addHandles({
        d: async (req) => {
            console.log(
                dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
                'window1 d called. req:',
                req.params
            )
            return '888'
        }
    })
    instance.init()
})
const invokeMainProgressCWithResult = async () => {
    value3.value = await instance.invokeMainProgressWithResult(ipcMainHandleIdsEnum.sum, {
        number1: value1.value,
        number2: value2.value
    })
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'), 'res of call main c:', value3.value)
}
const invokeMainProgressCWithoutResult = () => {
    instance.invokeMainProgressWithoutResult(ipcMainHandleIdsEnum.sum, {
        number1: 18,
        number2: 12
    })
}
</script>
