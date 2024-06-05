import React from 'react'
import styles from './example-2.module.css'
import { ScatterGraph } from '@/echarts/components/scatter-graph'

type Example2ViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function Example2View(props: Example2ViewProps) {
    return (
        <div data-testid="example-2-view" className={styles.container}>
            <ScatterGraph />
        </div>
    )
}
