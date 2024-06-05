import React, { useEffect, useRef } from 'react'
import styles from './line-graph.module.css'
import * as echarts from 'echarts'

export type LineGraphProps = {}

export function LineGraph(props: LineGraphProps) {
    const chartRef = useRef(null)

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current)
        const option = {
            title: {
                text: 'Gráfico de Líneas con Zoom y Área Sombreada',
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['Máximo', 'Mínimo'],
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
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
            yAxis: {
                type: 'value',
            },
            dataZoom: [
                {
                    type: 'slider',
                    start: 0,
                    end: 100,
                },
            ],
            series: [
                {
                    name: 'Máximo',
                    type: 'line',
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Máximo' },
                            { type: 'min', name: 'Mínimo' },
                        ],
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Promedio' }],
                    },
                    areaStyle: {},
                },
                {
                    name: 'Mínimo',
                    type: 'line',
                    data: [620, 732, 701, 734, 1090, 1130, 1120],
                    markPoint: {
                        data: [
                            {
                                name: 'Semana más baja',
                                value: 620,
                                xAxis: 0,
                                yAxis: 620,
                            },
                        ],
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Promedio' }],
                    },
                    areaStyle: {},
                },
            ],
        }
        chartInstance.setOption(option)

        return () => {
            chartInstance.dispose()
        }
    }, [])
    return (
        <div data-testid="line-graph" className={styles.container}>
            <div ref={chartRef} style={{ height: '50vh' }} />
        </div>
    )
}
