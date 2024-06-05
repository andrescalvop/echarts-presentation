import React, { useEffect, useRef } from 'react'
import styles from './bar-graph.module.css'
import * as echarts from 'echarts'

export type BarGraphProps = {}

export function BarGraph(props: BarGraphProps) {
    const chartRef = useRef(null)

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current)
        const option = {
            title: {
                text: 'Gráfico de Barras Apiladas',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            legend: {
                data: [
                    'Gastos fijos',
                    'Gastos flexibles',
                    'Nóminas',
                    'Marketing',
                    'Envios',
                ],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: [
                    'Lunes',
                    'Martes',
                    'Miercoles',
                    'Jueves',
                    'Viernes',
                    'Sábado',
                    'Domingo',
                ],
            },
            series: [
                {
                    name: 'Gastos fijos',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [320, 302, 301, 334, 390, 330, 320],
                },
                {
                    name: 'Gastos flexibles',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: 'Nóminas',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: 'Marketing',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [150, 212, 201, 154, 190, 330, 410],
                },
                {
                    name: 'Envios',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                },
            ],
        }
        chartInstance.setOption(option)

        return () => {
            chartInstance.dispose()
        }
    }, [])
    return (
        <div data-testid="bar-graph" className={styles.container}>
            <div ref={chartRef} style={{ height: '50vh' }} />
        </div>
    )
}
