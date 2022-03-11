import { defineStore } from "pinia"
// counter名字,在文件中需要使用这个
export const useCounterStore = defineStore("counter", {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        // 可以使用异步操作
        increment() {
            this.count++
        }
    },
    getters: {
        // 和计算属性用法相同在第一个参数获取到state中的值
        newData: (state) => state.count + 100
    }
})
