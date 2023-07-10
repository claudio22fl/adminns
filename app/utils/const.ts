export const COLORS = ["#c70c0c", "#00C49F", "#FFBB28", "#0088FE"];

export const SSHCOMMAND_SELECTED = {
    RAM: 'free',
    CPU: 'mpstat',
    MEMORY: 'df -h',
} as const

export const SELECTER_SSH = {
    [SSHCOMMAND_SELECTED.RAM]:{
        name: 'RAM',
        code: 'free'
    },
    [SSHCOMMAND_SELECTED.CPU]:{
        name: 'CPU',
        code: 'mpstat'
    },
    [SSHCOMMAND_SELECTED.MEMORY]:{
        name: 'MEMORY',
        code: 'df -h'
    }
} as const

export type SelecterValue =  typeof SSHCOMMAND_SELECTED[keyof typeof SSHCOMMAND_SELECTED];

