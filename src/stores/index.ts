import {defineStore} from "pinia";

export const useAppStore = defineStore("app", {
    state: () => ({
        currentStep: 1 as number
    }),
    getters: {
        getCurrentStep(): number {
            return this.currentStep
        }
    },
    actions: {
        setStep(step: number): void {
            this.currentStep = step
        }
    },
});
