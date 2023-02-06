import React from 'react';
import Showdown from 'showdown';

const ConverterMarkdown = ({text}) => {

  const converter = new Showdown.Converter();    // Création d'une instance de l'objet Showdown.Converter
  const result = {__html: converter.makeHtml(text)};

    return (
      <div className="markdown-preview" dangerouslySetInnerHTML={result}></div>
  )
}
export default ConverterMarkdown;
