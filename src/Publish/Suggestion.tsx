import * as React from 'react';
import './Suggestion.css';

interface SuggestionProps {
  data: string[];
  handleClick: (element: string) => () => void
}

interface SuggestionState {
}

class Suggestion extends React.Component<SuggestionProps, SuggestionState> {
  public render() {
    return (
      <div className="Suggestion">
        { this.props.data.map(element => (<div key={element} onClick={this.props.handleClick(element)}>{element}</div>))}
      </div>
    );
  }
}

export default Suggestion;
