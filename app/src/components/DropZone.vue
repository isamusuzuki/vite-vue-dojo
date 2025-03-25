<script setup lang="ts">
import axios, { type AxiosResponse } from 'axios'
import { ref } from 'vue'
import { useStoreLoading } from '../store/loading'
import { useStoreModal } from '../store/modal'

const selectedFilename = ref('')
const buttonDisabled = ref(true)
const isDragging = ref(false)
const storeLoading = useStoreLoading()
const storeModal = useStoreModal()
let targetFile: File | null = null
type response = {
    success: boolean,
    message: string,
}

const dragging = (n: number) => {
    if (n === 1) {
        isDragging.value = true
    } else {
        isDragging.value = false
    }
}

const fileSelected = (event: Event) => {
    const target = event.target as HTMLInputElement
    const files: FileList | null = target.files
    if (files && files.length > 0) {
        targetFile = files[0]
        selectedFilename.value = files[0].name
        buttonDisabled.value = false
    }
}

const fileDropped = (event: DragEvent) => {
    isDragging.value = false
    if (event.dataTransfer) {
        const files: FileList = event.dataTransfer.files
        if (files.length > 0) {
            targetFile = files[0]
            selectedFilename.value = files[0].name
            buttonDisabled.value = false
        }
    }
}

const fileUpload = () => {
    if (targetFile) {
        storeLoading.openLoading()
        const formData = new FormData()
        formData.append('uploadFile', targetFile)
        axios
            .post('/api/ingen/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then((response: AxiosResponse<response>) => {
                if (response.data.success) {
                    storeModal.openModal(true, '成功', response.data.message)
                } else {
                    storeModal.openModal(false, '失敗', response.data.message)
                }
                targetFile = null
                selectedFilename.value = ''
                buttonDisabled.value = true
                storeLoading.closeLoading()
            })
            .catch((error: string) => {
                storeModal.openModal(false, '失敗', error)
                targetFile = null
                selectedFilename.value = ''
                buttonDisabled.value = true
                storeLoading.closeLoading()
            })
    } else {
        storeModal.openModal(false, '失敗', 'ファイルを添付してください')
    }
}
</script>

<template>
    <div
        class="box"
        @dragover.prevent="dragging(1)"
        @dragleave.prevent="dragging(0)"
        @drop.prevent="fileDropped"
        :class="{ 'has-background-grey-light': isDragging }"
    >
        <h1 class="title">ファイルアップロードのテスト</h1>
        <h2 class="subtitle">
            この枠にファイルをドラッグ＆ドロップ可能<br>
            開発サーバーで「アップロード」ボタンをクリックするとエラーになります
        </h2>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <div class="file has-name">
                        <label class="file-label">
                            <input
                                class="file-input"
                                type="file"
                                name="file"
                                @change.prevent="fileSelected"
                            />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        style="fill: black"
                                    >
                                        <use href="#upload" />
                                    </svg>
                                </span>
                                <span class="file-label">ファイルを選択</span>
                            </span>
                            <span class="file-name" style="width: 300px">
                                {{ selectedFilename }}
                            </span>
                        </label>
                    </div>
                </div>
                <div class="level-item">
                    <button
                        @click="fileUpload"
                        class="button is-primary"
                        :disabled="buttonDisabled"
                    >
                        アップロード
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>