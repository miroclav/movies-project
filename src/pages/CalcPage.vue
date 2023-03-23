<template>
    <div class="calculator">
        <div class="display">{{ currentValue }}</div>
        <div class="button-row">
            <button @click="appendNumber(7)">7</button>
            <button @click="appendNumber(8)">8</button>
            <button @click="appendNumber(9)">9</button>
            <button @click="performOperation('/')">/</button>
        </div>
        <div class="button-row">
            <button @click="appendNumber(4)">4</button>
            <button @click="appendNumber(5)">5</button>
            <button @click="appendNumber(6)">6</button>
            <button @click="performOperation('*')">*</button>
        </div>
        <div class="button-row">
            <button @click="appendNumber(1)">1</button>
            <button @click="appendNumber(2)">2</button>
            <button @click="appendNumber(3)">3</button>
            <button @click="performOperation('-')">-</button>
        </div>
        <div class="button-row">
            <button @click="appendNumber(0)">0</button>
            <button @click="performOperation('+')">+</button>
            <button @click="calculate()">=</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentValue: "",
            lastOperation: null,
        };
    },
    methods: {
        appendNumber(num) {
            this.currentValue += num;
        },
        performOperation(operation) {
            if (this.currentValue === "") return;
            if (this.lastOperation !== null) {
                this.calculate();
            }
            this.lastOperation = operation;
            this.currentValue += operation;
        },
        calculate() {
            if (this.lastOperation === null) return;
            const parts = this.currentValue.split(this.lastOperation);
            const left = parseFloat(parts[0]);
            const right = parseFloat(parts[1]);
            switch (this.lastOperation) {
                case "+":
                    this.currentValue = left + right;
                    break;
                case "-":
                    this.currentValue = left - right;
                    break;
                case "*":
                    this.currentValue = left * right;
                    break;
                case "/":
                    this.currentValue = left / right;
                    break;
            }
            this.currentValue = this.currentValue.toString();
            this.lastOperation = null;
        },
    },
};
</script>

<style>
.calculator {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 20px;
    border: 1px solid #ccc;
}

.display {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 24px;
    text-align: right;
    background-color: #eee;
}

.button-row {
    display: flex;
    justify-content: space-between;
}

button {
    flex: ;
}
</style>
