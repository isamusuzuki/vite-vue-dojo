<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreModal } from '../store/modal'

const { modalActive, modalIcon, modalTitle, modalBody } = storeToRefs(useStoreModal())
const { closeModal } = useStoreModal()
</script>

<template>
    <div class="modal" v-bind:class="{ 'is-active': modalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <div class="modal-card-title">
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                                <span v-html="modalIcon"></span>
                            </div>
                            <div class="level-item">
                                <span v-text="modalTitle"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <button aria-label="close" class="delete" v-on:click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <span v-text="modalBody"></span>
            </section>
            <footer class="modal-card-foot">
                <div class="buttons is-centered">
                    <button class="button is-light" v-on:click="closeModal">Close</button>
                </div>
            </footer>
        </div>
    </div>
</template>