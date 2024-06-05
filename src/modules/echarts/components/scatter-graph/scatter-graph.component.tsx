import React, { useEffect, useRef } from 'react'
import styles from './scatter-graph.module.css'
import * as echarts from 'echarts'
import 'echarts-gl'

export type ScatterGraphProps = {}

export function ScatterGraph(props: ScatterGraphProps) {
    const chartRef = useRef(null)

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current)
        const option = {
            title: {
                text: 'Gráfico de Dispersión 3D',
            },
            tooltip: {},
            xAxis3D: {
                type: 'value',
            },
            yAxis3D: {
                type: 'value',
            },
            zAxis3D: {
                type: 'value',
            },
            grid3D: {
                viewControl: {
                    projection: 'perspective',
                },
            },
            series: [
                {
                    type: 'scatter3D',
                    data: [
                        [1, 2, 3],
                        [2, 3, 4],
                        [3, 4, 5],
                        [4, 5, 6],
                        [5, 6, 7],
                    ],
                    symbolSize: 12,
                    itemStyle: {
                        color: '#ff0000',
                    },
                },
            ],
        }
        chartInstance.setOption(option)

        return () => {
            chartInstance.dispose()
        }
    }, [])
    return (
        <div data-testid="scatter-graph" className={styles.container}>
            <div ref={chartRef} style={{ height: '90vh' }} />
        </div>
    )
}
