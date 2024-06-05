import React from 'react'
import styles from './example-1.module.css'
import { BarGraph } from '@/echarts/components/bar-graph'

type Example1ViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function Example1View(props: Example1ViewProps) {
    return (
        <div data-testid="example-1-view" className={styles.container}>
            <BarGraph />
        </div>
    )
}
