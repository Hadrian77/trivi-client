function NewQuestion(){




    return(

        <>
        <h2>Create Question</h2>
        <div>
            <label htmlFor="prompt">Question Prompt </label>
            <textarea rows={5} name="prompt" id="prompt"></textarea>
        </div>
        <div id="choices">
            <label htmlFor="choice1">A</label>
            <input type="text" id="choice1"></input>
            
            <label htmlFor="choice2">B</label>
            <input type="text" id="choice2"></input>
        </div>
        </>

    )

    


}

export default NewQuestion;