
import styles from './styles.module.css'

type TagFieldProp = {

    index: number;
    value: string;
    onChange: (i: number, newValue: string) => void

}

function TagField({ index, value, onChange }: TagFieldProp) {


    return (
        <div className={styles.tag}>
            <label className={styles.label} htmlFor={"tag" + index}>{"Tag " + (index + 1) + ":"}</label>
            <input type='text' id={"tag" + index} value={value} onChange={(e) => onChange(index, e.target.value)}></input>
        </div>
    )

}
export default TagField