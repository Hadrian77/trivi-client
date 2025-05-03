import styles from './styles.module.css'


type ChoiceFieldProps = {

    index : number
    value : string
    onChange : (i : number, newValue: string) => void

}

const letters = ['A', 'B', 'C', 'D']



function ChoiceField({index,value, onChange }: ChoiceFieldProps) {

    const label = letters[index] ?? '?'

    return (

            <div className={styles.choice} >
                <label className={styles.label} htmlFor={"choice" + index}>{label}</label>
                <input type="text" id={"choice" + index} value={value} onChange={(e) => onChange(index, e.target.value)}></input>
            </div>
    )

}

export default ChoiceField