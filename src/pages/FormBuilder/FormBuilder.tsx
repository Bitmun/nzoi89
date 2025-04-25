import React, { JSX, useState } from "react";
import { FormConfig } from "./type";
import "./styles.css";

export const FormBuilder = () => {
  const [formConfig, setFormConfig] = useState<FormConfig>({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });
  const [builtForm, setBuiltForm] = useState<JSX.Element | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormConfig((prevConfig) => ({
      ...prevConfig,
      [name]: parseInt(value, 10),
    }));
  };

  const handleBuildClick = () => {
    const inputs = Array.from({ length: formConfig.input });
    const textareas = Array.from({ length: formConfig.textarea });
    const checkboxes = Array.from({ length: formConfig.checkbox });

    if (
      inputs.length === 0 &&
      textareas.length === 0 &&
      checkboxes.length === 0
    ) {
      setBuiltForm(<h2>Nothing to display</h2>);
      return;
    }

    setBuiltForm(
      <form className='buildedForm'>
        {inputs.map((_, i) => (
          <input key={`input${i}`} type='text' placeholder={`Input ${i}`} />
        ))}
        {textareas.map((_, i) => (
          <textarea key={`textarea-${i}`} placeholder={`Textarea ${i + 1}`} />
        ))}
        {checkboxes.map((_, i) => (
          <input key={`checkbox${i}`} type='checkbox' />
        ))}
      </form>
    );
  };

  return (
    <main>
      <div className='builderWrapper'>
        <h1>Form Builder</h1>
        <div className='inputWrapper'>
          Inputs:
          <input
            type='number'
            name='input'
            value={formConfig.input}
            onChange={handleInputChange}
            min={0}
          />
        </div>
        <div className='inputWrapper'>
          Textareas:
          <input
            type='number'
            name='textarea'
            value={formConfig.textarea}
            onChange={handleInputChange}
            min={0}
          />
        </div>
        <div className='inputWrapper'>
          Checkboxes:
          <input
            type='number'
            name='checkbox'
            value={formConfig.checkbox}
            onChange={handleInputChange}
            min={0}
          />
        </div>
        <button onClick={handleBuildClick}>Build</button>
      </div>
      {builtForm}
    </main>
  );
};
