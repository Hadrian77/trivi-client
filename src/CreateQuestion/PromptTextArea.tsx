import styles from './styles.module.css'

type PromptTextAreaProps = {

    prompt : string;
    onChange : (newValue: string) => void

}



function PromptTextArea({prompt,onChange} : PromptTextAreaProps) {

    

    return (
        <div>
            <label className={styles.label} htmlFor="create-question-prompt">Question Prompt</label>
            <textarea rows={3} name="create-question-prompt" id="create-question-prompt" value={prompt} onChange={(e) => onChange(e.target.value)}></textarea>
        </div>
        )


}
export default PromptTextArea