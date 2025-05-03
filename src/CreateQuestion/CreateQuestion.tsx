import PromptTextArea from "./PromptTextArea";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import styles from './styles.module.css'
import ChoiceField from "./ChoiceField";
import TagField from "./TagField";

type Choice = {
    value: string;
    key: string;

}

type Tag = {
    value: string;
    key: string;
}



function CreateQuestion() {



    const [prompt, setPrompt] = useState<string>("")

    const initialChoiceArray = [{ value: "", key: uuidv4() }, { value: "", key: uuidv4() }]
    const [choices, setChoices] = useState<Choice[]>(initialChoiceArray)

    const initialTagArray = [{ value: "new", key: uuidv4() }, { value: "", key: uuidv4() }]
    const [tags, setTags] = useState<Tag[]>(initialTagArray)




    function handlePromptChange(value: string): void {
        setPrompt(value);
    }

    function handleChoiceAdd(): void {
        if (choices.length < 4) {
            setChoices([...choices, { value: "", key: uuidv4() }]);
        }
    }

    function handleChoiceRemove(): void {
        if (choices.length > 2) {
            setChoices((prev) => prev.slice(0, -1));
        }
    }

    function handleChoiceChange(index: number, newValue: string): void {
        setChoices((prevChoice) =>
            prevChoice.map((choice, i) =>
                i === index ? { ...choice, value: newValue } : choice
            )
        )
    }

    function handleTagAdd(): void {
        setTags([...tags, { value: "", key: uuidv4() }]);

    }

    function handleTagRemove(): void {
        if (tags.length > 1) {
            setTags((prev) => prev.slice(0, -1));
        }
    }

    function handleTagChange(index: number, newValue: string): void {
        setTags((prevTags) =>
            prevTags.map((tag, i) =>

                i === index ? { ...tag, value: newValue } : tag
            )
        )
    }

    return (
        <>
            <h2>Create Question</h2>
            <PromptTextArea
                prompt={prompt}
                onChange={handlePromptChange}
            />

            <div className={styles.choices} id="choices">
                {choices.map((choice, index) => (
                    <ChoiceField
                        onChange={handleChoiceChange}
                        key={choice.key}
                        value={choice.value}
                        index={index}
                    />
                ))}
            </div>
            <div>
                {choices.length < 4 && <button onClick={handleChoiceAdd}>+</button>}
                {choices.length > 2 && <button onClick={handleChoiceRemove}>-</button>}
            </div>

            {tags.map((tag, index) =>

                <TagField

                    onChange={handleTagChange}
                    value={tag.value}
                    index={index}
                    key={tag.key}
                />

            )}
            <div>
                {tags.length < 10 && <button onClick={handleTagAdd}>+</button>}
                {tags.length > 0 && <button onClick={handleTagRemove}>-</button>}
            </div>
        </>
    )
}

export default CreateQuestion;