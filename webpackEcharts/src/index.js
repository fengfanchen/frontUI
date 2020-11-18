import EChars from 'echarts'

const charDom = document.getElementById('chart')
const chart = EChars.init(charDom)
chart.setOption({
    title: {
        text: 'test'
    },
    xAxis: {
        data: ['一个', '两个', '三个', '四个']
    },
    yAxis: {},
    series: {
        type: 'bar',
        data: [100, 200, 300, 400]
    }
})