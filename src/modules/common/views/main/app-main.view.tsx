import React from 'react'
import styles from './app-main.module.css'
import { LineGraph } from '@/echarts/components/line-graph'

export function AppMainView() {
    return (
        <div data-testid="app-main-view" className={styles.container}>
            <LineGraph />
        </div>
    )
}
